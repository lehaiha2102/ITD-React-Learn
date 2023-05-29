import { Box, Paper } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment() {
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };

  return (
    <Box>
      <Paper elevation={1}>
        <Box className="paypal_payment"></Box>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
      </Paper>
    </Box>
  );
}

export default Payment;
