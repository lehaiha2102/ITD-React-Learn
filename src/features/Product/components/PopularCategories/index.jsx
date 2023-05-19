function PopularCategories() {
    return ( <>
     <div className="container clearfix">
                            {/* Shop Categories
					============================================= */}
                            <div className="fancy-title title-border title-center mb-4">
                                <h4>Shop popular categories</h4>
                            </div>
                            <div className="row shop-categories clearfix">
                                <div className="col-lg-7">
                                    <a href="#" style={{ background: 'url("demos/shop/images/categories/2-1.jpg") no-repeat right center', backgroundSize: 'cover' }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block m-0 border-0">
                                                <h3 className="nott fw-semibold ls0">For Him</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-5">
                                    <a href="#" style={{ background: 'url("demos/shop/images/categories/1.jpg") no-repeat center right', backgroundSize: 'cover' }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block m-0 border-0">
                                                <h3 className="nott fw-semibold ls0">For Her</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#" style={{ background: 'url("demos/shop/images/categories/4.jpg") no-repeat center center', backgroundSize: 'cover' }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block m-0 border-0">
                                                <h3 className="nott fw-semibold ls0">Popular Products</h3>
                                                <small className="button bg-white text-dark button-light button-mini">Browse Now</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#" style={{ background: 'url("demos/shop/images/categories/3.jpg") no-repeat center center', backgroundSize: 'cover' }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block m-0 border-0">
                                                <h3 className="nott fw-semibold ls0">Footwears</h3>
                                                <small className="button bg-white text-dark button-light button-mini">Shop Now</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#" style={{ background: 'url("demos/shop/images/categories/5.jpg") no-repeat center center', backgroundSize: 'cover' }}>
                                        <div className="vertical-middle dark center">
                                            <div className="heading-block m-0 border-0">
                                                <h3 className="nott fw-semibold ls0">Sportswear</h3>
                                                <small className="button bg-white text-dark button-light button-mini">Shop Now</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Featured Carousel
					============================================= */}
                            <div className="fancy-title title-border mt-4 title-center">
                                <h4>Weekly Featured Items</h4>
                            </div>
                            <div id="oc-products" className="owl-carousel products-carousel carousel-widget" data-margin={20} data-loop="true" data-autoplay={5000} data-nav="true" data-pagi="false" data-items-xs={1} data-items-sm={2} data-items-md={3} data-items-lg={4} data-items-xl={5}>
                                {/* Shop Item 1
						============================================= */}
                                <div className="oc-item">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/1.jpg" alt="Round Neck T-shirts" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/1-1.jpg" alt="Round Neck T-shirts" /></a>
                                            <div className="sale-flash badge bg-danger p-2">Sale!</div>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Round Neck Solid Light Blue Colour T-shirts</a></h3></div>
                                            <div className="product-price font-primary"><del className="me-1">$24.99</del> <ins>$12.49</ins></div>
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
                                {/* Shop Item 2
						============================================= */}
                                <div className="oc-item">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/2.jpg" alt="Navy Blue Dress" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/2-1.jpg" alt="Navy Blue Dress" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Navy Blue Dress For Women</a></h3></div>
                                            <div className="product-price font-primary"><ins>$19.99</ins></div>
                                            <div className="product-rating">
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star-half-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Shop Item 3
						============================================= */}
                                <div className="oc-item">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/5.jpg" alt="Shoes" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/5-1.jpg" alt="Shoes" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="demos/shop/ajax/shop-item-no-stock.html" className="btn btn-dark" data-lightbox="ajax">Quick View</a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="sale-flash badge bg-secondary p-2">Out of Stock!</div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">White athletic shoe</a></h3></div>
                                            <div className="product-price font-primary"><ins>$35.00</ins></div>
                                            <div className="product-rating">
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Shop Item 4
						============================================= */}
                                <div className="oc-item">
                                    <div className="product">
                                        <div className="product-image">
                                            <div className="fslider" data-arrows="false" data-autoplay={4500}>
                                                <div className="flexslider">
                                                    <div className="slider-wrap">
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/featured/4.jpg" alt="T-shirts" /></a></div>
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/featured/4-1.jpg" alt="T-shirts" /></a></div>
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/featured/4-2.jpg" alt="T-shirts" /></a></div>
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/featured/4-3.jpg" alt="T-shirts" /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="sale-flash badge bg-danger p-2">Sale!</div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Navy blue T-shirt, Round neck, Short Sleeves</a></h3></div>
                                            <div className="product-price font-primary"><del className="me-1">$27.99</del> <ins>$21.00</ins></div>
                                            <div className="product-rating">
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star-empty" />
                                                <i className="icon-star-empty" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Shop Item 5
						============================================= */}
                                <div className="oc-item">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/featured/3.jpg" alt="T-shirts" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Women Black T-Shirt</a></h3></div>
                                            <div className="product-price font-primary"><ins>$13.00</ins></div>
                                            <div className="product-rating">
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star3" />
                                                <i className="icon-star-empty" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </> );
}

export default PopularCategories;