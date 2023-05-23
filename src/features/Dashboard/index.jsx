import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import Main from "../../components/MainLayouts/components/main";
import NewProducts from "./components/NewProducts";
import ProductSkeleton from '../Product/components/Skeleton/ProductSkeleton';

function Dashboard() {
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await productApi.getNew();
                const dataNewProducts = data.data;
                setNewProducts(dataNewProducts);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, []);
    return (
        <Main >
            {loading ? (
                <ProductSkeleton length={12}/>
            ) : null}
            {/* <PopularCategories/> */}
            <NewProducts dataNewProducts={newProducts} />
        </Main>
    );
    
}

export default Dashboard;