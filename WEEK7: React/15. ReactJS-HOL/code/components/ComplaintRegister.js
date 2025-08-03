import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!employeeName.trim() || !complaint.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Generate reference number
    const referenceNumber = 'TKT' + Math.floor(Math.random() * 1000000);
    
    // Show success message with reference number
    alert(`Complaint submitted successfully!\nReference Number: ${referenceNumber}\nEmployee: ${employeeName}\nComplaint: ${complaint}`);
    
    // Reset form
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div className="complaint-register">
      <h2>Ticket Raising App</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter employee name"
            className="input-field"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Enter your complaint"
            rows="5"
            className="textarea-field"
          />
        </div>
        
        <button type="submit" className="submit-button">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;