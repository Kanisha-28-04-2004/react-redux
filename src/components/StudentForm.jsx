import React, { useState } from 'react';
import '../App.css'

function StudentForm({ onSubmit }) {
  const [marks, setMarks] = useState({ mark1: '', mark2: '', mark3: '', mark4: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(Object.values(marks));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mark 1:
        <input type="text" name="mark1" value={marks.mark1} onChange={handleChange} />
      </label>
      <label>
        Mark 2:
        <input type="text" name="mark2" value={marks.mark2} onChange={handleChange} />
      </label>
      <label>
        Mark 3:
        <input type="text" name="mark3" value={marks.mark3} onChange={handleChange} />
      </label>
      <label>
        Mark 4:
        <input type="text" name="mark4" value={marks.mark4} onChange={handleChange} />
      </label>
      <button className='btn1' type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
