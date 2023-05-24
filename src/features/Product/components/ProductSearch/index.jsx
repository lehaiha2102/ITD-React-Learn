import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

ProductSearch.propTypes = {
  keyword: PropTypes.string.isRequired, // Đánh dấu prop keyword là bắt buộc
};

function ProductSearch({ keyword }) {
  console.log('this is keyword:', keyword);
  
  return (
    <div>
      {/* Hiển thị các nội dung khác */}
    </div>
  );
}

export default ProductSearch;
