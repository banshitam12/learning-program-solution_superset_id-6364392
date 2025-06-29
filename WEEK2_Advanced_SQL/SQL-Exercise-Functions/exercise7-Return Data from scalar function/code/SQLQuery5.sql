-- Use the database
USE EmployeeManagementSystem;
GO

CREATE FUNCTION fn_CalculateAnnualSalary
(@MonthlySalary DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
AS
BEGIN
    RETURN @MonthlySalary * 12;
END;
GO

-- Exercise 7: Return the annual salary for EmployeeID = 1
SELECT 
    EmployeeID, 
    FirstName, 
    LastName, 
    Salary AS MonthlySalary,
    dbo.fn_CalculateAnnualSalary(Salary) AS AnnualSalary
FROM Employees
WHERE EmployeeID = 1;


