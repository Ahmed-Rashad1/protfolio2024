import React from "react";
import { Contact, Home, Skills, Projects, Footer } from "./container";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
