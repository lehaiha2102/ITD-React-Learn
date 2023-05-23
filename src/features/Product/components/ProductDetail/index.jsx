import { useLocation } from "react-router-dom";
import SimilarProduct from "./components/SimilarProducts";
import ProductThumbnail from "./components/Thumbnail";
import useProductDetail from "../../hooks/useProductDetail";
import { Box, Skeleton } from "@mui/material";
import ProductInfo from "./components/details";

function ProductDetail({ props }) {
  const location = useLocation();
  const productSlug = location.pathname.split("/products/")[1];
  const { product, loading } = useProductDetail(productSlug);

  if (loading) {
    return (
      <Box textAlign="center" sx={{ width: 300, display: "inline-block" }}>
        <Skeleton animation="wave" />
      </Box>
    );
  }
  return (
    <>
      <div>
        <div className="single-product mb-6">
          <div className="product">
            <div className="container-fluid">
              <div className="row gutter-50">
                <div className="col-xl-4 col-lg-5 mb-0 sticky-sidebar-wrap">
                  <div
                    className="masonry-thumbs grid-container grid-2"
                    data-lightbox="gallery"
                  >
                    <ProductThumbnail product={product.images} />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 mb-0">
                  <ProductInfo product={product} />
                </div>
              </div>
              {/* <div>
                <h4>Product Details</h4>
                <table className="table table-striped table-bordered mb-5">
                  <tbody>
                    <tr>
                      <th width={150}>Item</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>Display</td>
                      <td>Analogue</td>
                    </tr>
                    <tr>
                      <td>Movement</td>
                      <td>Quartz</td>
                    </tr>
                    <tr>
                      <td>Power source</td>
                      <td>Battery</td>
                    </tr>
                    <tr>
                      <td>Dial style</td>
                      <td>Solid round stainless steel dial</td>
                    </tr>
                    <tr>
                      <td>Features</td>
                      <td>Reset Time</td>
                    </tr>
                    <tr>
                      <td>Strap style</td>
                      <td>
                        Silver-Toned bracelet style, stainless steel strap with
                        a foldover closure
                      </td>
                    </tr>
                    <tr>
                      <td>Water resistance</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>3 Months</td>
                    </tr>
                  </tbody>
                </table>
                <h4>Size &amp; Fit</h4>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td>Dial width</td>
                      <td>40 mm</td>
                    </tr>
                    <tr>
                      <td>Strap Width</td>
                      <td>20 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="section mb-0">
          <div className="container mw-md text-center">
            <h4>Similar Products</h4>
            <SimilarProduct />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProductDetail;
