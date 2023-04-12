import React from "react";
import globe from "../img/globe.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar--logo" src={globe} alt="" />
      <h2 className="navbar--title">my travel journal.</h2>
    </div>
  );
}
