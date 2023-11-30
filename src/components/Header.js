import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section className="intro">
        <div className="blurb">
          <h1>Little Lemon</h1>
          <p>
            <strong>Based in Chicago</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <Link to="/Reservation">
            <button>Reserve a table</button>
          </Link>
        </div>
        <div>
          <img src="../imgs/restauranfood.jpg" alt="Restaurant Impression" />
        </div>
      </section>
    </header>
  );
};

export default Header;
