import React, { useContext } from 'react'; // Import useContext
import ThemeContext from './ThemeContext'; // Import ThemeContext

function EmployeeCard({ employee }) {
  // Retrieve context value using useContext hook
  const theme = useContext(ThemeContext);

  return (
    <div className={`employee-card ${theme}`}>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      {/* Use theme variable for button className */}
      <button className={`btn ${theme}`}>Edit</button>
      <button className={`btn ${theme}`}>Delete</button>
    </div>
  );
}

export default EmployeeCard;

