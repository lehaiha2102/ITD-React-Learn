import { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

function DeliverySchedule() {
  const [selectedTime, setSelectedTime] = useState("Morning");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <Box textAlign="center" display="flex" justifyContent="center">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: selectedTime === "Morning" ? "#1abc9c" : "",
              color: selectedTime === "Morning" ? "#ffffff" : "",
            }}
            onClick={() => handleTimeChange("Morning")}
          >
            <Typography textAlign="center" fontWeight="bold">
              Morning
            </Typography>
            <Typography textAlign="center">8.00 AM - 11.00 AM</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: selectedTime === "Noon" ? "#1abc9c" : "",
              color: selectedTime === "Noon" ? "#ffffff" : "",
            }}
            onClick={() => handleTimeChange("Noon")}
          >
            <Typography textAlign="center" fontWeight="bold">
              Noon
            </Typography>
            <Typography textAlign="center">11.00 AM - 2.00 PM</Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: selectedTime === "Afternoon" ? "#1abc9c" : "",
              color: selectedTime === "Afternoon" ? "#ffffff" : "",
            }}
            onClick={() => handleTimeChange("Afternoon")}
          >
            <Typography textAlign="center" fontWeight="bold">
              Afternoon
            </Typography>
            <Typography textAlign="center">2.00 PM - 5.00 PM</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: selectedTime === "Evening" ? "#1abc9c" : "",
              color: selectedTime === "Evening" ? "#ffffff" : "",
            }}
            onClick={() => handleTimeChange("Evening")}
          >
            <Typography textAlign="center" fontWeight="bold">
              Evening
            </Typography>
            <Typography textAlign="center">5.00 PM - 8.00 PM</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DeliverySchedule;
