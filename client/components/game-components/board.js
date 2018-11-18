import React, { Component } from 'react';
import Square from './square'
// import { DropTarget } from 'react-dnd'



// const Types = {
//  ITEM: 'tile'
// }


// function collect(connect, monitor) {
//   return {
//   connectDropTarget: connect.dropTarget()
//   }
//  }



class Board extends Component {
  render() {
    // const { connectDropTarget } = this.props
    const rows = new Array(15).fill(null)
    const col = new Array(15).fill(null)
    // return connectDropTarget(
      return(
      <div className='board'>
      {
        rows.map((row, i) => {
          return <div className='row'>
          {
            col.map((col, j) => {
              return <Square key={i.toString() + j.toString()} id={[i, j]} />
            })
          }
          </div>
        })
      }
      </div>
    );
  }
}

// export default DropTarget(Types.ITEM, {}, collect)(Board)
export default Board
