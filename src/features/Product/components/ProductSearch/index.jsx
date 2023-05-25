import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../../../api/productApi";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import ProductList from "../ProductList/ProductList";


function ProductSearch() {
  const location = useLocation();
  const keyword = location.pathname.split("/").pop();
  const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
      setLoading(true);
    
      if (keyword) {
        (async () => {
          try {
            const data = await productApi.search(keyword);
            const dataSearch = data.data;
            const last_page = data.last_page;
            setProductList(dataSearch);
            setTotalPage(last_page);
          } catch (error) {
            console.log("Failed to fetch product list: ", error);
          } finally {
            setLoading(false);
          }
        })();
      }
    }, [keyword]);

    const handlePageChange = async (event, newPage) => {
      setLoading(true);
      setPage(newPage);
      try {
          const { data } = await productApi.search(newPage);
          setProductList(data);
      } catch (error) {
          console.log('Failed to fetch product list: ', error);
      }
      setLoading(false);
  };

  return (
    <Box
            paddingTop={1}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
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

export default ProductSearch;
