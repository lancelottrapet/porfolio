import React from "react";
import Skills from "../components/Skills";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Accueil from "../components/Accueil";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Accueil/>
      <Skills />
      <Footer/>
    </div>
  );
};

export default Home;
