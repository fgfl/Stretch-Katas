/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values.
[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.
return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma.
If there is only one set of values then you should omit the comma.
*/

let repeatNumbers = function(data) {
  // Put your solution here
  let numberString = '';

  data.forEach(function(elm) {
    for(let i = 0; i < elm[1]; i++) {
      numberString += elm[0];
    }
    numberString += ',';
  });
  
  return numberString.slice(0, numberString.length - 1);
};

console.log(repeatNumbers([[1, 10]]));
// 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));
// 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// 10101010, 343434343434, 9292
console.log(repeatNumbers([[1,0], [5,2]]));
console.log(repeatNumbers([[1,0]]));