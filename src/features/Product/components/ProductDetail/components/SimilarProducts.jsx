function SimilarProduct() {
    return ( 
        <div className="row justify-content-center gutter-1">
        {/* Shop Item 1
							============================================= */}
        <div className="col-md-3 col-6 h-translate-y-sm all-ts">
          <div className="product bg-white">
            <div className="product-image position-relative">
              <div className="fslider" data-pagi="false" data-speed={400} data-pause={200000}>
                <div className="flexslider">
                  <div className="slider-wrap">
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/1-1.jpg" alt="Black Shoe" /></a>
                    </div>
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/1-2.jpg" alt="Black Shoe" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="cart-btn button button-white button-light"><i className="icon-line-plus" />Add to Cart</a>
            </div>
            <div className="product-desc flex-column px-4">
              <div className="product-title">
                <h3><a href="demo-store-product-single.html">Black Sports Shoe</a></h3>
                <span><a href="#">Nike</a></span>
              </div>
              <div className="product-price"><ins>$21.49</ins></div>
            </div>
          </div>
        </div>
        {/* Shop Item 2
							============================================= */}
        <div className="col-md-3 col-6 h-translate-y-sm all-ts">
          <div className="product bg-white">
            <div className="product-image position-relative">
              <div className="fslider" data-pagi="false" data-speed={400} data-pause={200000}>
                <div className="flexslider">
                  <div className="slider-wrap">
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/2-1.jpg" alt="Sports Shoe" /></a>
                    </div>
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/2-2.jpg" alt="Sports Shoe" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="cart-btn button button-white button-light"><i className="icon-line-plus" />Add to Cart</a>
            </div>
            <div className="product-desc flex-column px-4">
              <div className="product-title">
                <h3><a href="demo-store-product-single.html">Sports Shoe</a></h3>
                <span><a href="#">Nike</a></span>
              </div>
              <div className="product-price"><ins>$33.49</ins></div>
            </div>
          </div>
        </div>
        {/* Shop Item 3
							============================================= */}
        <div className="col-md-3 col-6 h-translate-y-sm all-ts">
          <div className="product bg-white">
            <div className="product-image position-relative">
              <div className="fslider" data-pagi="false" data-speed={400} data-pause={200000}>
                <div className="flexslider">
                  <div className="slider-wrap">
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/men/items/2.jpg" alt="T-Shirts" /></a>
                    </div>
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/men/items/2-1.jpg" alt="T-Shirts" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="cart-btn button button-white button-light"><i className="icon-line-plus" />Add to Cart</a>
            </div>
            <div className="product-desc flex-column px-4">
              <div className="product-title">
                <h3><a href="demo-store-product-single.html">Grey T-Shirt</a></h3>
                <span><a href="#">T-Shirt</a></span>
              </div>
              <div className="product-price"><ins>$11.49</ins></div>
            </div>
          </div>
        </div>
        {/* Shop Item 4
							============================================= */}
        <div className="col-md-3 col-6 h-translate-y-sm all-ts">
          <div className="product bg-white">
            <div className="product-image position-relative">
              <div className="fslider" data-pagi="false" data-speed={400} data-pause={200000}>
                <div className="flexslider">
                  <div className="slider-wrap">
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/4-1.jpg" alt="T-shirt" /></a>
                    </div>
                    <div className="slide">
                      <a href="demo-store-product-single.html"><img src="demos/store/images/product/4-2.jpg" alt="T-shirt" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="cart-btn button button-white button-light"><i className="icon-line-plus" />Add to Cart</a>
            </div>
            <div className="product-desc flex-column px-4">
              <div className="product-title">
                <h3><a href="demo-store-product-single.html">Roundneck T-shirt</a></h3>
                <span><a href="#">T-shirt</a></span>
              </div>
              <div className="product-price"><ins>$17.49</ins></div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default SimilarProduct;