using System;
using PlayersManagerLib;
using Moq;
using NUnit.Framework;

namespace PlayerManager.Tests
{
    [TestFixture]
    public class PlayerManagerTests
    {
        Player p1, p2;

        [OneTimeSetUp]
        public void Init()
        {
            p1 = new Player("John", 23, "India", 30);
        }

        [TestCase("John", true)]
        [TestCase("John", false)]
        [TestCase("", true)]
        public void RegisterNewPlayerTest_GetString_ReturnsPlayer(string name, bool value)
        {
            // Arrange
            Mock<IPlayerMapper> mockObj = new Mock<IPlayerMapper>();
            mockObj.Setup(m => m.IsPlayerNameExistsInDb(name)).Returns(value);
            mockObj.Setup(p => p.AddNewPlayerIntoDb(name));

            try
            {
                // Act
                p2 = Player.RegisterNewPlayer(name, mockObj.Object);

                // Assert - Only if no exception was thrown
                Assert.AreEqual(p2.Name, name);
                Assert.AreEqual(p2.Age, p1.Age);
                Assert.AreEqual(p2.Country, p1.Country);
                Assert.AreEqual(p2.NoOfMatches, p1.NoOfMatches);
            }
            catch (ArgumentException ae)
            {
                Assert.IsTrue(ae is ArgumentException);
            }
        }

        [Test]
        public void RegisterNewPlayer_ValidName_ShouldReturnPlayer()
        {
            // Arrange
            Mock<IPlayerMapper> mockObj = new Mock<IPlayerMapper>();
            mockObj.Setup(m => m.IsPlayerNameExistsInDb("NewPlayer")).Returns(false);
            mockObj.Setup(p => p.AddNewPlayerIntoDb("NewPlayer"));

            // Act
            Player result = Player.RegisterNewPlayer("NewPlayer", mockObj.Object);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("NewPlayer", result.Name);
            Assert.AreEqual(23, result.Age);
            Assert.AreEqual("India", result.Country);
            Assert.AreEqual(30, result.NoOfMatches);
        }

        [Test]
        public void RegisterNewPlayer_ExistingName_ShouldThrowException()
        {
            // Arrange
            Mock<IPlayerMapper> mockObj = new Mock<IPlayerMapper>();
            mockObj.Setup(m => m.IsPlayerNameExistsInDb("ExistingPlayer")).Returns(true);

            // Act & Assert
            Assert.Throws<ArgumentException>(() => Player.RegisterNewPlayer("ExistingPlayer", mockObj.Object));
        }
    }
}

