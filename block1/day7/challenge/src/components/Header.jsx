import React from "react";
import { Link } from "react-router-dom";
export const Header = ({ color }) => {
  return (
    <header className="header">
      <Link
        to=""
        className="logo"
        style={{
          color: color === 0 ? "white" : "black",
        }}
      >
        team
      </Link>
      <div className="blue-dot"></div>
      <Link
        className="link"
        to="Products"
        style={{
          color: color === 0 ? "white" : "black",
        }}
      >
        Products
      </Link>
      <Link
        className="links"
        to="Services"
        style={{
          color: color === 0 ? "white" : "black",
        }}
      >
        Services
      </Link>
      <Link
        className="links"
        to="Contacts"
        style={{
          color: color === 0 ? "white" : "black",
        }}
      >
        Contact
      </Link>
      <Link
        className="links"
        to="Login"
        style={{
          color: color === 0 ? "white" : "black",
        }}
      >
        Log in
      </Link>
      <div className="get-access">Get Access</div>
    </header>
  );
};
export default Header;
