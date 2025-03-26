import React from "react";
import Poster from "../../components/poster/Poster";
import Features from "../../components/features/Features";
import Portfolio from "../../components/portfolio/Portfolio";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Skills from "../../components/skills/Skills";
import TimelineSection from "../../components/timeline-section/TimelineSection";

const Home = () => {
  return (
    <div>
      <Poster />
      <Features />
      <Skills />
      <Portfolio />
      <TimelineSection />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
};

export default Home;
