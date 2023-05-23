import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ProductItem from '../../../Dashboard/components/NewProducts/ProductItem';


ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
};

function ProductList({ data }) {
    return (
      <Box>
        <Grid container>
          {data.map((product) => {
            const images = JSON.parse(product.images);
            const firstImage = images[0];
            return (
              <Grid item key={product.id} xs={10} sm={5} lg={3}>
                <ProductItem product={product} image={firstImage} /> 
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }

export default ProductList;