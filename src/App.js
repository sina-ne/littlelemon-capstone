import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials";
import About from "./components/About";
import Reservation from "./components/Reservation";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Reservation />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
