import React from "react";
import { ProductContext } from "./productContext";
import { useFeach } from "../customHooks/useFeach";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updtaeProduct,
} from "../API/productsAPI";

export const ProductProvider = ({ children }) => {
  let [products, setProducts, isLoading, errors] = useFeach(getAllProducts);

  const getNextId = () => {
    return products.length + 1;
  };

  const updtaeProductOperation = async (id, product) => {
    await updtaeProduct(id, product);

    const getNewProducts = (p) => {
      if (p.id == id) p = product;
      return p;
    };

    setProducts(products.map(getNewProducts));
  };

  const addProductOperation = async (product) => {
    const newProduct = {
      ...product,
      isInCart: false,
      id: getNextId(),
    };

    try {
      await addProduct(newProduct);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProductOperation = async (id) => {
    await deleteProduct(id);

    const getNewProducts = (p) => p.id != id;

    setProducts(products.filter(getNewProducts));
  };

  let allData = {
    updtaeProductOperation,
    addProductOperation,
    deleteProductOperation,
    getProductById,
    getNextId,
    products,
    isLoading,
    errors,
  };

  return (
    <ProductContext.Provider value={allData}>
      {children}
    </ProductContext.Provider>
  );
};
