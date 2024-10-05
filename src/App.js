import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
