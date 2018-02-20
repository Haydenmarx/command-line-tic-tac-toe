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

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

displayBoard = () => {
  console.log(
   ' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] +
   ' \n----------\n' +
   ' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] +
   ' \n----------\n' +
   ' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2]
  );
}

displayBoard();