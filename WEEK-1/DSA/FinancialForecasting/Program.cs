using System;
using System.Linq;

namespace FinancialForecasting
{
    public class FinancialForecastingMeter
    {
        // Calculate average growth rate from historical data
        public static double AvgGrowthRate(double[] historicalValues)
        {
            if (historicalValues.Length < 2) return 0;

            double totalGrowthRate = 0;
            int growthPeriods = 0;

            for (int i = 1; i < historicalValues.Length; i++)
            {
                if (historicalValues[i - 1] > 0) 
                {
                    double growthRate = (historicalValues[i] - historicalValues[i - 1]) / historicalValues[i - 1];
                    totalGrowthRate += growthRate;
                    growthPeriods++;
                }
            }

            if (growthPeriods > 0)
            {
                return totalGrowthRate / growthPeriods;
            }
            else
            {
                return 0;
            }
            }

        // Recursive method to predict future values based on calculated growth rate
        public static double PredictFutureValue(double currVal, double avgGrowthRate, int periodsAhead)
        {
            
            if (periodsAhead == 0)
            {
                return currVal;
            }
            return PredictFutureValue(currVal * (1 + avgGrowthRate), avgGrowthRate, periodsAhead - 1);
        }
    }
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine(" Financial Forecasting Meter \n");

            //User Input for historical data and future prediction calculation
            Console.Write("The number of historical data points are : ");
            int dataPoints;
            while (!int.TryParse(Console.ReadLine(), out dataPoints) || dataPoints < 2)
            {
                Console.Write("Enter atleast 2 data points : ");
            }

            double[] histData = new double[dataPoints];

            Console.WriteLine("\n Enter the values :");
            for (int i = 0; i < dataPoints; i++)
            {
                Console.Write($"Period {i + 1}: $");
                while (!double.TryParse(Console.ReadLine(), out histData[i]) || histData[i] < 0)
                {
                    Console.Write($"Please enter a valid positive number for Period {i + 1}: $");
                }
            }

             double avgGrowthRate = FinancialForecastingMeter.AvgGrowthRate(histData);

             Console.Write("\nEnter the number of periods ahead future prediction ");
            int periodsAhead;
            while (!int.TryParse(Console.ReadLine(), out periodsAhead) || periodsAhead <= 0)
            {
                Console.Write("Enter a positive number: ");
            }

            double currValue = histData[histData.Length - 1]; 
            double futureVal = FinancialForecastingMeter.PredictFutureValue(currValue, avgGrowthRate, periodsAhead);

            // Display results for future
            Console.WriteLine("\n Result ");
            Console.WriteLine($"Historical Data: {string.Join(", ", histData.Select(x => $"${x:F2}"))}");
            Console.WriteLine($"Calculated Avg Growth Rate: {avgGrowthRate * 100:F2}% per period");
            Console.WriteLine($"Current Value (Period {dataPoints}): ${currValue:F2}");
            Console.WriteLine($"Predicted Value (Period {dataPoints + periodsAhead}): ${futureVal:F2}");

            Console.WriteLine("\n You can press any key to exit...");
            Console.ReadKey();
        }
    }
}

