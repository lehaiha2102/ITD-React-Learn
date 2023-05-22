import { useDispatch } from 'react-redux';
import RegisterForm from "../RegisterForm";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { register } from "../userSlice";

function Register() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)
      enqueueSnackbar('Register successfully!', { variant: 'success' })
      enqueueSnackbar('There is an email just sent to your email, please confirm the email.!', { variant: 'info' })
    } catch (error) {
      if (error.errorData) {
        // Display validation errors
        const errors = error.errorData;
        Object.values(errors).forEach((errorMessages) => {
          errorMessages.forEach((errorMessage) => {
            enqueueSnackbar(errorMessage, { variant: 'error' });
          });
        });
      } else {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
