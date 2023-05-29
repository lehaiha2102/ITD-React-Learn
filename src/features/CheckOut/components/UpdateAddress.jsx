import { yupResolver } from "@hookform/resolvers/yup";
import PlaceIcon from "@mui/icons-material/Place";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import productApi from "../../../api/productApi";
import MyInputField from "../../../components/form-controls/InputField";

function UpdateAddress({ handleClose }) {
  const [address, setAddress] = useState("");
  const currentUser = useSelector((state) => state.user.current);
  const schema = yup
    .object({
      address: yup.string().required("Please enter address"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      address: "",
    },
    resolver: yupResolver(schema),
  });

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async () => {
    const { address } = form.getValues();
    try {
      const response = await productApi.creatAddress(currentUser.id, {
        address: address,
      });
      setAddress(response);
      handleClose();
      console.log('success')
    } catch (error) {
      console.log("Failed to change shipping address: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minWidth: "477px",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <PlaceIcon />
      </Avatar>
      <Typography component="h1" variant="h5" textAlign="center">
        Add New Address
      </Typography>
      <Box paddingTop={3} maxWidth="400px">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Box>
            <MyInputField
              name="address"
              label="ADDRESS"
              form={form}
              onChange={handleChangeAddress}
            />
          </Box>
          <Box textAlign="center" paddingTop={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Address
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default UpdateAddress;