// early board design
// console.log("|-----------|");
// console.log("| 1 | 2 | 3 |");
// console.log("|-----------|");
// console.log("| 4 | 5 | 6 |");
// console.log("|-----------|");
// console.log("| 7 | 8 | 9 |");
// console.log("|-----------|");

// console.log("|-----------|");
// console.log("| X | O | X |");
// console.log("|-----------|");
// console.log("| X | O | O |");
// console.log("|-----------|");
// console.log("| O | X | X |");
// console.log("|-----------|");

//new board design
// console.log(" 1 | 2 | 3 ");
// console.log("-----------");
// console.log(" 4 | 5 | 6 ");
// console.log("-----------");
// console.log(" 7 | 8 | 9 ");

// console.log(" O | X | O ");
// console.log("-----------");
// console.log(" X | X | O ");
// console.log("-----------");
// console.log(" X | O | X ");

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class TicTacToe {
  constructor() {
    this.board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    this.currentPiece = 'X';
    this.movesLeft = 9;
  }
  displayBoard() {
    console.log(
      ' ' + this.board[0][0] + ' | ' + this.board[0][1] + ' | ' + this.board[0][2] +
      ' \n----------\n' +
      ' ' + this.board[1][0] + ' | ' + this.board[1][1] + ' | ' + this.board[1][2] +
      ' \n----------\n' +
      ' ' + this.board[2][0] + ' | ' + this.board[2][1] + ' | ' + this.board[2][2]
     );
  }

}


// rl.question('Do you want to play Tic Tac Toe? [Yes or No] ', (answer) => {
//   if (answer.toLowerCase() === 'yes' ) {
//     var game = new TicTacToe();
//     if (game.movesLeft > 0) {
//       game.displayBoard();
//       num = rl.question('Pick a number? ');
//       console.log(num);
//       // rl.question('Pick a number?', move => {
//       //   game.movesLeft--;
//       //   if (num < 4) {
//       //     game.board[0][move] = 'X';
//       //   } else if (num < 7) {
//       //     game.board[0][move-3] = 'X';
//       //   } else if (num < 10) {
//       //     game.board[0][move-6] = 'X';          
//       //   }
//       // rl.close();
//       // });
//     }

//   }
//   rl.close();
// });

var game = new TicTacToe();
game.displayBoard();
console.log(game.currentPiece, " Pick a Number: ")
rl.on('line', function(move) {

  if (move < 4) {
    game.board[0][move-1] = game.currentPiece;
  } else if (move < 7) {
    game.board[1][move-4] = game.currentPiece;
  } else if (move < 10) {
    game.board[2][move-7] = game.currentPiece;          
  }
  game.movesLeft--;
  game.displayBoard();
  if (game.movesLeft === 0) {
    rl.close();
  }
  game.currentPiece === 'X' ? game.currentPiece = 'O' : game.currentPiece = 'X';
  console.log(game.currentPiece, " Pick a Number: ")
})

