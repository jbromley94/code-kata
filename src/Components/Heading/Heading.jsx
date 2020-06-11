import React, { Component } from "react";
import "./Heading.css";
import NavBar from "../Navbar/NavbarFloat";
import { Link } from "react-router-dom";

class Heading extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to={`/`}>
          {" "}
          <button className="Title">Letters Super Store</button>
        </Link>
        <NavBar />
      </div>
    );
  }
}

export default Heading;
