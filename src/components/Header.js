import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <a>
        <img src="../imgs/littlelemonlogo.png" alt="Logo of Little Lemon" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
