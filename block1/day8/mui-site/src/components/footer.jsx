import React from "react";
import { Container } from "@mui/system";

export const Footer = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <div className="socials">
        <div className="footer-logo">
          <div className="footer-logo-text">team</div>
          <div className="footer-logo-dot"></div>
        </div>
        <div className="footer-texts">Instagram</div>
        <div className="footer-texts">Twitter</div>
        <div className="footer-texts">Facebook</div>
      </div>
      <div className="footer-links">
        <div className="footer-title">Use cases</div>
        <div className="footer-texts">UI design</div>
        <div className="footer-texts">UX design</div>
        <div className="footer-texts">Prototyping</div>
        <div className="footer-texts">UI design</div>
        <div className="footer-texts">UX design</div>
        <div className="footer-texts">Prototyping</div>
      </div>
      <div className="footer-links">
        <div className="footer-title">Explore</div>
        <div className="footer-texts">Figma</div>
        <div className="footer-texts">Customers</div>
        <div className="footer-texts">Why I Love Figma</div>
        <div className="footer-texts">Figma</div>
        <div className="footer-texts">Customers</div>
        <div className="footer-texts">Why I Love Figma</div>
      </div>
      <div className="footer-links">
        <div className="footer-title">Resources</div>
        <div className="footer-texts">Community Resources club</div>
        <div className="footer-texts">Support</div>
        <div className="footer-texts">Education</div>
        <div className="footer-texts">Community Resources club</div>
        <div className="footer-texts">Support</div>
        <div className="footer-texts">Education</div>
      </div>
      <div className="footer-email">
        <div className="footer-email-title">Subscribe to our newsletter</div>
        <input type="text" placeholder="Email" className="footer-input" />
      </div>
    </Container>
  );
};
