import LoginForm from "../LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

export default function Login() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      enqueueSnackbar("login successfully!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

