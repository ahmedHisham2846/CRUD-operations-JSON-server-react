import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

const Products = () => {
  let { products, isLoading, errors, deleteProductOperation } =
    useContext(ProductContext);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-5">Products List</h1>
      {isLoading && <h1 className="mb-5">Loading.....</h1>}
      {!isLoading && !errors && (
        <div className="row">
          {products.length === 0 ? (
            <h1>Empty Products List</h1>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <NavLink
                          to={`/products/${product.id}`}
                          className="mx-2 btn btn-outline-info"
                        >
                          Details
                        </NavLink>
                        <NavLink
                          to={`/products/${product.id}/edit`}
                          className="mx-2 btn btn-outline-warning"
                        >
                          Edit
                        </NavLink>
                        <button
                          onClick={() => deleteProductOperation(product.id)}
                          className="mx-2 btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
