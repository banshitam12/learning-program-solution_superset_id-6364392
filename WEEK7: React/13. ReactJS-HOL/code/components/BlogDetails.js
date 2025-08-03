import React, { useState } from 'react';

const BlogDetails = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      category: "Technology",
      date: "2024-01-15",
      content: "React is a powerful JavaScript library for building user interfaces...",
      likes: 45,
      comments: 12,
      published: true
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      author: "Jane Smith",
      category: "Programming",
      date: "2024-01-10",
      content: "Closures are a fundamental concept in JavaScript that every developer should understand...",
      likes: 32,
      comments: 8,
      published: true
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      author: "Mike Johnson",
      category: "Design",
      date: "2024-01-20",
      content: "When to use CSS Grid and when to use Flexbox for your layouts...",
      likes: 28,
      comments: 5,
      published: false
    }
  ]);

  const [filterCategory, setFilterCategory] = useState('all');
  const [showUnpublished, setShowUnpublished] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Filter blogs based on category and published status
  const getFilteredBlogs = () => {
    return blogs.filter(blog => {
      const categoryMatch = filterCategory === 'all' || blog.category === filterCategory;
      const publishedMatch = showUnpublished || blog.published;
      return categoryMatch && publishedMatch;
    });
  };

  const categories = ['all', 'Technology', 'Programming', 'Design'];

  return (
    <div className="component-container blog-details">
      <h2>📝 Blog Details</h2>
      
      {/* Filter controls */}
      <div className="filter-controls">
        <div>
          <label>Filter by Category: </label>
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={showUnpublished}
              onChange={(e) => setShowUnpublished(e.target.checked)}
            />
            Show Unpublished Posts
          </label>
        </div>
      </div>

      {/* Conditional rendering with multiple conditions */}
      <div className="blog-list">
        {getFilteredBlogs().length > 0 ? (
          getFilteredBlogs().map(blog => (
            <div 
              key={blog.id} 
              className={`blog-item ${!blog.published ? 'unpublished' : ''}`}
              onClick={() => setSelectedBlog(blog)}
            >
              <h4>
                {blog.title}
                {/* Conditional rendering for status badge */}
                {!blog.published && <span className="status-badge">Draft</span>}
              </h4>
              <p className="blog-meta">
                By: {blog.author} | Category: {blog.category} | Date: {blog.date}
              </p>
              <p className="blog-stats">
                👍 {blog.likes} likes | 💬 {blog.comments} comments
              </p>
              
              {/* Conditional rendering based on popularity */}
              {blog.likes > 30 && (
                <div className="popular-badge">🔥 Popular Post</div>
              )}
            </div>
          ))
        ) : (
          // Conditional rendering when no blogs match filters
          <div className="no-blogs">
            <p>No blogs found matching your criteria.</p>
            <button onClick={() => {
              setFilterCategory('all');
              setShowUnpublished(true);
            }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Conditional rendering for selected blog details */}
      {selectedBlog ? (
        <div className="selected-blog">
          <h3>Selected Blog:</h3>
          <div className="blog-detail-card">
            <h4>{selectedBlog.title}</h4>
            <p className="blog-meta">
              <strong>Author:</strong> {selectedBlog.author} | 
              <strong> Category:</strong> {selectedBlog.category} | 
              <strong> Date:</strong> {selectedBlog.date}
            </p>
            <p><strong>Content:</strong> {selectedBlog.content}</p>
            <div className="blog-stats">
              <span>👍 {selectedBlog.likes} likes</span>
              <span>💬 {selectedBlog.comments} comments</span>
              <span>
                Status: {selectedBlog.published ? 
                  <span className="published">✅ Published</span> : 
                  <span className="draft">📝 Draft</span>
                }
              </span>
            </div>
          </div>
          <button onClick={() => setSelectedBlog(null)}>Close Details</button>
        </div>
      ) : (
        <div className="no-selection">
          <p>Click on a blog post to see its details</p>
        </div>
      )}

      {/* Conditional rendering for statistics */}
      {getFilteredBlogs().length > 0 && (
        <div className="blog-statistics">
          <h4>Statistics:</h4>
          <p>Total Posts: {getFilteredBlogs().length}</p>
          <p>Published: {getFilteredBlogs().filter(b => b.published).length}</p>
          <p>Drafts: {getFilteredBlogs().filter(b => !b.published).length}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;