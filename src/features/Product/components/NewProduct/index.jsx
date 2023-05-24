import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import productApi from "../../../../api/productApi";
import SideBar from '../../../../components/MainLayouts/components/sidebar';
import ProductList from "../ProductList/ProductList";
import ProductSort from "../ProductSort";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

NewProductsList.propTypes = {
    dataNewProducts: PropTypes.array,
};

NewProductsList.defaultProps = {
    dataNewProducts: [],
};

function NewProductsList({ dataNewProducts }) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [categoriesSort, setCategoriesSort] = useState([]);
    const [manufacturersSort, setManufacturersSort] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await productApi.getNew();
                const dataNewProducts = data.data;
                const last_page = dataNewProducts.last_page;
                const dataAll = await productApi.getAll();
                const categories = dataAll.categories.map(category => category.name);
                const manufacturers = dataAll.manufacturers.map(manufacturer => manufacturer.name);
                setCategoriesSort(categories);
                setManufacturersSort(manufacturers);
                setProductList(dataNewProducts);
                setTotalPage(last_page);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }

            setLoading(false);
        })();
    }, []);

    const handlePageChange = async (event, newPage) => {
        setLoading(true);
        setPage(newPage);
        try {
            const { data } = await productApi.getAll(newPage);
            setProductList(data);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
        setLoading(false);
    };

    const handleFilterChange = async (filterValues) => {
        setLoading(true);
        try {
            const dataAll = await productApi.filter(filterValues);
            const data = dataAll.products.data;
            const last_page = dataAll.products.last_page;

            if (data.length === 0) {
                setProductList([]);
            } else {
                setProductList(data);
                setTotalPage(last_page);
                setPage(1);
            }
        } catch (error) {
            console.log('Failed to fetch filtered product list: ', error);
        }
        setLoading(false);
    };

    return (
        <Box
            paddingTop={1}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={3}
                        padding={4}>
                        <Paper elevation={0}>
                            <SideBar>
                                <ProductSort categories={categoriesSort} manufacturers={manufacturersSort} onFilterChange={handleFilterChange} />
                            </SideBar>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={0}>
                            {loading ? (
                                <ProductSkeleton length={12} />
                            ) : productList.length === 0 ? (
                                <Typography
                                    variant="body1"
                                    align="center"
                                    marginTop={10}
                                    sx={{
                                        color: '#FD0B0B',
                                        fontSize: '30px'
                                    }}
                                >
                                    Didn't find any product that suits your conditions
                                </Typography>
                            ) : (
                                <>
                                    <ProductList data={productList} />
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        textAlign="center"
                                        marginTop={20}
                                    >
                                        <Stack spacing={2}>
                                            <Pagination count={totalPage} color="primary" onChange={handlePageChange} />
                                        </Stack>
                                    </Box>
                                </>
                            )}
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default NewProductsList;
