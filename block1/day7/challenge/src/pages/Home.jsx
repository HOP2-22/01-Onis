import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <p className="bgimg">
        <div className="header">
          <div className="logo">team</div>
          <div className="blue-dot"></div>
          <Link className="link" to="Products">
            Products
          </Link>
          <Link className="links" to="Services">
            Services
          </Link>
          <Link className="links" to="Contacts">
            Contact
          </Link>
          <Link className="links" to="Login">
            Log in
          </Link>
          <div className="get-access">Get Access</div>
        </div>
        <div className="explanation">
          <div className="title">Instant collabrations for remote teams</div>
          <div className="description">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
          <div className="get-early-access">
            <input
              className="email"
              placeholder="Email"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="early-access-button"
              onClick={() => {
                console.log(inputValue);
              }}
            >
              Get early access
            </button>
          </div>
        </div>
      </p>
    </div>
  );
};
