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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
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
          Login
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 1 }}>
        <MyInputField name="email" label="Email" form={form} />
        <MyPasswordField name="password" label="Password" form={form} />
        <Button
          fullWidth
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;
