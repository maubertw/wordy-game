import letters from './letters'

//distribute letters function

const pickLetters = (arr) => {
  const min = Math.ceil(0)
  const max = Math.floor(arr.length-1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const fillRack = (bank, rack) => {
  while(rack.length < 7){
    rack.push(bank.splice(pickLetters(bank), 1))
  }
  return {rack, letters}
}



let initialState = {
  player1letters: fillRack(letters, []).rack,
  player2letters: fillRack(letters, []).rack,
  bank: letters
}



export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

