import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../../components/MainLayouts/components/main";
import QuantityField from "../../../components/form-controls/QuantityField";
import { removeItemCart, setQuantity } from "../cartSlice";

function createData(image, name, quantity, price, total, slug) {
  return { image, name, quantity, price, total, slug };
}

function ProductsListCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const rows = cartItems.map((item) =>
    createData(
      item.product?.images ? JSON.parse(item.product.images)[0] : null,
      item.product?.name || "",
      item.quantity,
      item.product?.price || 0,
      item.quantity * item.product?.price || 0,
      item.slug
    )
  );

  const total = rows.reduce((accumulator, row) => accumulator + row.total, 0);

  const handleDeleteItemCart = (slug) => {
    dispatch(removeItemCart(slug));
  };

  const handleQuantityChange = (slug, newQuantity) => {
    dispatch(setQuantity({ slug, quantity: newQuantity }));
  };

  return (
    <Main>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img
                    src={`http://localhost:8000/images/products/${row.image}`}
                    alt={row.name}
                    style={{ maxWidth: 90, maxHeight: 70 }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <QuantityField
                    quantity={row.quantity}
                    onChange={(newQuantity) =>
                      handleQuantityChange(row.slug, newQuantity)
                    }
                  />
                </TableCell>
                <TableCell align="left">
                  {row.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </TableCell>
                <TableCell align="left">
                  {row.total.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleDeleteItemCart(row.slug)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography align="right" color="dark" paddingRight={10} paddingTop={2}>
        Total:{" "}
        {total.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
      </Typography>
    </Main>
  );
}

export default ProductsListCart;
