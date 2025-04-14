import React from 'react';
import MatrixRain from './components/Matrixrain';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <MatrixRain />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          padding: '',
          textAlign: 'center',
        }}
      >
        <Navbar />
        <h1>Welcome to the Matrix</h1>
        <p>The background is alive 👾</p>
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;