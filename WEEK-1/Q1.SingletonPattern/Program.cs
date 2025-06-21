using System;

namespace SingletonPatternExample
{
    //Define Singleton Class and code Implementation
    public sealed class Logger
    {
        private static Logger instance = null;
        private static readonly object lockObject = new object();

        private Logger()
        {
            Console.WriteLine("Logger instance created.");
        }

        public static Logger GetInstance()
        {
            if (instance == null)
            {
                lock (lockObject)
                {
                    if (instance == null)
                    {
                        instance = new Logger();
                    }
                }
            }
            return instance;
        }

        public void Log(string message)
        {
            string timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            Console.WriteLine($"[{timestamp}] LOG: {message}");
        }
    }

  //TestCase
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine(" TESTCASE \n");

            
            Logger logger1 = Logger.GetInstance();
            Logger logger2 = Logger.GetInstance();

            
            if (logger1 == logger2)
            {
                Console.WriteLine(" SUCCESS ");
            }
            else
            {
                Console.WriteLine(" FAILURE ");
            }

            Console.WriteLine("\n Logger Functionality ");
            logger1.Log("First log message from logger1");
            logger2.Log("Second log message from logger2");

            
            Console.WriteLine($"\nLogger1 HashCode: {logger1.GetHashCode()}");
            Console.WriteLine($"Logger2 HashCode: {logger2.GetHashCode()}");

            Console.WriteLine("\nEXIT by choosing any key...");
            Console.ReadKey();
        }
    }
}



