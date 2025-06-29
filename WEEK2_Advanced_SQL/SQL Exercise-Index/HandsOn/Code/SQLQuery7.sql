-- Create database for Index exercises
CREATE DATABASE [IndexExerciseDB];
GO

USE [IndexExerciseDB];
GO

-- Create the required tables
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Insert sample data
INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);
GO

-- Exercise 1: Non-Clustered Index on ProductName

-- Step 1: Query before index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create non-clustered index
CREATE NONCLUSTERED INDEX IX_Products_ProductName 
ON Products (ProductName);

-- Step 3: Query after index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Exercise 2: Alternative approach using a new table

-- Step 1: Drop the non-clustered index from Exercise 1
DROP INDEX IF EXISTS IX_Products_ProductName ON Products;
GO

-- Step 2: Create a copy of Orders table without primary key for demonstration
SELECT OrderID, CustomerID, OrderDate 
INTO Orders_Copy 
FROM Orders;
GO

-- Step 3: Query before clustered index creation
SELECT * FROM Orders_Copy WHERE OrderDate = '2023-01-15';

-- Step 4: Create clustered index on OrderDate
CREATE CLUSTERED INDEX IX_Orders_Copy_OrderDate ON Orders_Copy (OrderDate);
GO

-- Step 5: Query after clustered index creation
SELECT * FROM Orders_Copy WHERE OrderDate = '2023-01-15';
GO

-- Exercise 3: Creating a Composite Index



-- Step 1: Query to fetch orders before composite index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create a composite index on CustomerID and OrderDate
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate 
ON Orders (CustomerID, OrderDate);

-- Step 3: Query to fetch orders after composite index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';