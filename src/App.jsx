import React from 'react';
import MatrixRain from './components/Matrixrain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 text-white">
        <Navbar />
        <Hero />
        <Tokenomics />
        <Footer />
      </div>
    </div>
  );
}

export default App;