import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LinearProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import MyInputField from "../../../components/form-controls/InputField";
import MyPasswordField from "../../../components/form-controls/PasswordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup
    .object({
      name: yup
        .string()
        .required("Please enter your name")
        .min(2, "Name is too short")
        .max(100, "Name is too long"),
      address: yup.string().required("Please enter your address"),
      email: yup
        .string()
        .email("Invalid email")
        .required("Please enter your email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format"),
      phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(/^(0|\+84)\d{9,10}$/g, "Invalid phone number format"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
          "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
        ),
      repassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please re-enter your password"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      repassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div>
      <Box position="fixed" top={0} left={0} right={0} zIndex={9999}>
        {isSubmitting && <LinearProgress />}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" textAlign="center">
          Sign in
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 1 }}>
        <MyInputField name="name" label="Full name" form={form} />
        <MyInputField name="email" label="Email" form={form} />
        <MyInputField name="phone" label="Phone" form={form} />
        <MyInputField name="address" label="Address" form={form} />
        <MyPasswordField name="password" label="Password" form={form} />
        <MyPasswordField name="repassword" label="Re-Password" form={form} />
        <Button
          fullWidth
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
