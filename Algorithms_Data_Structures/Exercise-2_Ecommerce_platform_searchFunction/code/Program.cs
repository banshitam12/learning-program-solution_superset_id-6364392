using System;

namespace ECommerceSearchPlatform
{
    // Product class with attributes for searching
    public class Product : IComparable<Product>
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int productId, string productName, string category)
        {
            ProductId = productId;
            ProductName = productName;
            Category = category;
        }

        //Sort the array for binary search by ProductID
        public int CompareTo(Product other)
        {
            if (other == null) return 1;
            return this.ProductId.CompareTo(other.ProductId);
        }

        public override string ToString()
        {
            return $"ID: {ProductId}, Name: {ProductName}, Category: {Category}";
        }
    }

    // Implementation of Linear Search for product array
    public class LinearSearch
    {
        private Product[] products;

        public LinearSearch(Product[] productArray)
        {
            products = productArray;
        }


        public Product SearchById(int productId)
        {
            for (int i = 0; i < products.Length; i++)
            {
                if (products[i].ProductId == productId)
                {
                    return products[i];
                }
            }
            return null;
        }

        public void DisplayArray()
        {
            Console.WriteLine("Linear Search Array Representation ");
            for (int i = 0; i < products.Length; i++)
            {
                Console.WriteLine($"Index {i}: {products[i]}");
            }
        }
    }

    // Implementation of Binary Search on product array 
    public class BinarySearch
    {
        private Product[] sortedProducts;

        public BinarySearch(Product[] productArray)
        {

            sortedProducts = new Product[productArray.Length];
            Array.Copy(productArray, sortedProducts, productArray.Length);
            Array.Sort(sortedProducts); 
        }


        public Product SearchById(int productId)
        {
            int low = 0;
            int high = sortedProducts.Length - 1;

            while (low <= high)
            {
                int mid = low + (high - low) / 2;

                if (sortedProducts[mid].ProductId == productId)
                {
                    return sortedProducts[mid];
                }

                if (sortedProducts[mid].ProductId < productId)
                    low = mid + 1;
                else
                    high = mid - 1;
            }

            return null; 
        }

        public void DisplayArray()
        {
            Console.WriteLine(" Binary Search Array Representation ");
            for (int i = 0; i < sortedProducts.Length; i++)
            {
                Console.WriteLine($"Index {i}: {sortedProducts[i]}");
            }
        }
    }

    // Input for search in L.S and store in sorted array using B.S
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine(" E-Commerce Products \n");


            Product[] products = {
                new Product(2, "Kurti", "Clothing"),
                new Product(12, "I-Phone", "Electronics"),
                new Product(7, "Sugar", "Grocery"),
                new Product(23, "Lipstick", "Beauty"),
                new Product(24, "Table", "Furniture")

            };

            //Initialize and Display L.S and B.S
            LinearSearch linearSearch = new LinearSearch(products);
            BinarySearch binarySearch = new BinarySearch(products);


            linearSearch.DisplayArray();
            Console.WriteLine();
            binarySearch.DisplayArray();

            // User Input to search the Product ID in the array
            Console.WriteLine("\nEnter Product ID to search:");
            string input = Console.ReadLine();
            int searchId;

            if (int.TryParse(input, out searchId))
            {
                
             Product linearResult = linearSearch.SearchById(searchId);
                if (linearResult != null)
                    Console.WriteLine($"Linear Search Found: {linearResult}");
                else
                    Console.WriteLine("Linear Search: Product not found");

                
                Product binaryResult = binarySearch.SearchById(searchId);
                if (binaryResult != null)
                    Console.WriteLine($"Binary Search Found: {binaryResult}");
                else
                    Console.WriteLine("Binary Search: Product not found");
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid integer Product ID.");
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}
