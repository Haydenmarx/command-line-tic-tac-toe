var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class TicTacToe {
  constructor() {
    this.board = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    }
    this.currentPiece = 'X';
    this.movesLeft = 9;
  }
  displayBoard() {
    console.log(
      ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] +
      ' \n----------\n' +
      ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] +
      ' \n----------\n' +
      ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9]
     );
  }
  
  checkWinningMoves(num) {
    switch(num) {
      case '1':
        console.log(num);
        break;
      default:
        console.log(false);
    }
  }

}

var game = new TicTacToe();
game.displayBoard();
console.log(game.currentPiece, " Pick a Number: ")
rl.on('line', function(move) {
  if (game.board[move] !== Number(move)) {
    game.displayBoard();
    console.log("INVALID MOVE ", game.currentPiece);
  } else {
    game.checkWinningMoves(move);
    game.movesLeft--;
    game.board[move] = game.currentPiece;
    if (game.movesLeft === 0) {
      rl.close();
    }
    game.displayBoard();
    game.currentPiece === 'X' ? game.currentPiece = 'O' : game.currentPiece = 'X';
    console.log(game.currentPiece, " Pick a Number: ")
  }  
})

