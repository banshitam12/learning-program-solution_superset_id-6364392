using Confluent.Kafka;
using System;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        // Configure the consumer
        var config = new ConsumerConfig
        {
            GroupId = "chat-consumer-group",
            BootstrapServers = "localhost:9092",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using (var consumer = new ConsumerBuilder<string, string>(config).Build())
        {
            consumer.Subscribe("chat-message");

            Console.WriteLine("=== Kafka Chat Consumer ===");
            Console.WriteLine("Listening for messages...");
            Console.WriteLine("Press Ctrl+C to exit");
            Console.WriteLine("===========================");

            CancellationTokenSource cts = new CancellationTokenSource();
            Console.CancelKeyPress += (_, e) => {
                e.Cancel = true;
                cts.Cancel();
            };

            try
            {
                while (!cts.Token.IsCancellationRequested)
                {
                    try
                    {
                        var consumeResult = consumer.Consume(cts.Token);
                        Console.WriteLine($"📨 Received: {consumeResult.Message.Value}");
                    }
                    catch (ConsumeException ex)
                    {
                        Console.WriteLine($"❌ Error consuming message: {ex.Error.Reason}");
                    }
                }
            }
            catch (OperationCanceledException)
            {
                Console.WriteLine("\nConsumer shutting down...");
            }
            finally
            {
                consumer.Close();
            }
        }
    }
}

