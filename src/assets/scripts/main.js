/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

console.log('hola');

let turn = 0;
let board = [];

const btnPress = (e, pos) =>{
  turn++;
  const btn = e.target;
  const color = turn % 2 ? 'coral':'paleGreen';
  btn.style.backgroundColor = color;
  board[pos] = color;
  if (winnerCombination()){
    alert('Congratulations player ' + color + '! You win this roud!');
    board = [];
    turn = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = null;
    });
  } else if(empat()) {
    alert('There is a draw! Better luck next time.');
    board = [];
    turn = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = null;
    });
  }
}

const winnerCombination = () =>{
  if(board[0] == board[1] && board[0] == board[2] && board[0]){
    return true;
  } else if(board[3] == board[4] && board[3] == board[5] && board[3]){
    return true;
  } else if(board[6] == board[7] && board[6] == board[8] && board[6]){
    return true;
  } else if(board[0] == board[3] && board[0] == board[6] && board[0]){
    return true;
  } else if(board[1] == board[4] && board[1] == board[7] && board[1]){
    return true;
  } else if(board[2] == board[5] && board[2] == board[8] && board[2]){
    return true;
  } else if(board[0] == board[4] && board[0] == board[8] && board[0]){
    return true;
  } else if(board[2] == board[4] && board[2] == board[6] && board[2]){
    return true;
  }
  return false;
}

const empat = () =>{
  if(board.filter(element => element !== '').length == 9){
    return true;
  } return false;
}

document.querySelectorAll('.game button').forEach(
  (obj, i) => obj.addEventListener('click', (e) => btnPress(e,i)));