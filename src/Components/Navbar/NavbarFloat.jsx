import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class FixdNavbar extends Component {
  render() {
    return (
      <div>
        <div className="left dropdown">
          <button className="dropbtn">Content</button>
          <div className="dropdown-content-left">
            <Link to="/">Shop</Link>
            <Link to="/cart">My cart</Link>
          </div>
          <div className="right">
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FixdNavbar;
