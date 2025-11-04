import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      <Hero />
      <Projects />  {/* This should render the projects */}
      <About />
      <Contact /> 
      <Footer />
    </div>
  );
};

export default App;