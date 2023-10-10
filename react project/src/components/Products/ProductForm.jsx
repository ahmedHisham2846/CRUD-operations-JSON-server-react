import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext";
import { useFeach } from "../../customHooks/useFeach";

const ProductForm = () => {
  let emptyProduct = {
    productName: "",
    price: "",
    quantity: "",
    isInCart: false,
  };

  let [formValues, setFormValues] = useState(emptyProduct);

  let { id } = useParams();
  const { getProductById, updtaeProductOperation, addProductOperation } =
    useContext(ProductContext);

  let [product, , isLoading, errors] = useFeach(getProductById(id));
  let navigate = useNavigate();

  useEffect(() => {
    if (id == 0) setFormValues(emptyProduct);
    else if (!isLoading && !errors) setFormValues(product);
  }, [product, id]);

  const getInputValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const formOperation = async (e) => {
    e.preventDefault();

    if (id != 0) {
      updtaeProductOperation(id, {
        ...product,
        ...formValues,
      });
    } else {
      addProductOperation(formValues);
    }

    navigate("/products");
  };

  return (
    <div className="mt-5 rounded bg-light p-5 container">
      <h1 className="mb-4">{id == 0 ? "Add Product" : "Edit Product"}</h1>
      <form onSubmit={formOperation} className="row">
        <div className="col-12 col-md-6">
          <input
            type="text"
            name="productName"
            id="productName"
            className="form-control"
            placeholder="Enter Product Name"
            value={formValues.productName}
            onInput={getInputValue}
          />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            placeholder="Enter Product Price"
            value={formValues.price}
            onInput={getInputValue}
          />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <input
            type="text"
            name="quantity"
            id="quantity"
            className="form-control"
            placeholder="Enter Product Quantity"
            value={formValues.quantity}
            onInput={getInputValue}
          />
        </div>
        <div className="col-12"></div>
        <div className="col-4 col-md-2 mt-3">
          <button className="btn btn-success" type="submit">
            {id == 0 ? "Add Product" : "Edit Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
