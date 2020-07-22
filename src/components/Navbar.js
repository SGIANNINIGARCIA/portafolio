import React, { Component } from "react";
import NavLinks from "./NavLinks";
import profilepic from "../img/profile/sandro.jpg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={profilepic} className="profilepic"></img>
        <NavLinks />
      </div>
    );
  }
}

export default Navbar;
