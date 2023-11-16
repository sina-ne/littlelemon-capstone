import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="../imgs/littlelemonlogo.png" alt="Logo of Little Lemon" />
      </div>
      <div className="footer-navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <ul>
          <li>Contact</li>
          <li>1051 W Belmont Ave, Chicago, IL 60657</li>
          <li>1-800-865-4097</li>
          <li>
            <a href="mailto:little.lemon@restaurant.com">
              little.lemon@restaurant.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <ul>
          <li>Follow us</li>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com">X</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
