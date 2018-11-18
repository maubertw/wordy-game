import React, { Component } from 'react';
// import Board from './board'
// import Rack from './rack'
// import ScoreBoard from './score-board'
import {ScoreBoard, Rack, Board} from './'

const p1 = {
  name: 'Mary W',
  score: 157
}

const p2 = {
  name: 'Jan G',
  score: 75
}


class Game extends Component {
  render() {
    return (
      <div className="game">
      <ScoreBoard player1={p1} player2={p2}/>
      <Board/>
      <Rack/>
      </div>
    );
  }
}

export default Game;
