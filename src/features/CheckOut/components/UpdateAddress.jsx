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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PlaceIcon from "@mui/icons-material/Place";
import MyPasswordField from "../../../components/form-controls/PasswordField";
function UpdateAddress() {
  const schema = yup
    .object({
        title: yup
        .string()
        .required("Please enter title"),
        address: yup
        .string()
        .required("Please enter address"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });
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
        <form>
          <Box>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Billing"
                  control={<Radio />}
                  label="Billing"
                />
                <FormControlLabel
                  value="Shipping"
                  control={<Radio />}
                  label="Shipping"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <MyInputField name="title" label="TITLE" form={form} />
          </Box>
          <Box>
            <MyInputField name="address" label="ADDRESS" form={form} />
          </Box>
          <Button>Create</Button>
        </form>
      </Box>
    </Box>
  );
}

export default UpdateAddress;
