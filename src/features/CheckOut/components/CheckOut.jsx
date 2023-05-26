import { yupResolver } from "@hookform/resolvers/yup";
import {
    Box,
    Container,
    Grid,
    Paper
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import InFoCheckout from "./Info";
function createData(image, name, quantity, price, slug) {
  return { image, name, quantity, price, slug };
}

function CheckOut() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const encodedData = searchParams.get("data");
    if (encodedData) {
      const decodedData = JSON.parse(decodeURIComponent(encodedData));
      setData(decodedData);
    }
  }, [location.search]);
  const rows = data.map((item) => ({
    image: item.image,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    total: item.total,
    slug: item.slug,
    total: item.price * item.quantity,
  }));
  const total_price = () => {
    let totalPrice = 0;
    for (const item of rows) {
      totalPrice += item.total;
    }
    return totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Invalid email")
        .required("Please enter your email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
          "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
        ),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <Box paddingTop={1}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <h4>Your Orders</h4>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 530 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Product Name</TableCell>
                      <TableCell align="left">Quantity</TableCell>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                        <TableCell align="center">{row.quantity}</TableCell>
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
        <InFoCheckout/>
      </Container>
    </Box>
  );
}

export default CheckOut;
