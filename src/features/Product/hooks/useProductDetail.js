import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

function useProductDetail(productSlug) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ( async () =>{
            try {
                setLoading(true)
                const product = await productApi.getDetail(productSlug);
                setProduct(product)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })()
    },[productSlug]);

    return ( 
{product, loading}
     );
}

export default useProductDetail;