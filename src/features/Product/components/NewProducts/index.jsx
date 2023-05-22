import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

NewProducts.propTypes = {
  dataNewProducts: PropTypes.array,
};

NewProducts.defaultProps = {
  dataNewProducts: [],
};

function NewProducts({ dataNewProducts }) {
  return (
    <div>
      <div className="fancy-title title-border mt-4 title-center">
        <h4>Weekly Featured Items</h4>
      </div>
      <div id="oc-products" className="owl-carousel products-carousel carousel-widget" >
        {dataNewProducts.map((product) => {
          const images = JSON.parse(product.images);
          const firstImage = images && images.length >= 1 ? images[0] : null;
          const secondImage = images && images.length >= 2 ? images[1] : null;
          return (
            <ProductItem key={product.id} product={product} firstImage={firstImage} secondImage={secondImage} />
          );
        })}
      </div>
    </div>
  );
}

export default NewProducts;
