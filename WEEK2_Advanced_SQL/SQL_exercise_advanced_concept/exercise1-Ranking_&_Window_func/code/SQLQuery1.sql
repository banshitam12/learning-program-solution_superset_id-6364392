
CREATE DATABASE OnlineRetailStore;
USE OnlineRetailStore;


CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

--INSERTING VALUES INTO THE TABLE
INSERT INTO Product VALUES
(1, 'Gaming Laptop', 'Electronics', 1599.99),
(2, 'Business Laptop', 'Electronics', 1299.99),
(3, 'Smartphone Pro', 'Electronics', 999.99),
(4, 'Tablet Premium', 'Electronics', 799.99),
(5, 'Wireless Earbuds', 'Electronics', 299.99),
(6, 'Executive Desk', 'Furniture', 899.99),
(7, 'Ergonomic Chair', 'Furniture', 649.99),
(8, 'Standing Desk', 'Furniture', 599.99),
(9, 'Bookshelf Deluxe', 'Furniture', 399.99),
(10, 'Coffee Table', 'Furniture', 249.99),
(11, 'Designer Jacket', 'Clothing', 299.99),
(12, 'Premium Jeans', 'Clothing', 149.99),
(13, 'Casual Shirt', 'Clothing', 79.99),
(14, 'Sports Shoes', 'Clothing', 179.99),
(15, 'Winter Coat', 'Clothing', 249.99);

-- TO VIEW INSERT VALUES

SELECT * FROM Product;

-- ROW_NUMBER query

SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
FROM Product
ORDER BY Category, Price DESC;

--RANK FUNCTION

SELECT 
    ProductID, ProductName, Category, Price,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
FROM Product
ORDER BY Category, Price DESC;

--DENSE RANK FUNCTION

SELECT 
    ProductID, ProductName, Category, Price,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Product
ORDER BY Category, Price DESC;

--Comparison of all the ranking functions

SELECT 
    ProductID, ProductName, Category, Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Product
ORDER BY Category, Price DESC;

--Top 3 Products in each category

WITH RankedProducts AS (
    SELECT 
        ProductID, ProductName, Category, Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Product
)
SELECT ProductID, ProductName, Category, Price, RowNum
FROM RankedProducts
WHERE RowNum <= 3
ORDER BY Category, Price DESC;






