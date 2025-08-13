import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // Initialize state with entrycount and exitcount
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // Method to handle entry (Login button)
  UpdateEntry = () => {
    this.setState({
      entrycount: this.state.entrycount + 1
    });
  }

  // Method to handle exit (Exit button)
  UpdateExit = () => {
    this.setState({
      exitcount: this.state.exitcount + 1
    });
  }

  render() {
    return (
      <div className="counter-container">
        <h2>Mall Entry/Exit Counter</h2>
        
        <div className="count-display">
          <p><strong>People Entered: {this.state.entrycount}</strong></p>
          <p><strong>People Exited: {this.state.exitcount}</strong></p>
        </div>

        <div className="buttons">
          <button 
            onClick={this.UpdateEntry}
            className="entry-btn"
          >
            Login (Entry)
          </button>
          
          <button 
            onClick={this.UpdateExit}
            className="exit-btn"
          >
            Exit
          </button>
        </div>

        <div className="current-count">
          <p>Current people in mall: {this.state.entrycount - this.state.exitcount}</p>
        </div>
      </div>
    );
  }
}

export default CountPeople;