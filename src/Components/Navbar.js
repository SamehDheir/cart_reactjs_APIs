import React from "react";
import "./Navbar.css";

function Navbar({ counter }) {
  return (
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          API SAMEH
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="position-absolute translate-middle badge rounded-pill bg-danger">
            {counter}
          </span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Products Cart
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
