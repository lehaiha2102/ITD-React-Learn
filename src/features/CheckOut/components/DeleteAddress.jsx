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
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
function DeleteAddress() {
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
          <DeleteIcon />
        </Avatar>
        <Typography component="h1" variant="h5" textAlign="center">
             Delete
        </Typography>
        <Typography>
            Are you sure, you want to delete?
        </Typography>
        <Box paddingTop={3}>
          <form>
            <Box textAlign="center" display="flex" justifyContent="center">
            <Box paddingRight="10px">
              <Button
                style={{
                  background: "#1abc9c",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                Cancel
              </Button>
              </Box>
              <Box>
              <Button
                style={{
                  background: "#ff0000",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                Delete
              </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default DeleteAddress;
