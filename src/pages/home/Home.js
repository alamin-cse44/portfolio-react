import React from "react";
import Poster from "../../components/poster/Poster";
import Features from "../../components/features/Features";
import Portfolio from "../../components/portfolio/Portfolio";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Poster />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
