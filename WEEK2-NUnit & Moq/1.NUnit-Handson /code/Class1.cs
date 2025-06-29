using System;
using NUnit.Framework;
using CalcLibrary;

namespace CalculatorTest
{
    [TestFixture]
    public class SimpleCalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
            calculator = null;
        }

        [Test]
        public void Addition_TwoPositiveNumbers_ReturnsCorrectSum()
        {
            // Arrange
            double a = 5.0;
            double b = 3.0;
            double expected = 8.0;

            // Act
            double actual = calculator.Addition(a, b);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void Subtraction_TwoNumbers_ReturnsCorrectDifference()
        {
            // Arrange
            double a = 10.0;
            double b = 4.0;
            double expected = 6.0;

            // Act
            double actual = calculator.Subtraction(a, b);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void Multiplication_TwoNumbers_ReturnsCorrectProduct()
        {
            // Arrange
            double a = 4.0;
            double b = 5.0;
            double expected = 20.0;

            // Act
            double actual = calculator.Multiplication(a, b);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void Division_TwoNumbers_ReturnsCorrectQuotient()
        {
            // Arrange
            double a = 15.0;
            double b = 3.0;
            double expected = 5.0;

            // Act
            double actual = calculator.Division(a, b);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(2, 3, 5)]
        [TestCase(-1, 1, 0)]
        [TestCase(0, 0, 0)]
        [TestCase(10.5, 2.5, 13.0)]
        public void Addition_VariousInputs_ReturnsExpectedResult(double a, double b, double expected)
        {
            // Act
            double actual = calculator.Addition(a, b);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void Division_ByZero_ThrowsArgumentException()
        {
            // Arrange
            double a = 10.0;
            double b = 0.0;

            // Act & Assert
            Assert.Throws<ArgumentException>(() => calculator.Division(a, b));
        }

        [Test]
        public void AllClear_ResetsResult_ToZero()
        {
            // Arrange
            calculator.Addition(5, 3); // Perform an operation first

            // Act
            calculator.AllClear();

            // Assert
            Assert.That(calculator.GetResult, Is.EqualTo(0));
        }

        [Test]
        public void GetResult_AfterAddition_ReturnsCorrectValue()
        {
            // Arrange
            double a = 7.0;
            double b = 3.0;
            double expected = 10.0;

            // Act
            calculator.Addition(a, b);

            // Assert
            Assert.That(calculator.GetResult, Is.EqualTo(expected));
        }
    }
}


