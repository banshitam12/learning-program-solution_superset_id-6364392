import React from 'react';

const ListofPlayers = () => {
  // Array with 11 players and their scores using ES6 features
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 45 },
    { name: "Shikhar Dhawan", score: 78 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Hardik Pandya", score: 67 },
    { name: "Ravindra Jadeja", score: 38 },
    { name: "Bhuvneshwar Kumar", score: 25 },
    { name: "Jasprit Bumrah", score: 15 },
    { name: "Yuzvendra Chahal", score: 12 },
    { name: "Mohammed Shami", score: 8 }
  ];

  // Filter players with scores below 70 using arrow functions
  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div className="list-of-players">
      <div className="players-section">
        <h3>List of All Players with Scores (Using Map)</h3>
        <div className="players-list">
          {players.map((player, index) => (
            <div key={index} className="player-item">
              <span className="player-name">{player.name}</span>
              <span className="player-score">Score: {player.score}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="low-score-section">
        <h3>Players with Scores Below 70 (Using Arrow Functions)</h3>
        <div className="low-score-list">
          {lowScorePlayers.map((player, index) => (
            <div key={index} className="low-score-item">
              <span className="player-name">{player.name}</span>
              <span className="player-score">Score: {player.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofPlayers;