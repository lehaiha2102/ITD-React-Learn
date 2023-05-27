import { Box, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

AddressItem.propTypes = {
  address: PropTypes.object,
  selectedAddress: PropTypes.object,
  onAddressSelect: PropTypes.func,
};

function AddressItem({ address, selectedAddress, onAddressSelect }) {
  const handleAddressClick = () => {
    onAddressSelect(address);
  };

  return (
    <Paper
      elevation={1}
      style={{ minHeight: 60 }}
      sx={{
        backgroundColor: selectedAddress === address ? "#1abc9c" : "",
        color: selectedAddress === address ? "#ffffff" : "",
      }}
      onClick={handleAddressClick}
    >
      <Typography textAlign="center" fontWeight="bold">
        {address.address}
      </Typography>
    </Paper>
  );
}

export default AddressItem;
