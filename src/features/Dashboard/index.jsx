import { useEffect, useState } from "react";
import Main from "../../components/MainLayouts/components/main";
import NewProducts from "../Product/components/NewProducts";
import PopularCategories from "../Product/components/PopularCategories";
import productApi from "../../api/productApi"

function Dashboard() {
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
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
        <Main>
            {/* <PopularCategories/> */}
            <NewProducts dataNewProducts={newProducts}/>
        </Main>
    );
}

export default Dashboard;