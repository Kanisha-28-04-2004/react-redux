import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onToggle }) => {
  const [isStaff, setIsStaff] = useState(true);

  const handleToggle = () => {
    setIsStaff(!isStaff);
    onToggle(!isStaff);
  };

  return (
    <nav className="navbar">
      <span>Staff</span>
      <div className="toggle-switch" onClick={handleToggle}>
        <div className={`toggle-thumb ${isStaff ? 'staff' : 'student'}`}></div>
      </div>
      <span>Student</span>
    </nav>
  );
};

export default Navbar;
