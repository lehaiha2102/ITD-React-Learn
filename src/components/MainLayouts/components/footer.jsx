function Footer() {
    return ( 
        <footer id="footer" className="bg-transparent border-0">
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
    </footer>
     );
}

export default Footer;