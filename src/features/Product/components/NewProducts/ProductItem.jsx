import React from "react";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  product: PropTypes.object,
  firstImage: PropTypes.string,
  secondImage: PropTypes.string,
};

function ProductItem({ product, firstImage, secondImage }) {
  console.log(product);
  return (
    <div className="row grid-6">
      {/* Shop Item 1
						============================================= */}
      <div className="col-lg-2 col-md-3 col-6 px-2">
        <div className="product">
          <div className="product-image">
          {product.images && (
                  <a href="#">
                    {JSON.parse(product.images).map((image, index) => (
                      <img
                        src={`http://localhost:8000/images/products/${firstImage}`}
                        alt={product.name}
                        key={index}
                      />
                    ))}
                  </a>
                )}
            {/* <a href="#">
              <img src="demos/shop/images/items/new/1-1.jpg" alt="Image 1" />
            </a> */}
            <div className="bg-overlay">
              <div
                className="bg-overlay-content align-items-end justify-content-between animated fadeOut"
                data-hover-animate="fadeIn"
                data-hover-speed={400}
                style={{ animationDuration: "400ms" }}
              >
                <a href="#" className="btn btn-dark me-2">
                  <i className="icon-shopping-basket" />
                </a>
                <a
                  href="demos/shop/ajax/shop-item.html"
                  className="btn btn-dark"
                  data-lightbox="ajax"
                >
                  <i className="icon-line-expand" />
                </a>
              </div>
              <div className="bg-overlay-bg bg-transparent" />
            </div>
          </div>
          <div className="product-desc">
            <div className="product-title mb-1">
              <h3>
                <a href="#">{product.name}</a>
              </h3>
            </div>
            <div className="product-price font-primary">
              <del className="me-1">$24.99</del> <ins>$12.49</ins>
            </div>
            <div className="product-rating">
              <i className="icon-star3" />
              <i className="icon-star3" />
              <i className="icon-star3" />
              <i className="icon-star-half-full" />
              <i className="icon-star-empty" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;