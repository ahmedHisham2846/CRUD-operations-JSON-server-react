import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cartContext";
import { useFeach } from "../../customHooks/useFeach";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductById } = useContext(ProductContext);
  const { addProductToCart } = useContext(CartContext);
  let { id } = useParams();
  let [product, , isLoading, errors] = useFeach(getProductById(id));

  return (
    <div className="bg-dark container p-5 mt-5 rounded">
      {isLoading && <h1 className="text-light mb-5"> Loading.....</h1>}
      {!isLoading && !errors && (
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.productName}
            />
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <h2 className="text-light mb-5">Product Details : {id}</h2>
            <div className="bg-light p-2 text-center rounded">
              <p className="fs-3">product name: {product.productName}</p>
              <p className="fs-3">product price: {product.price}</p>
              <p className="fs-3">product quantity: {product.quantity}</p>
            </div>
            <button
              onClick={() => {
                addProductToCart(product.id, product);
              }}
              className="btn btn-outline-success mx-1 mt-3"
            >
              Add To Cart
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn btn-outline-primary mx-1 mt-3"
            >
              Back To Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
