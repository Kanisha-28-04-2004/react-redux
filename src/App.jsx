import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from './redux/actions';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isStaff, setIsStaff] = useState(true);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);
  const studentsData = useSelector((state) => state.studentsData);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (sortKey) => {
    const sortOrder = sort.sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setSort(sortKey, sortOrder));
  };

  const filteredData = studentsData
    .filter((student) => student.rollNumber.includes(filter))
    .sort((a, b) => {
      if (sort.sortKey === 'marks' || sort.sortKey === 'sno') {
        return sort.sortOrder === 'asc' ? a[sort.sortKey] - b[sort.sortKey] : b[sort.sortKey] - a[sort.sortKey];
      }
      if (typeof a[sort.sortKey] === 'string' && typeof b[sort.sortKey] === 'string') {
        return sort.sortOrder === 'asc'
          ? a[sort.sortKey].localeCompare(b[sort.sortKey])
          : b[sort.sortKey].localeCompare(a[sort.sortKey]);
      }
      return 0;
    });

  return (
    <div className="App">
      <Navbar onToggle={setIsStaff} />
      {isStaff ? (
        <>
          <h1>Student Table</h1>
          <div className="filter">
            <label htmlFor="rollNumberFilter">Filter by Roll Number:</label>
            <input
              type="text"
              id="rollNumberFilter"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
          <div className="sort">
            <button onClick={() => handleSortChange('sno')}>Sort by S.No</button>
            <button onClick={() => handleSortChange('rollNumber')}>Sort by Roll Number</button>
            <button onClick={() => handleSortChange('marks')}>Sort by Marks</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student) => (
                <tr key={student.sno}>
                  <td>{student.sno}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.name}</td>
                  <td>{student.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="empty-page">
          <h1>Student Page</h1>
          <p>This is the student view.</p>
        </div>
      )}
    </div>
  );
}

export default App;
