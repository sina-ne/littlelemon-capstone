import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../imgs/littlelemonlogo.png" alt="Logo of Little Lemon" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
