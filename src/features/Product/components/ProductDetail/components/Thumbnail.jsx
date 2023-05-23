
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

ProductThumbnail.propTypes = {
  product: PropTypes.string,
};

function ProductThumbnail({ product }) {
  const items = JSON.parse(product);

  const handleDragStart = (e) => e.preventDefault();

  const imageItems = items.map((image) => ({
    original: `http://localhost:8000/images/products/${image}`,
    thumbnail: `http://localhost:8000/images/products/${image}`,
    originalClass: "custom-image",
  }));

  return (
    <Box minHeight={345}>
      <ImageGallery items={imageItems} />
    </Box>
  );
}

export default ProductThumbnail;
