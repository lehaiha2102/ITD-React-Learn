import { Box, Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ProductItem from "./ProductItem";

NewProducts.propTypes = {
  dataNewProducts: PropTypes.array,
};

NewProducts.defaultProps = {
  dataNewProducts: [],
};

function NewProducts({ dataNewProducts }) {
  const handleShowMoreClick = () => {
    window.location.href = `/products/new`;
  }
  return (
    <div>
      <div className="fancy-title title-border mt-4 title-center">
        <h4>Weekly Featured Items</h4>
      </div>
      <Box>
        <Grid container>
          {dataNewProducts.map((product) => {
            const images = JSON.parse(product.images);
            const firstImage = images[0];
            return (
              <Grid item key={product.id} xs={10} sm={6} lg={3}>
                <ProductItem product={product} image={firstImage} />
              </Grid>
            );
          })}
        </Grid>
        <div className="fancy-title title-border mt-4 title-center">
          <Button onClick={handleShowMoreClick}>Show more</Button>
        </div>
      </Box>
    </div>
  );
}

export default NewProducts;
