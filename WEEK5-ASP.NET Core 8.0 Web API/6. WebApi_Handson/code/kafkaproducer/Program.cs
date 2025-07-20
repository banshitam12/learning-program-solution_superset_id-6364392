using Confluent.Kafka;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Configure the producer
        var config = new ProducerConfig
        {
            BootstrapServers = "localhost:9092",
            ClientId = Environment.MachineName + "-producer"
        };

        using (var producer = new ProducerBuilder<string, string>(config).Build())
        {
            Console.WriteLine("=== Kafka Chat Producer ===");
            Console.WriteLine("Type messages to send (press Enter after each message)");
            Console.WriteLine("Type 'quit' to exit");
            Console.WriteLine("================================");

            string message;
            while ((message = Console.ReadLine()) != "quit")
            {
                if (!string.IsNullOrEmpty(message))
                {
                    try
                    {
                        var kafkaMessage = new Message<string, string>
                        {
                            Key = DateTime.Now.ToString("HH:mm:ss"),
                            Value = $"[{DateTime.Now:HH:mm:ss}] {message}"
                        };

                        await producer.ProduceAsync("chat-message", kafkaMessage);
                        Console.WriteLine($"✓ Message sent: {message}");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"❌ Error sending message: {ex.Message}");
                    }
                }
            }

            // Ensure all messages are sent before closing
            producer.Flush(TimeSpan.FromSeconds(10));
            Console.WriteLine("Producer shutting down...");
        }
    }
}

