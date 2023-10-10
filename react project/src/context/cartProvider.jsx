import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "./cartContext";
import { useFeach } from "../customHooks/useFeach";
import { ProductContext } from "./productContext";
import { getAllProducts } from "../API/productsAPI";

export const CartProvider = ({ children }) => {
  const { updtaeProductOperation } = useContext(ProductContext);
  let [products, , isLoading, errors] = useFeach(getAllProducts);
  let [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = () => {
      if (!isLoading && !errors) {
        setCartProducts(products.filter((p) => p.isInCart));
      }
    };

    getCartProducts();
  }, [isLoading]);

  const addProductToCart = async (id, product) => {
    product.isInCart = true;
    await updtaeProductOperation(id, product);

    const oldProduct = cartProducts.find((p) => p.id == id);
    if (!oldProduct) {
      setCartProducts([...cartProducts, product]);
    }
  };

  const removeProductFromCart = async (id, product) => {
    product.isInCart = false;
    await updtaeProductOperation(id, product);
    setCartProducts(cartProducts.filter((p) => p.id != id));
  };

  let allData = {
    removeProductFromCart,
    addProductToCart,
    cartProducts,
  };

  return (
    <CartContext.Provider value={allData}>{children}</CartContext.Provider>
  );
};
