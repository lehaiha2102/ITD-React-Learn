import { yupResolver } from "@hookform/resolvers/yup";
import PhoneIcon from "@mui/icons-material/Phone";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import MyInputField from "../../../components/form-controls/InputField";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

function UpdatePhone() {
  const currentUser = useSelector((state) => state.user.current);
  const [phone, setPhone] = useState('');

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    useEffect(() => {
      (async () => {
        try {
          const phone = await productApi.changePhone(currentUser.id, phone);
        } catch (error) {
          console.log("Failed to change shipping phone: ", error);
        }
      })();
    },[])
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PhoneIcon />
        </Avatar>
        <Typography component="h1" variant="h5" textAlign="center">
          Update Contact Number
        </Typography>
        <Box paddingTop={3}>
          <form onSubmit={handleSubmit}>
            <Box textAlign="center" display="flex" justifyContent="center">
              <TextField
                id="outlined-basic"
                label="Your Phone"
                name="phoneNumber"
                variant="outlined"
                value={phone}
                onChange={handleChangePhone}
              />
              <Button
                style={{
                  background: "#1abc9c",
                  color: "#ffffff",
                  border: "none",
                }}
                type="submit"
              >
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default UpdatePhone;
