import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Banner/Hero";
import Footer from "./components/Footer/Footer";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="font-satoshi">
      <Navbar />
      <Hero />
      <Page />
      <Footer />
    </div>
  );
};

export default App;
