-- Exercise 4: Execute a Stored Procedure

--Use of Database from exercise 1
USE EmployeeManagementSystem;
GO

-- Drop since it already was present in exercise 1
DROP PROCEDURE IF EXISTS sp_GetEmployeesByDepartment;
GO

-- Creation of stored procedure
CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT e.EmployeeID, e.FirstName, e.LastName, d.DepartmentName, e.Salary, e.JoinDate
    FROM Employees e
    INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID
    WHERE e.DepartmentID = @DepartmentID;
END;
GO

-- execution of the stored procedure for each department

EXEC sp_GetEmployeesByDepartment @DepartmentID = 1;

 
EXEC sp_GetEmployeesByDepartment @DepartmentID = 2;


EXEC sp_GetEmployeesByDepartment @DepartmentID = 3;


EXEC sp_GetEmployeesByDepartment @DepartmentID = 4;
