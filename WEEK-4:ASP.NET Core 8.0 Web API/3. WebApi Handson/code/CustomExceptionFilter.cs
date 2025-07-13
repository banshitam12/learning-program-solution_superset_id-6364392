using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Text;

namespace AdvancedWebAPIProject.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            // Add debug output to verify the filter is being called
            System.Diagnostics.Debug.WriteLine("CustomExceptionFilter.OnException called!");
            Console.WriteLine("Exception caught by CustomExceptionFilter");

            // Log exception to file
            LogExceptionToFile(context.Exception);

            // Set the response
            context.Result = new ObjectResult("An error occurred while processing your request")
            {
                StatusCode = 500
            };

            // Mark exception as handled
            context.ExceptionHandled = true;
        }

        private void LogExceptionToFile(Exception exception)
        {
            try
            {
                System.Diagnostics.Debug.WriteLine("LogExceptionToFile method called");

                // Use Documents folder instead of project directory for better reliability
                string logPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments), "WebAPILogs");
                Console.WriteLine($"Attempting to create logs at: {logPath}");

                if (!Directory.Exists(logPath))
                {
                    Directory.CreateDirectory(logPath);
                    Console.WriteLine("WebAPILogs directory created successfully");
                    System.Diagnostics.Debug.WriteLine("WebAPILogs directory created in Documents folder");
                }

                string fileName = $"ErrorLog_{DateTime.Now:yyyyMMdd}.txt";
                string filePath = Path.Combine(logPath, fileName);
                Console.WriteLine($"Writing to file: {filePath}");
                System.Diagnostics.Debug.WriteLine($"Log file path: {filePath}");

                StringBuilder logEntry = new StringBuilder();
                logEntry.AppendLine($"Timestamp: {DateTime.Now}");
                logEntry.AppendLine($"Exception Type: {exception.GetType().Name}");
                logEntry.AppendLine($"Message: {exception.Message}");
                logEntry.AppendLine($"Stack Trace: {exception.StackTrace}");
                logEntry.AppendLine(new string('-', 50));

                File.AppendAllText(filePath, logEntry.ToString());
                Console.WriteLine("Log entry written successfully");
                System.Diagnostics.Debug.WriteLine("Log entry written successfully");
            }
            catch (Exception logException)
            {
                System.Diagnostics.Debug.WriteLine($"Logging failed: {logException.Message}");
                Console.WriteLine($"Logging error: {logException.Message}");
                Console.WriteLine($"Stack trace: {logException.StackTrace}");
            }
        }
    }
}




