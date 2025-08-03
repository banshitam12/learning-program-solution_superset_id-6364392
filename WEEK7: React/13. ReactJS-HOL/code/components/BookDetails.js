import React, { useState } from 'react';

const BookDetails = () => {
  const [books] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      rating: 4.5,
      description: "A classic American novel set in the Jazz Age."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      rating: 4.8,
      description: "A story of moral courage in the American South."
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      year: 1949,
      rating: 4.7,
      description: "A dystopian social science fiction novel."
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="component-container book-details">
      <h2>📚 Book Details</h2>
      
      {/* Conditional rendering example 1: Toggle visibility */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Book List
      </button>

      {/* Conditional rendering using logical AND */}
      {showDetails && (
        <div className="book-list">
          <h3>Available Books:</h3>
          {books.map(book => (
            <div 
              key={book.id} 
              className={`book-item ${selectedBook?.id === book.id ? 'selected' : ''}`}
              onClick={() => setSelectedBook(book)}
            >
              <h4>{book.title}</h4>
              <p>By: {book.author} ({book.year})</p>
              <p>Rating: {book.rating}/5 ⭐</p>
            </div>
          ))}
        </div>
      )}

      {/* Conditional rendering using ternary operator */}
      <div className="book-details-section">
        {selectedBook ? (
          <div className="selected-book">
            <h3>Selected Book Details:</h3>
            <div className="book-detail-card">
              <h4>{selectedBook.title}</h4>
              <p><strong>Author:</strong> {selectedBook.author}</p>
              <p><strong>Genre:</strong> {selectedBook.genre}</p>
              <p><strong>Year:</strong> {selectedBook.year}</p>
              <p><strong>Rating:</strong> {selectedBook.rating}/5 ⭐</p>
              <p><strong>Description:</strong> {selectedBook.description}</p>
            </div>
          </div>
        ) : (
          <div className="no-selection">
            <p>Click on a book to see its details</p>
          </div>
        )}
      </div>

      {/* Conditional rendering with multiple conditions */}
      {selectedBook && selectedBook.rating >= 4.5 && (
        <div className="recommendation">
          <h4>🏆 Highly Recommended!</h4>
          <p>This book has an excellent rating!</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;