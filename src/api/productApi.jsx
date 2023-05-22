import axiosClient from "./axiosClient";

const productApi = {
  getAll(pageNumber = 1) {
    const url = `/products?page=${pageNumber}`;
    return axiosClient.get(url);
  },
  filter(filterValues){
    const url = `/products/filter`;
    return axiosClient.post(url, filterValues)
  },
  getDetail(productSlug){
    const url = `/product/${productSlug}`;
    return axiosClient.get(url);
  },
  getNew(){
    const url = `/products/new`;
    return axiosClient.get(url);
  }
};
export default productApi;
