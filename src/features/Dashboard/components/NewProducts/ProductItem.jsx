import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

ProductItem.propTypes = {
  product: PropTypes.object,
  image: PropTypes.string,
};

function ProductItem({ product, image }) {
  const navigate = useNavigate();
  const handleDetailClick = () => {
    navigate(`/products/${product.slug}`);
  };

  return (
    
    <Box padding={1} onClick={handleDetailClick}>
      <Box padding={1} minHeight={130}>
        <img
          src={`http://localhost:8000/images/products/${image}`}
          alt=""
          width="80%"
          height={130}
        />
      </Box>
      <Typography variant="body2">
        <Box component="span" fontSize={16} fontWeight="bold" mr={1}>
          {product.name}
        </Box>
      </Typography>
      <Typography variant="body2">
        {new Intl.NumberFormat('vn-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(product.price)}
        ;
      </Typography>
    </Box>
  );
}

export default ProductItem;