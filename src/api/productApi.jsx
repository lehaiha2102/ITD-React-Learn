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
  },
  search(keyword) {
    const url = '/product/search';
    const data = { keyword };
    return axiosClient.post(url, data);
  },
  getAddress(user_id){
    const url = `/product/shipping/${user_id}/address`;
    return axiosClient.get(url);
  },
  changePhone(user_id, phone){
    const url = `/product/shipping/${user_id}/change-phone`;
    return axiosClient.post(url, phone);
  },
  creatAddress(user_id, address){
    const url = `/product/shipping/${user_id}/create-address`;
    return axiosClient.post(url, address);
  }
};
export default productApi;
