import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

QuantityField.propTypes = {
  quantity: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function QuantityField({ quantity, onChange }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  const handleIncrease = () => {
    if (count < 20) {
      const newCount = count + 1;
      setCount(newCount);
      onChange(newCount);
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
}
