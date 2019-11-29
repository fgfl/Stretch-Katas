/*
We will receive a normal string of words separated with spaces as the input.
Our job is to convert these strings into camel cased strings.
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

let camelCase = function(input) {
  // Your code here
  let camelString = '';

  for(let i = 0; i < input.length; i++) {
    if(input[i] === ' ') {
      input = input.slice(0, i) + input[i + 1].toUpperCase() + input.slice(i + 2);
      i--; // check the same index after removing the space
    }
  }
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("this is a string") === 'thisIsAString');
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("loopy lighthouse") === 'loopyLighthouse');
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("supercalifragalisticexpialidocious") === 'supercalifragalisticexpialidocious');
console.log(camelCase('this is a  double  space'));
console.log(camelCase('this is a  double  space') === 'thisIsADoubleSpace');