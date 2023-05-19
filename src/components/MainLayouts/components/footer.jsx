function Footer() {
    return ( 
        <>
             {/* Footer
		============================================= */}
                <footer id="footer" className="bg-transparent border-0">
                    <div className="container clearfix">
                        {/* Footer Widgets
				============================================= */}
                        <div className="footer-widgets-wrap pb-3 border-bottom clearfix">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="widget clearfix">
                                        <h4 className="ls0 mb-3 nott">Features</h4>
                                        <ul className="list-unstyled iconlist ms-0">
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Paid with Moblie</a></li>
                                            <li><a href="#">Status</a></li>
                                            <li><a href="#">Changelog</a></li>
                                            <li><a href="#">Contact Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="widget clearfix">
                                        <h4 className="ls0 mb-3 nott">Support</h4>
                                        <ul className="list-unstyled iconlist ms-0">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Support</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="widget clearfix">
                                        <h4 className="ls0 mb-3 nott">Trending</h4>
                                        <ul className="list-unstyled iconlist ms-0">
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Events</a></li>
                                            <li><a href="#">Forums</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="widget clearfix">
                                        <h4 className="ls0 mb-3 nott">Get to Know us</h4>
                                        <ul className="list-unstyled iconlist ms-0">
                                            <li><a href="#">Corporate</a></li>
                                            <li><a href="#">Agency</a></li>
                                            <li><a href="#">eCommerce</a></li>
                                            <li><a href="#">Personal</a></li>
                                            <li><a href="#">OnePage</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-8">
                                    <div className="widget clearfix">
                                        <h4 className="ls0 mb-3 nott">Subscribe Now</h4>
                                        <div className="widget subscribe-widget mt-2 clearfix">
                                            <p className="mb-4"><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</p>
                                            <div className="widget-subscribe-form-result" />
                                            <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="mt-1 mb-0 d-flex">
                                                <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control sm-form-control required email" placeholder="Enter your Email Address" />
                                                <button className="button nott fw-normal ms-1 my-0" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* .footer-widgets-wrap end */}
                    </div>
                    {/* Copyrights
			============================================= */}
                    <div id="copyrights" className="bg-transparent">
                        <div className="container clearfix">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-6">
                                    Copyrights © 2020 All Rights Reserved by Canvas Inc.<br />
                                    <div className="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
                                </div>
                                <div className="col-md-6 d-md-flex flex-md-column align-items-md-end mt-4 mt-md-0">
                                    <div className="copyrights-menu copyright-links clearfix">
                                        <a href="#">About</a>/<a href="#">Features</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* #copyrights end */}
                </footer>{/* #footer end */}
                </>
     );
}

export default Footer;