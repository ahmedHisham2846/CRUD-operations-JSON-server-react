import React, { useContext } from "react";
import ProductCard from "./Products/ProductCard";
import { ProductContext } from "../context/productContext";

const Home = () => {
  const { products, isLoading } = useContext(ProductContext);

  return (
    <div className="container py-5">
      <div className="row">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          products.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
