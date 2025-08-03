import React from 'react';

const IndianPlayers = () => {
  // Team players array for destructuring
  const teamPlayers = [
    "Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan", 
    "Rishabh Pant", "Hardik Pandya", "Ravindra Jadeja", "Bhuvneshwar Kumar",
    "Jasprit Bumrah", "Yuzvendra Chahal"
  ];

  // Destructuring to get odd and even positioned players
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth] = teamPlayers;
  
  // Odd team players (1st, 3rd, 5th, 7th, 9th positions)
  const oddTeamPlayers = [first, third, fifth, seventh, ninth];
  
  // Even team players (2nd, 4th, 6th, 8th, 10th positions)
  const evenTeamPlayers = [second, fourth, sixth, eighth, tenth];

  // T20 players array
  const T20players = [
    "Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya", "Rishabh Pant"
  ];

  // Ranji Trophy players array
  const RanjiTrophyPlayers = [
    "Prithvi Shaw", "Shreyas Iyer", "Ajinkya Rahane", "Cheteshwar Pujara", "Hanuma Vihari"
  ];

  // Merge the two arrays using ES6 spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="indian-players">
      <div className="destructuring-section">
        <h3>Odd Team Players and Even Team Players (Using Destructuring)</h3>
        
        <div className="teams-display">
          <div className="odd-team">
            <h4>Odd Team Players:</h4>
            <div className="players-list">
              {oddTeamPlayers.map((player, index) => (
                <div key={index} className="player-item odd-player">
                  {player}
                </div>
              ))}
            </div>
          </div>
          
          <div className="even-team">
            <h4>Even Team Players:</h4>
            <div className="players-list">
              {evenTeamPlayers.map((player, index) => (
                <div key={index} className="player-item even-player">
                  {player}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="merge-section">
        <h3>Merged Arrays (Using Spread Operator)</h3>
        
        <div className="merged-display">
          <div className="array-info">
            <p><strong>T20 Players:</strong> {T20players.join(', ')}</p>
            <p><strong>Ranji Trophy Players:</strong> {RanjiTrophyPlayers.join(', ')}</p>
          </div>
          
          <div className="merged-result">
            <p><strong>Merged Players:</strong></p>
            <div className="merged-list">
              {mergedPlayers.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;