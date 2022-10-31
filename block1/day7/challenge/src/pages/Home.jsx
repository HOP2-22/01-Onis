import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <p className="pageone">
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
      <div className="page-two">
        <div className="explanation-two">
          <div className="title-two">Your Hub for teamwork</div>
          <div className="description-two">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
        </div>
        <img src="pagetwo.png" alt="" className="page-two-first-image" />
      </div>
    </div>
  );
};
