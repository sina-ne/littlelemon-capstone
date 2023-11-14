import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
