// Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Initialize the component with a list of Post in state
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  // Method to load posts using Fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        // Convert data to Post objects and assign to component state
        const posts = data.slice(0, 10).map(post => 
          new Post(post.id, post.title, post.body, post.userId)
        );
        this.setState({ 
          posts: posts,
          loading: false 
        });
      })
      .catch(error => {
        this.setState({ 
          error: error.message,
          loading: false 
        });
      });
  }

  // componentDidMount() hook - makes calls to loadPosts()
  componentDidMount() {
    console.log('Component mounted - calling loadPosts()');
    this.loadPosts();
  }

  // componentDidCatch() hook - displays errors as alert messages
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by componentDidCatch:', error, errorInfo);
    alert(`An error occurred: ${error.message}`);
    this.setState({ error: error.message });
  }

  // render() method - displays title and body of posts
  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Loading posts...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Error: {error}</h2>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
          Blog Posts
        </h1>
        {posts.map(post => (
          <div key={post.id} style={{ 
            marginBottom: '30px', 
            padding: '20px', 
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            {/* Display title as heading */}
            <h3 style={{ 
              color: '#2c3e50', 
              marginBottom: '10px',
              textTransform: 'capitalize'
            }}>
              {post.title}
            </h3>
            {/* Display body as paragraph */}
            <p style={{ 
              lineHeight: '1.6', 
              color: '#555',
              fontSize: '14px'
            }}>
              {post.body}
            </p>
            <small style={{ color: '#888' }}>
              Post ID: {post.id} | User ID: {post.userId}
            </small>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;