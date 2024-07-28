import React from "react";
import Header from "./components/Header";
import Hero from "./view/Hero";
import About from "./view/About";
import Contact from "./view/Contact";
import Tokenomics from "./view/Tokenomics";

const App = () => {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Contact />
    </main>
  );
};

export default App;
