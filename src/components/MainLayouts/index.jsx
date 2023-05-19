import PopularCategories from '../../features/Product/components/PopularCategories';
import './assets/style.css';
import Footer from './components/footer';
import Header from './components/header';
import Slider from './components/slider';
function Dashboard() {
    return (
        <div>
            <div id="wrapper" className="clearfix">
                <div className="modal-on-load" data-target="#myModal1" />
                {/* On LOad Modal */}
                {/* <div className="modal1 mfp-hide subscribe-widget mx-auto" id="myModal1" style={{ maxWidth: 750 }}>
                    <div className="row justify-content-center bg-white align-items-center" style={{ minHeight: 380 }}>
                        <div className="col-md-5 p-0">
                            <div style={{ background: 'url("./assets/images/modals/modal1.jpg") no-repeat center right', backgroundSize: 'cover', minHeight: 380 }} />
                        </div>
                        <div className="col-md-7 bg-white p-4">
                            <div className="heading-block border-bottom-0 mb-3">
                                <h3 className="font-secondary nott ">Join Our Newsletter &amp; Get <span className="text-danger">40%</span> Off your First Order</h3>
                                <span>Get Latest Fashion Updates &amp; Offers</span>
                            </div>
                            <div className="widget-subscribe-form-result" />
                            <form className="widget-subscribe-form2 mb-2" action="include/subscribe.php" method="post">
                                <input type="email" id="widget-subscribe-form2-email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email Address.." />
                                <div className="d-flex justify-content-between align-items-center mt-1">
                                    <button className="button button-dark  bg-dark text-white ms-0" type="submit">Subscribe</button>
                                    <a href="#" className="btn-link" onclick="$.magnificPopup.close();return false;">Don't Show me</a>
                                </div>
                            </form>
                            <small className="mb-0 fst-italic text-black-50">*We also hate Spam &amp; Junk Emails.</small>
                        </div>
                    </div>
                </div> */}
                {/* Login Modal */}
                {/* <div className="modal1 mfp-hide" id="modal-register">
                    <div className="card mx-auto" style={{ maxWidth: 540 }}>
                        <div className="card-header py-3 bg-transparent center">
                            <h3 className="mb-0 fw-normal">Hello, Welcome Back</h3>
                        </div>
                        <div className="card-body mx-auto py-5" style={{ maxWidth: '70%' }}>
                            <a href="#" className="button button-large w-100 si-colored si-facebook nott fw-normal ls0 center m-0"><i className="icon-facebook-sign" /> Log in with Facebook</a>
                            <div className="divider divider-center"><span className="position-relative" style={{ top: '-2px' }}>OR</span></div>
                            <form id="login-form" name="login-form" className="mb-0 row" action="#" method="post">
                                <div className="col-12">
                                    <input type="text" id="login-form-username" name="login-form-username" defaultValue className="form-control not-dark" placeholder="Username" />
                                </div>
                                <div className="col-12 mt-4">
                                    <input type="password" id="login-form-password" name="login-form-password" defaultValue className="form-control not-dark" placeholder="Password" />
                                </div>
                                <div className="col-12">
                                    <a href="#" className="float-end text-dark fw-light mt-2">Forgot Password?</a>
                                </div>
                                <div className="col-12 mt-4">
                                    <button className="button w-100 m-0" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer py-4 center">
                            <p className="mb-0">Don't have an account? <a href="#"><u>Sign up</u></a></p>
                        </div>
                    </div>
                </div> */}
            <Header/>
           <Slider/>
                {/* Content
		============================================= */}
                <section id="content">
                    <div className="content-wrap">
                       <PopularCategories/>
                        {/* New Arrival Section
				============================================= */}
                        <div className="section my-4">
                            <div className="container">
                                <div className="row align-items-stretch">
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-12 center p-5">
                                                <div className="heading-block mb-1 border-bottom-0 mx-auto">
                                                    <div className="font-secondary text-black-50 mb-1">New Arrivals</div>
                                                    <h3 className="nott ls0">Fresh Arrivals / Autumn 18</h3>
                                                    <p className="fw-normal mt-2 mb-3 text-muted" style={{ fontSize: 17, lineHeight: '1.4' }}>Dynamically drive interdependent metrics for worldwide portals. Proactively grow client technology schemas.</p>
                                                    <a href="#" className="button bg-dark text-white button-dark button-small ms-0">Shop Now</a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href="demos/shop/images/sections/1-2.jpg" data-lightbox="image"><img src="./assets/demos/shop/images/sections/1-2.jpg" alt="Image" /></a>
                                            </div>
                                            <div className="col-6">
                                                <a href="demos/shop/images/sections/1-3.jpg" data-lightbox="image"><img src="./assets/demos/shop/images/sections/1-3.jpg" alt="Image" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 min-vh-50">
                                        <a href="https://www.youtube.com/watch?v=bpNcuh_BnsA" data-lightbox="iframe" className="d-block position-relative h-100" style={{ background: 'url("demos/shop/images/sections/1.jpg") center center no-repeat', backgroundSize: 'cover' }}>
                                            <div className="vertical-middle text-center">
                                                <div className="play-icon"><i className="icon-play-sign display-3 text-light" /></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear" />
                        {/* New Arrivals Men
				============================================= */}
                        <div className="container clearfix">
                            <div className="fancy-title title-border topmargin-sm mb-4 title-center">
                                <h4>New Arrivals: Men</h4>
                            </div>
                            <div className="row grid-6">
                                {/* Shop Item 1
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/1.jpg" alt="Image 1" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/1-1.jpg" alt="Image 1" /></a>
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
                                            <div className="product-title mb-1"><h3><a href="#">Light Blue Denim</a></h3></div>
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
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/2.jpg" alt="Image 2" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/2-1.jpg" alt="Image 2" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Deep Blue Sport Shoe</a></h3></div>
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
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/4.jpg" alt="Image 3" /></a>
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
                                            <div className="product-title mb-1"><h3><a href="#">Printed Men Short</a></h3></div>
                                            <div className="product-price font-primary"><del className="me-1">$41.99</del> <ins>$35.00</ins></div>
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
                                {/* Shop Item 4
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <div className="fslider" data-arrows="false" data-autoplay={4500}>
                                                <div className="flexslider">
                                                    <div className="slider-wrap">
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/new/3.jpg" alt="Image 4" /></a></div>
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/new/3-1.jpg" alt="Image 4" /></a></div>
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
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Women Sportd Track Pant</a></h3></div>
                                            <div className="product-price font-primary"><ins>$21.00</ins></div>
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
                                {/* Shop Item 5
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/6.jpg" alt="Image 5" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/6-1.jpg" alt="Image 5" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Cool Printed Dress</a></h3></div>
                                            <div className="product-price font-primary"><ins>$31.49</ins></div>
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
                                {/* Shop Item 6
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/5.jpg" alt="Image 6" /></a>
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
                                            <div className="product-title mb-1"><h3><a href="#">Red Stripe Girls Top</a></h3></div>
                                            <div className="product-price font-primary"><del className="me-1">$41.99</del> <ins>$35.00</ins></div>
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
                                {/* Shop Item 7
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/7.jpg" alt="Image 7" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Dark Brown Lady Bag for Women</a></h3></div>
                                            <div className="product-price font-primary"><ins>$49.49</ins></div>
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
                                {/* Shop Item 8
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/8.jpg" alt="Image 8" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">UV Poection Sunglass</a></h3></div>
                                            <div className="product-price font-primary"><ins>$39.99</ins></div>
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
                                {/* Shop Item 9
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/9.jpg" alt="Image 9" /></a>
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/9-1.jpg" alt="Image 3" /></a>
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
                                            <div className="product-title mb-1"><h3><a href="#">Workout Sweat T-shirt</a></h3></div>
                                            <div className="product-price font-primary"><del className="me-1">$21.99</del> <ins>$15.00</ins></div>
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
                                {/* Shop Item 10
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/10.jpg" alt="Image 10" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="include/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="sale-flash badge bg-secondary p-2">Out of Stock!</div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Sky Blue Printed Bag</a></h3></div>
                                            <div className="product-price font-primary"><ins>$61.49</ins></div>
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
                                {/* Shop Item 11
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <div className="fslider" data-arrows="false" data-autoplay={4500}>
                                                <div className="flexslider">
                                                    <div className="slider-wrap">
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/new/11.jpg" alt="Image 10" /></a></div>
                                                        <div className="slide"><a href="#"><img src="./assets/demos/shop/images/items/new/11-1.jpg" alt="Image 10" /></a></div>
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
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Blue Women Watch</a></h3></div>
                                            <div className="product-price font-primary"><ins>$23.00</ins></div>
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
                                {/* Shop Item 12
						============================================= */}
                                <div className="col-lg-2 col-md-3 col-6 px-2">
                                    <div className="product">
                                        <div className="product-image">
                                            <a href="#"><img src="./assets/demos/shop/images/items/new/12.jpg" alt="Image 6" /></a>
                                            <div className="bg-overlay">
                                                <div className="bg-overlay-content align-items-end justify-content-between" data-hover-animate="fadeIn" data-hover-speed={400}>
                                                    <a href="#" className="btn btn-dark me-2"><i className="icon-shopping-basket" /></a>
                                                    <a href="demos/shop/ajax/shop-item.html" className="btn btn-dark" data-lightbox="ajax"><i className="icon-line-expand" /></a>
                                                </div>
                                                <div className="bg-overlay-bg bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-title mb-1"><h3><a href="#">Blue Party Shoe</a></h3></div>
                                            <div className="product-price font-primary"><ins>$51.00</ins></div>
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
                            </div>
                        </div>
                        {/* Sign Up
				============================================= */}
                        <div className="section my-4 py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row align-items-stretch align-items-center">
                                            <div className="col-md-7 min-vh-50" style={{ background: 'url("demos/shop/images/sections/3.jpg") center center no-repeat', backgroundSize: 'cover' }}>
                                                <div className="vertical-middle ps-5">
                                                    <h2 className="ps-5"><strong>40%</strong> Off<br />First Order*</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-5 bg-white">
                                                <div className="card border-0 py-2">
                                                    <div className="card-body">
                                                        <h3 className="card-title mb-4 ls0">Sign up to get the most out of shopping.</h3>
                                                        <ul className="iconlist ms-3">
                                                            <li><i className="icon-circle-blank text-black-50" /> Receive Exclusive Sale Alerts</li>
                                                            <li><i className="icon-circle-blank text-black-50" /> 30 Days Return Policy</li>
                                                            <li><i className="icon-circle-blank text-black-50" /> Cash on Delivery Accepted</li>
                                                        </ul>
                                                        <a href="#" className="button button-rounded ls0 fw-semibold ms-0 mb-2 nott px-4">Sign Up</a><br />
                                                        <small className="fst-italic text-black-50">Don't worry, it's totally free.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            {/* Features
					============================================= */}
                            <div className="row col-mb-50 mb-0 mt-5">
                                <div className="col-lg-7">
                                    <div className="row mt-3">
                                        <div className="col-sm-6">
                                            <div className="feature-box fbox-sm fbox-plain">
                                                <div className="fbox-icon">
                                                    <a href="#"><i className="icon-line2-present text-dark text-dark" /></a>
                                                </div>
                                                <div className="fbox-content">
                                                    <h3 className="fw-normal">100% Original</h3>
                                                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mt-4 mt-sm-0">
                                            <div className="feature-box fbox-sm fbox-plain">
                                                <div className="fbox-icon">
                                                    <a href="#"><i className="icon-line2-globe text-dark" /></a>
                                                </div>
                                                <div className="fbox-content">
                                                    <h3 className="fw-normal">Free Shipping</h3>
                                                    <p>Display your Content attractively using Parallax Sections that have unlimited customizable areas.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mt-4">
                                            <div className="feature-box fbox-sm fbox-plain">
                                                <div className="fbox-icon">
                                                    <a href="#"><i className="icon-line2-reload text-dark" /></a>
                                                </div>
                                                <div className="fbox-content">
                                                    <h3 className="fw-normal">30-Days Returns</h3>
                                                    <p>You have complete easy control on each &amp; every element that provides endless customization possibilities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mt-4">
                                            <div className="feature-box fbox-sm fbox-plain">
                                                <div className="fbox-icon">
                                                    <a href="#"><i className="icon-line2-wallet text-dark" /></a>
                                                </div>
                                                <div className="fbox-content">
                                                    <h3 className="fw-normal">Payment Options</h3>
                                                    <p>We accept Visa, MasterCard and American Express. And We also Deliver by COD(only in US)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="accordion clearfix">
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Our Mission
                                            </div>
                                        </div>
                                        <div className="accordion-content">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                What we Do?
                                            </div>
                                        </div>
                                        <div className="accordion-content">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Our Company's Values
                                            </div>
                                        </div>
                                        <div className="accordion-content">Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.</div>
                                        <div className="accordion-header">
                                            <div className="accordion-icon">
                                                <i className="accordion-closed icon-ok-circle" />
                                                <i className="accordion-open icon-remove-circle" />
                                            </div>
                                            <div className="accordion-title">
                                                Our Return Policy
                                            </div>
                                        </div>
                                        <div className="accordion-content">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                            {/* Brands
					============================================= */}
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="fancy-title title-border title-center mb-4">
                                        <h4>Brands who give Flat <span className="text-danger">40%</span> Off</h4>
                                    </div>
                                    <ul className="clients-grid grid-2 grid-sm-3 grid-md-6 grid-lg-8 mb-0">
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/1.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/2.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/3.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/4.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/5.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/6.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/7.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/8.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/9.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/10.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/11.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/12.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/13.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/14.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/15.png" alt="Clients" /></a></li>
                                        <li className="grid-item"><a href="#"><img src="./assets/images/clients/logo/16.png" alt="Clients" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clear" />
                        {/* App Buttons
				============================================= */}
                        <div className="section pb-0 mb-0" style={{ backgroundColor: '#f8f5f0' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 offset-1 bottommargin-lg d-flex flex-column align-self-center">
                                        <h3 className="card-title fw-normal ls0">Follow. Find. Favorite.<br />Discover Fashion on the Go.</h3>
                                        <span>Proactively enable Corporate Benefits.</span>
                                        <div className="mt-3">
                                            <a href="#" className="button inline-block button-small button-rounded button-desc fw-normal ls1 clearfix"><i className="icon-apple" /><div><span>Download Canvas Shop</span>App Store</div></a>
                                            <a href="#" className="button inline-block button-small button-rounded button-desc button-light text-dark fw-normal ls1 bg-white border clearfix"><i className="icon-googleplay" /><div><span>Download Canvas Shop</span>Google Play</div></a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-none d-md-flex align-items-end">
                                        <img src="./assets/demos/shop/images/sections/app.png" alt="Image" className="mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Last Section
				============================================= */}
                        <div className="section footer-stick bg-white m-0 py-3 border-bottom">
                            <div className="container clearfix">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="shop-footer-features mb-3 mb-lg-3"><i className="icon-line2-globe-alt" /><h5 className="inline-block mb-0 ms-2 fw-semibold"><a href="#">Free Shipping</a><span className="fw-normal text-muted"> &amp; Easy Returns</span></h5></div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="shop-footer-features mb-3 mb-lg-3"><i className="icon-line2-notebook" /><h5 className="inline-block mb-0 ms-2"><a href="#">Geniune Products</a><span className="fw-normal text-muted"> Guaranteed</span></h5></div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="shop-footer-features mb-3 mb-lg-3"><i className="icon-line2-lock" /><h5 className="inline-block mb-0 ms-2"><a href="#">256-Bit</a> <span className="fw-normal text-muted">Secured Checkouts</span></h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* #content end */}
           <Footer/>
            </div>{/* #wrapper end */}
            {/* Go To Top
	============================================= */}
            <div id="gotoTop" className="icon-line-arrow-up" />
        </div>
    );
}

export default Dashboard;