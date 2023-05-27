import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import AddressItem from './AddressItem';

ShippingAddress.propTypes = {
  data: PropTypes.array,
};

ShippingAddress.defaultProps = {
  data: [],
};

function ShippingAddress({ data }) {
  if (!Array.isArray(data)) {
    return null;
  }

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  return (
    <Box>
      <Grid container>
        {data.map((address) => {
          return (
            <Grid item key={address.id} xs={6}>
              <Box paddingLeft={3}>
                <AddressItem
                  address={address}
                  selectedAddress={selectedAddress}
                  onAddressSelect={handleAddressSelect}
                /> 
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ShippingAddress;
