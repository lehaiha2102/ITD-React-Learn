import { useState } from "react";
import AddToCartForm from "../../../../Cart/components/AddToCartForm";
import { useDispatch, useSelector } from "react-redux";
import { addToCartForm } from "../../../../Cart/cartSlice";

function ProductInfo({ product }) {
  const currentUser = useSelector((state) => state.user.current);
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const dispatch = useDispatch();

  const hanldeAddToCartSubmit = (values) => {
    const actions = addToCartForm({
      slug: product.id,
      product,
      quantity: values.quantity,
    });
    dispatch(actions);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h1>{product.name}</h1>
        <div className="product-price">
          {/* <del>$39.99</del>  */}
          <ins>{formatter.format(product.price)}</ins>
          {/* <span className="text-warning"> (30% OFF)</span> */}
        </div>
      </div>
      <div className="line line-sm" />
      <AddToCartForm product={product} onSubmit={hanldeAddToCartSubmit}  disabled={!currentUser.id}/>
      <div className="line line-sm" />
      <div
        data-readmore="true"
        data-readmore-size="250px"
        data-readmore-trigger-open="Read More <i class='icon-angle-down'></i>"
        data-readmore-trigger-close="false"
      >
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="card product-meta mt-4 mb-5 rounded-0">
        <div className="card-body">
          <span itemProp="productID" className="sku_wrapper">
            SKU: <span className="sku">{product.id}</span>
          </span>
          <span className="posted_in">
            Categories:{" "}
            <a href="#" rel="tag">
              {product.category_names}
            </a>
            .
          </span>
          <span className="tagged_as">
            Manufactures:{" "}
            <a href="#" rel="tag">
              {product.manufacturer_name}
            </a>
            .
          </span>
        </div>
      </div>
      {/* Product Single - Share
									============================================= */}
      <div className="si-share d-flex justify-content-between align-items-center mt-4 border-0">
        <h4 className="mb-0">Share:</h4>
        <div>
          <a href="#" className="social-icon si-borderless si-facebook">
            <i className="icon-facebook" />
            <i className="icon-facebook" />
          </a>
          <a href="#" className="social-icon si-borderless si-twitter">
            <i className="icon-twitter" />
            <i className="icon-twitter" />
          </a>
          <a href="#" className="social-icon si-borderless si-pinterest">
            <i className="icon-pinterest" />
            <i className="icon-pinterest" />
          </a>
          <a href="#" className="social-icon si-borderless si-gplus">
            <i className="icon-gplus" />
            <i className="icon-gplus" />
          </a>
          <a href="#" className="social-icon si-borderless si-rss">
            <i className="icon-rss" />
            <i className="icon-rss" />
          </a>
          <a href="#" className="social-icon si-borderless si-email3">
            <i className="icon-email3" />
            <i className="icon-email3" />
          </a>
        </div>
      </div>
      {/* Product Single - Share End */}
    </>
  );
}

export default ProductInfo;
