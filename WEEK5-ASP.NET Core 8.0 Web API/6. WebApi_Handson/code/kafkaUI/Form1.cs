using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatUI
{
    public partial class Form1 : Form
    {
        private IProducer<string, string> producer;
        private IConsumer<string, string> consumer;
        private CancellationTokenSource cancellationTokenSource;
        private string username;

        public Form1()
        {
            InitializeComponent();
            InitializeKafka();
            SetupUI();
        }

        private void SetupUI()
        {
            this.Text = "Kafka Chat Application";
            this.Size = new System.Drawing.Size(600, 450);

            // Get username
            username = Microsoft.VisualBasic.Interaction.InputBox(
                "Enter your username:", "Chat Login", "User");

            if (string.IsNullOrEmpty(username))
                username = "Anonymous";

            lblStatus.Text = $"Status: Connected as {username}";
        }

        private void InitializeKafka()
        {
            try
            {
                // Initialize producer
                var producerConfig = new ProducerConfig
                {
                    BootstrapServers = "localhost:9092",
                    ClientId = $"chat-ui-{Environment.MachineName}"
                };
                producer = new ProducerBuilder<string, string>(producerConfig).Build();

                // Initialize consumer
                var consumerConfig = new ConsumerConfig
                {
                    GroupId = "chat-ui-group",
                    BootstrapServers = "localhost:9092",
                    AutoOffsetReset = AutoOffsetReset.Latest
                };
                consumer = new ConsumerBuilder<string, string>(consumerConfig).Build();
                consumer.Subscribe("chat-message");

                // Start consuming in background
                cancellationTokenSource = new CancellationTokenSource();
                Task.Run(() => StartConsumer(cancellationTokenSource.Token));

                lblStatus.Text = "Status: Connected";
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to connect to Kafka: {ex.Message}", "Connection Error");
                lblStatus.Text = "Status: Connection Failed";
            }
        }

        private async void StartConsumer(CancellationToken cancellationToken)
        {
            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var consumeResult = consumer.Consume(cancellationToken);

                    // Update UI on main thread
                    if (InvokeRequired)
                    {
                        Invoke(new Action(() => DisplayMessage(consumeResult.Message.Value)));
                    }
                    else
                    {
                        DisplayMessage(consumeResult.Message.Value);
                    }
                }
            }
            catch (OperationCanceledException)
            {
                // Expected when cancelling
            }
            catch (Exception ex)
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    MessageBox.Show($"Consumer error: {ex.Message}", "Error");
                }
            }
        }

        private void DisplayMessage(string message)
        {
            txtMessages.AppendText(message + Environment.NewLine);
            txtMessages.ScrollToCaret();
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtInput.Text.Trim()))
                return;

            try
            {
                string message = $"[{DateTime.Now:HH:mm:ss}] {username}: {txtInput.Text}";

                await producer.ProduceAsync("chat-message",
                    new Message<string, string>
                    {
                        Key = username,
                        Value = message
                    });

                txtInput.Clear();
                txtInput.Focus();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to send message: {ex.Message}", "Send Error");
            }
        }

        private void txtInput_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                btnSend_Click(sender, e);
                e.Handled = true;
            }
        }

        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            cancellationTokenSource?.Cancel();
            producer?.Dispose();
            consumer?.Close();
            base.OnFormClosing(e);
        }
    }
}


