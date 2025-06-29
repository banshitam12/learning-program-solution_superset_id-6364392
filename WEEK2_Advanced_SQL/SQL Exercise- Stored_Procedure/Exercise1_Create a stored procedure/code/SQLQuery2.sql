--DATEBASE CREATION

CREATE DATABASE [EmployeeManagementSystem];
GO

USE [EmployeeManagementSystem];
GO

--CREATION OF DEPT TABLE

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);
GO

--CREATION OF EMPLOYEES TABLE

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);
GO

--VALUES INSERTING INTO DEPT TABLE

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES 
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');
GO

--VALUES INSERTING TO EMPLOYEES TABLE

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES 
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Michael', 'Johnson', 3, 7000.00, '2018-07-30'),
(4, 'Emily', 'Davis', 4, 5500.00, '2021-11-05');
GO

--EXERCISE1 CREATE A STORED PROCEDURE
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
 --TESTCASES TO CHECK

EXEC sp_GetEmployeesByDepartment @DepartmentID = 1;
GO

EXEC sp_GetEmployeesByDepartment @DepartmentID = 3;
GO

EXEC sp_GetEmployeesByDepartment @DepartmentID = 2;
GO


EXEC sp_GetEmployeesByDepartment @DepartmentID = 4;
GO