import React from 'react';


const ScoreBoard = ({player1, player2}) => {
    return (
      <div className="score-board">
          <p>SCORE:</p>
          <p>{player1.name}: {player1.score}</p>
          <p>{player2.name}: {player2.score}</p>
      </div>
    );
  }


export default ScoreBoard;
