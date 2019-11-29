/*
We will be given a number as our input data.
This number is the highest value of our multiplication table.
Our job is to generate a multiplication table for the values from 1 to the provided number.

Create a function named multiplicationTable that receives a number maxValue as
input and creates a square multiplication table where maxValue is the largest
value in the table.
*/

// Create 2D array and use Array.join() to make a string 
const multiplicationTable = function(maxValue) {
  // Your code here
  let table = Array(maxValue);
  
  for(let row = 1; row <= maxValue; row++) { // for all rows in table
    let rowTmp = Array(maxValue);
    for(let col = 1; col <= maxValue; col++) { // calc number for column
      rowTmp[col] = row * col;
    }
    table[row] = rowTmp.join(' ');
  }

  return table.join('\n');
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(0));
/*
1

1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25 

1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100

*/