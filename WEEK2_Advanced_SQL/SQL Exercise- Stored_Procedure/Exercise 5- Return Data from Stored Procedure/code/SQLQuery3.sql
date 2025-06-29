-- USING THE DATABASE

USE [EmployeeManagementSystem];
GO

-- DROPPED PREVIOUS PROCEDURE

DROP PROCEDURE IF EXISTS sp_GetEmployeeCountByDepartment;
GO

-- CREATING STORED PROCEDURE ALONG WITH OUTPUT PARAMETER

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT,                
    @EmployeeCount INT OUTPUT         
AS
BEGIN
    SELECT @EmployeeCount = COUNT(*)
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- EXECUTING STORED PROCEDURE

DECLARE @Count INT;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 1, @EmployeeCount = @Count OUTPUT;
SELECT @Count AS EmployeeCount;
GO

-- TEST WITH OTHER DEPARTMENTS

DECLARE @CountIT INT;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3, @EmployeeCount = @CountIT OUTPUT;
SELECT @CountIT AS ITEmployeeCount;
GO

DECLARE @CountFinance INT;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 2, @EmployeeCount = @CountFinance OUTPUT;
SELECT @CountFinance AS FinanceEmployeeCount;
GO

DECLARE @CountMarketing INT;
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 4, @EmployeeCount = @CountMarketing OUTPUT;
SELECT @CountMarketing AS MarketingEmployeeCount;
GO

--DISPLAY ALONG WITH EMPLOYEES DETAILS

SELECT 
    e.EmployeeID,
    e.FirstName,
    e.LastName,
    d.DepartmentName,
    e.Salary,
    e.JoinDate
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID
ORDER BY d.DepartmentName, e.EmployeeID;





