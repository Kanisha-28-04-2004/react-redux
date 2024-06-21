import React from 'react';
import '../App.css';

function Navbar({ isStudent, onToggle }) {
  return (
    <nav className="navbar">
      <h1>KEC</h1>
      <div className="toggle-container">
        <span className="toggle-text"> Staff </span>
        <div
          className={`toggle-button ${isStudent ? 'active' : ''}`}
          onClick={onToggle}
        >
          <div className="toggle-circle"></div>
        </div>
        <span className="toggle-text"> Student </span>
      </div>
    </nav>
  );
}

export default Navbar;
