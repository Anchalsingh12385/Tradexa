import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <Awards />
        <Education />
        <Pricing />
        <OpenAccount />
        <Footer />
    </>
     
  );
}

export default HomePage;