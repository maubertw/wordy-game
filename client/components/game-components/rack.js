import React, { Component } from 'react';
import Tile from './tile'


class Rack extends Component {
  render() {
    const letters = ['D', 'I', 'R', 'Y', 'J', 'E', 'N']
    return (
      <div className="rack">
        {
          letters.map(lttr => {
            return <Tile letter={lttr} id={lttr} />
          })
        }
      </div>
    );
  }
}

//connect this with player 1 letters
//

export default Rack;
