/*
Date: Oct 16, 2019
Name: Frederick

Queen Threat Detector
In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array).
For this exercise, our chess board will have 2 queens, and nothing else.
A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

e.g.
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]

- Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
- Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

/* Create a chess board with the two queen
whiteQueenPos: array with two coordinates [row, col] of the white queen position
blackQueenPos: array with two coordinates [row, col] of the black queen position
return: array of arrays representing chess board. 0 = empty square. 1 = queen
*/
function generateBoard(whiteQueenPos, blackQueenPos) {
  const chessBoardSize = 8;
  let board = Array(chessBoardSize);
  // board.fill([0,0,0,0,0,0,0,0]); <<< This causes all rows to be the same?
  // passing object into fill() passes a reference instead!! Last line in description https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  for(let i = 0; i < board.length; i++) {
    board[i] = [0,0,0,0,0,0,0,0];
  }
  board[whiteQueenPos[0]][whiteQueenPos[1]] = 1;
  board[blackQueenPos[0]][blackQueenPos[1]] = 1;

  return board;
}

/* Detect whether two queens can capture each other
board: chess board generated from the generateBoard() function
return: true of false if queen can capture each other
*/
function queenThreat(board) {
  /* extract two queen pos, then do check
    - same row: whiteQueenPos[0] =  blackQueenPos[0]
    - same col: whiteQueenPos[1] =  blackQueenPos[1]
    - diagonal?: slope between the two pieces === 1 or -1
  */
  const queenPiece = 1;
  let queensPosArray = [];
  let whiteQueenPos = Array(2);
  let blackQueenPos = Array(2);

  for(let [rowNumber, boardRow] of board.entries()) {
    if(boardRow.includes(queenPiece)) {
      queensPosArray.push(rowNumber);
      queensPosArray.push(boardRow.indexOf(queenPiece));

      // search the remainder of the line in case two queens are on the same row
      if(boardRow.lastIndexOf(queenPiece) !== queensPosArray[queensPosArray.length - 1]) {
        queensPosArray.push(rowNumber);
        queensPosArray.push(boardRow.lastIndexOf(queenPiece));
      }

      // stop searching if we have the two pieces
      if(queensPosArray.length == 4) {
        break;
      }
    }
  }
  whiteQueenPos = queensPosArray.slice(0,2);
  blackQueenPos = queensPosArray.slice(2,4);

  if(isSameRow(whiteQueenPos, blackQueenPos) ||
    isSameCol(whiteQueenPos, blackQueenPos) || 
    isDiagonal(whiteQueenPos, blackQueenPos)) {
      return true;
  } else {
    return false;
  }
}

// returns true if queens are on the same row. Fasl otherwise
function isSameRow(whiteQueenPos, blackQueenPos) {
  return whiteQueenPos[0] === blackQueenPos[0];
}

// returns true if queens are on the same column. False otherwise
function isSameCol(whiteQueenPos, blackQueenPos) {
  return whiteQueenPos[1] === blackQueenPos[1];
}

// return true if queens are in diagonal with each other. False otherwise
function isDiagonal(whiteQueenPos, blackQueenPos) {
  let m = (blackQueenPos[1] - whiteQueenPos[1]) /
    (blackQueenPos[0] - whiteQueenPos[0]);
  return (m === 1) || (m === -1);
}


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
//let blackQueen = [2, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/