import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import '../css/nav.css'

const MyNavbar = () => {
  let { cartProducts } = useContext(CartContext);
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">MEARN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink end className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink end className="nav-link" to="/products/0/edit">
              Add Product
            </NavLink>
            <NavLink end className="nav-link" to="/cart">
              Cart{" "}
              <span className="bg-dark text-white px-2 rounded-pill">
                {cartProducts.length} 
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
