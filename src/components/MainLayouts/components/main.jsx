import Header from './header';
import Footer from './footer';
function Main({ children }) {
    return (
        <div id="wrapper" className="clearfix">
          <Header/>
            {/* Content
		============================================= */}
            <section id="content">
                {children}
            </section>{/* #content end */}
            {/* Footer
		============================================= */}
           <Footer/>
           {/* #footer end */}
        </div>
    );
}

export default Main;