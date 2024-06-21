import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StaffPage from './components/StaffPage';
import './App.css';

function App() {
  const [isStudent, setIsStudent] = useState(true);
  const [marks, setMarks] = useState([]);

  const handleToggle = () => {
    setIsStudent(!isStudent);
  };

  const handleMarksSubmit = (newMarks) => {
    setMarks(newMarks);
    setIsStudent(false);
  };

  return (
    <div className="App">
      <Navbar isStudent={isStudent} onToggle={handleToggle} />
      {isStudent ? (
        <StudentForm onSubmit={handleMarksSubmit} />
      ) : (
        <StaffPage marks={marks} />
      )}
    </div>
  );
}

export default App;
