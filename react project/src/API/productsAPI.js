import axios from "axios";

const baseUrl = "http://localhost:8000/products";

let getAllProducts = () => {
  return axios.get(baseUrl);
};

let getProductById = (id) => {
  return () => {
    return axios.get(`${baseUrl}/${id}`);
  };
};

let addProduct = (product) => {
  axios.post(baseUrl, product);
};

let updtaeProduct = (id, product) => {
  axios.put(`${baseUrl}/${id}`, product);
};

let deleteProduct = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updtaeProduct,
  deleteProduct,
};
