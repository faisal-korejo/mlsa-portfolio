/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./src/Components/About.jsx";
import Footer from "./src/Components/Footer.jsx";
import Header from "./src/Components/Header.jsx";
import Home from "./src/Components/Home.jsx";
import Portfolio from "./src/Components/Portfolio.jsx";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Faisal Zama Korejo",
  title: "Web Developer & Content Writer",
  email: "faisalzama043@gmail.com",
  gitHub: "https://github.com/faisal-korejo",
  instagram: "https://www.instagram.com/iampessimist_.45/?hl=en",
  linkedIn: "https://www.linkedin.com/in/faisal-zama-korejo-534717251/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
