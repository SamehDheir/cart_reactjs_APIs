import React from "react";
import "./Navbar.css";

function Navbar({ counter, cartItems, removeFromCart }) {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="#">
          API SAMEH STORE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="position-absolute translate-middle badge rounded-pill bg-danger">
            {counter}
          </span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Products Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <hr />
          <br />
          {cartItems != 0 ? (
            <div>
              {cartItems.map((product,index) => {
                return (
                  <div className="itemCart" key={index}>
                    <img src={product.image} />
                    <div>
                      <h5>{product.title}</h5>
                      <h6>${product.price}</h6>
                      <button onClick={() => removeFromCart(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center fw-bolder mt-5 empty">
              Cart Is Empty , Please Add Item 🥹
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
