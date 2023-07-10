import React, { useState } from 'react';
import './style.css';

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default function GoldSilverCalculator() {
  // Existing code

  return (
    <div className="container">
      <Navbar /> {/* Include the Navbar component here */}
      <div className="row">
        {/* Rest of the code */}
      </div>
    </div>
  );
}

