import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Testimonials from "./components/testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <MainContent />
        <Testimonials />
        <About />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
