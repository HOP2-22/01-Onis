import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bgo from "../bg-img.jpg";

export const Home = () => {
  return (
    <div className="container">
      <p className="bgimg">
        <div className="header">
          <div className="logo">team</div>
          <div className="logo2"></div>
          <div className="link">Products</div>
          <div className="links">Services</div>
          <div className="links">Contact</div>
          <div className="links">Log in</div>
          <div className="get-access">Get Access</div>
        </div>
        <div className="actualone">
          <div className="adone">Instant collabrations for remote teams</div>
          <div className="adtwo">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
        </div>
      </p>
    </div>
  );
};
