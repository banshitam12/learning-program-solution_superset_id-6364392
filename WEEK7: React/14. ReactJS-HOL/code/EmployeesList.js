import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  // Sample employee data
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },
    { id: 3, name: 'Mike Johnson', position: 'Manager' }
  ];

  return (
    <div>
      <h2>Employees List</h2>
      {employees.map(employee => (
        // Remove theme prop - no longer needed
        <EmployeeCard 
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeesList;

