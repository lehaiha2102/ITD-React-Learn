import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Checkbox, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Main from "../../../components/MainLayouts/components/main";
import QuantityField from "../../../components/form-controls/QuantityField";
import { removeItemCart, setQuantity } from "../cartSlice";

function createData(image, name, quantity, price, total, slug) {
  return { image, name, quantity, price, total, slug };
}

function ProductsListCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [productCheckout, setProductCheckout] = useState([]);

  const rows = cartItems.map((item) => ({
    image: item.product?.images ? JSON.parse(item.product.images)[0] : null,
    name: item.product?.name || "",
    quantity: item.quantity,
    price: item.product?.price || 0,
    total: item.quantity * item.product?.price || 0,
    slug: item.slug,
  }));

  const total = rows.reduce((accumulator, row) => accumulator + row.total, 0);
  const isCheckoutDisabled = productCheckout.length === 0;

  const handleDeleteItemCart = (slug) => {
    dispatch(removeItemCart(slug));
  };

  const handleQuantityChange = (slug, newQuantity) => {
    console.log("slug:", slug, "quantity:", newQuantity);
    dispatch(setQuantity({ slug, quantity: newQuantity }));
  };

  const handleChooseProduct = (slug, quantity, name, price, image) => {
    const selectedProduct = {
      slug: slug,
      quantity: quantity,
      name: name,
      price: price,
      image: image,
    };

    const isSelected = productCheckout.some((product) => product.slug === slug);

    if (isSelected) {
      const updatedProductCheckout = productCheckout.filter(
        (product) => product.slug !== slug
      );
      setProductCheckout(updatedProductCheckout);
    } else {
      setProductCheckout([...productCheckout, selectedProduct]);
    }
  };

  return (
    <Main>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    onClick={() =>
                      handleChooseProduct(
                        row.slug,
                        row.quantity,
                        row.name,
                        row.price,
                        row.image
                      )
                    }
                  />
                </TableCell>
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
      <Box display="flex" justifyContent="center" textAlign="center">
        <Button variant="outlined" disabled={isCheckoutDisabled}>
          <Link
            to={`/check-out/list?data=${encodeURIComponent(
              JSON.stringify(productCheckout)
            )}`}
          >
            Check out
          </Link>
        </Button>
      </Box>
    </Main>
  );
}

export default ProductsListCart;
