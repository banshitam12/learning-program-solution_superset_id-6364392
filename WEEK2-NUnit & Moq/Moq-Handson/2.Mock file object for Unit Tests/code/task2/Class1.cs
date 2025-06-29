using NUnit.Framework;
using Moq;
using MagicFilesLib;
using System.Collections.Generic;

[TestFixture]
public class DirectoryExplorerTests
{
    private readonly string _file1 = "file.txt";
    private readonly string _file2 = "file2.txt";
    private Mock<IDirectoryExplorer> _mockDirectoryExplorer;

    [OneTimeSetUp]
    public void Setup()
    {
        _mockDirectoryExplorer = new Mock<IDirectoryExplorer>();
    }

    [Test]
    public void GetFiles_ShouldReturnMockedFiles()
    {
        // Arrange
        var expectedFiles = new List<string> { _file1, _file2 };
        _mockDirectoryExplorer.Setup(x => x.GetFiles(It.IsAny<string>()))
                              .Returns(expectedFiles);

        // Act
        var result = _mockDirectoryExplorer.Object.GetFiles("C:\\TestPath");

        // Assert
        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.IsTrue(result.Contains(_file1));
        Assert.IsTrue(result.Contains(_file2));
    }
}

