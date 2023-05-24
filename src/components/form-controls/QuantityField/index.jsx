import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

QuantityField.propTypes = {
  quantity: PropTypes.number.isRequired,
};
export default function QuantityField({ quantity }) {
  const [count, setCount] = useState(quantity);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrease}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton onClick={handleIncrease}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  );
};