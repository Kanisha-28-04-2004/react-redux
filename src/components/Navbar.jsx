import React from 'react';
import '../App.css'

function Navbar({ isStudent, onToggle }) {
  return (
    <nav className="navbar">
      <h1>KEC</h1>
      <button className='btn' onClick={onToggle}>
        {isStudent ? 'Staff' : 'Student'}
      </button>
    </nav>
  );
}

export default Navbar;
