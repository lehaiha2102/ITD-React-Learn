import React from "react";

function PopularCategories() {
  return (
      <div className="container clearfix">
        {/* Shop Categories
					============================================= */}
        <div className="fancy-title title-border title-center mb-4">
          <h4>Shop popular categories</h4>
        </div>
        <div className="row shop-categories clearfix">
          <div className="col-lg-7">
            <a
              href="#"
              style={{
                background:
                  'url("demos/shop/images/categories/2-1.jpg") no-repeat right center',
                backgroundSize: "cover",
              }}
            >
              <div className="vertical-middle dark center">
                <div className="heading-block m-0 border-0">
                  <h3 className="nott fw-semibold ls0">For Him</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-5">
            <a
              href="#"
              style={{
                background:
                  'url("demos/shop/images/categories/1.jpg") no-repeat center right',
                backgroundSize: "cover",
              }}
            >
              <div className="vertical-middle dark center">
                <div className="heading-block m-0 border-0">
                  <h3 className="nott fw-semibold ls0">For Her</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a
              href="#"
              style={{
                background:
                  'url("demos/shop/images/categories/4.jpg") no-repeat center center',
                backgroundSize: "cover",
              }}
            >
              <div className="vertical-middle dark center">
                <div className="heading-block m-0 border-0">
                  <h3 className="nott fw-semibold ls0">Popular Products</h3>
                  <small className="button bg-white text-dark button-light button-mini">
                    Browse Now
                  </small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a
              href="#"
              style={{
                background:
                  'url("demos/shop/images/categories/3.jpg") no-repeat center center',
                backgroundSize: "cover",
              }}
            >
              <div className="vertical-middle dark center">
                <div className="heading-block m-0 border-0">
                  <h3 className="nott fw-semibold ls0">Footwears</h3>
                  <small className="button bg-white text-dark button-light button-mini">
                    Shop Now
                  </small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a
              href="#"
              style={{
                background:
                  'url("demos/shop/images/categories/5.jpg") no-repeat center center',
                backgroundSize: "cover",
              }}
            >
              <div className="vertical-middle dark center">
                <div className="heading-block m-0 border-0">
                  <h3 className="nott fw-semibold ls0">Sportswear</h3>
                  <small className="button bg-white text-dark button-light button-mini">
                    Shop Now
                  </small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}

export default PopularCategories;
