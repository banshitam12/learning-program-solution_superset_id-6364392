import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      
      this.setState({
        user: data.results[0],
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!user) {
      return <div>No user data available</div>;
    }

    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Random User Information</h2>
        <div>
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            style={{ 
              borderRadius: '50%', 
              width: '150px', 
              height: '150px',
              marginBottom: '20px'
            }}
          />
          <h3>
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      </div>
    );
  }
}

export default Getuser;