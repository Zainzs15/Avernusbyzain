import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import ServicesSection from "./components/ServicesSection";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
import "./index.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="contact">
        <ContactForm/>
      </section>
      <Footer />


    </>
  );
}

export default App;
