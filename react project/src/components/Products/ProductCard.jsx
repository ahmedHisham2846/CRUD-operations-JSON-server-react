import React, { useContext } from "react";
import {
  useProductState,
  productState,
} from "../../customHooks/useProductState";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

const ProductCard = ({ product }) => {
  const { deleteProductOperation } = useContext(ProductContext);
  let productQuantityState = useProductState(product.quantity);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="text-center bg-light border rounded text-blak pb-3">
        <img
          className="img-fluid mb-3"
          src={product.image}
          alt={product.productName}
        />
        <p className="fs-5 fw-bold">{product.productName} </p>
        <p className="fs-5">price: {product.price}</p>

        {productQuantityState === productState.haveNoQuantity && (
          <>
            <p className="fs-5 text-danger fw-bold">No Product Available</p>
            <span className="bg-dark py-2 px-3 rounded text-light">
              Solid Out
            </span>
          </>
        )}

        {productQuantityState === productState.haveOneItem && (
          <>
            <p className="fs-5 text-warning fw-bold">Only One Product Available</p>
            <NavLink className="btn btn-info " to={`/products/${product.id}`}>
              View Product
            </NavLink>
            <div className="my-2"></div>
            <NavLink
              className="btn btn-warning "
              to={`/products/${product.id}/edit`}
            >
              Edit Product
            </NavLink>
            <div className="my-2"></div>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteProductOperation(product.id);
              }}
            >
              Delet Product
            </button>
          </>
        )}

        {productQuantityState === productState.haveQuantity && (
          <>
            <p className="fs-5">{`Quantity: ${product.quantity}`}</p>
            <NavLink className="btn btn-info " to={`/products/${product.id}`}>
              View Product
            </NavLink>
            <div className="my-2"></div>
            <NavLink
              className="btn btn-warning "
              to={`/products/${product.id}/edit`}
            >
              Edit Product
            </NavLink>
            <div className="my-2"></div>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteProductOperation(product.id);
              }}
            >
              Delet Product
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
