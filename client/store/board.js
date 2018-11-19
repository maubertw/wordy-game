// import axios from 'axios'

const ADD_LETTER = 'ADD_LETTER'

export const addLetter = (cords, letter) => {
  type: ADD_LETTER,
  cords,
  letter
}
//need to add functionality to add in the bonus value
const makeBoard = () => {
  let board = []
  for(let i = 0; i < 15; i++){
      let cols = []
    for(let j = 0; j < 15; j++){
      cols.push({cords: [i, j], bonus: false, letter: false})
    }
    board.push(cols)
  }
  return board
}

const initialState = makeBoard()


export default function (state = initialState, action) {
  // switch (action.type) {
  //   case ADD_LETTER: {
  //     const i = action.cords[0]
  //     const j = action.cords[1]
  //     return state[i].slice(j, 1, {cords: [i, j], bonus: false, letter: action.letter})



  //     return [...state, toReplace ] = {}]
  //   }
    //default:
       return state
  //}
}
