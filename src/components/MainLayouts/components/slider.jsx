function Slider() {
    return ( 
        <section id="slider" className="slider-element swiper_wrapper" data-autoplay={6000} data-speed={800} data-loop="true" data-grab="true" data-effect="fade" data-arrow="false" style={{ height: 600 }}>
        <div className="swiper-container swiper-parent">
            <div className="swiper-wrapper">
                <div className="swiper-slide dark">
                    <div className="container">
                        <div className="slider-caption slider-caption-center">
                            <div>
                                <div className="h5 mb-2 font-secondary">Fresh Arrivals</div>
                                <h2 className="bottommargin-sm text-white">Winter / 2021</h2>
                                <a href="#" className="button bg-white text-dark button-light">Shop Menswear</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="swiper-slide-bg" style={{ backgroundImage: 'url("demos/shop/images/slider/1.jpg")' }} /> */}
                </div>
            </div>
            <div className="swiper-pagination" />
        </div>
    </section>
     );
}

export default Slider;