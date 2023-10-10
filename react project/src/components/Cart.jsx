import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Table } from "react-bootstrap";

const Cart = () => {
  const { removeProductFromCart, cartProducts } = useContext(CartContext);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-5">Cart: {cartProducts.length}</h1>
      <div className="row">
        {cartProducts.length === 0 ? (
          <h1>Empty Cart</h1>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((cartProduct) => {
                return (
                  <tr key={cartProduct.id}>
                    <td>{cartProduct.productName}</td>
                    <td>{cartProduct.price}</td>
                    <td>
                      <button
                        onClick={() =>
                          removeProductFromCart(cartProduct.id, cartProduct)
                        }
                        className="mx-2 btn btn-outline-danger"
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Cart;
