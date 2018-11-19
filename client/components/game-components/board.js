import React, { Component } from 'react';
import Square from './square'
import {connect} from 'react-redux'
import { placeLetterOnBoard } from '../../store/board'
import { clearCurrentLetter } from '../../store/letter-bank'
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
    //this will eventually be this.props.board
    const rows = new Array(15).fill(null)
    // return connectDropTarget(
      return(
      <div className='board'>
      {
        rows.map((row, i) => {
          //this will be mapping over the board state
          //it will have a letter display option, and a bonus class option
          return <div className='row'>
          {
            new Array(15).fill(null).map((col, j) => {
              return <Square key={`${i}${j}`} cords={[i, j]} />
            })
          }
          </div>
        })
      }
      </div>
    );
  }
}

//each one of these squares has to be represented by the board state
const mapState = (state) => {
  return {
    spaces: state.board,
  }
}

const mapDispatch = (dispatch) => {
  return {
    placeLetter: () => {},
    clearSelectedLetter: () => {},
  }
}

// export default DropTarget(Types.ITEM, {}, collect)(Board)
export default connect(mapState, mapDispatch)(Board)
