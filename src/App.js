import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MainContent from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
