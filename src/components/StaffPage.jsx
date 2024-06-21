import React from 'react';

function StaffPage({ marks }) {
  return (
    <div>
      <h2>Submitted Marks</h2>
      <ul>
        {marks.map((mark, index) => (
          <li key={index}>Mark {index + 1}: {mark}</li>
        ))}
      </ul>
    </div>
  );
}

export default StaffPage;
