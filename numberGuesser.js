/*
Date: Oct 21, 2019
Name: Frederick

Number Guesser

In this kata you'll be responsible for setting up your JS file from scratch.
Make sure it is well organized!

Write a guessing game where the user has to guess a secret number.
After every guess the program tells the user whether their number was too large or too small.
At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try.
If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/


/*guessingGame
  Runs a guessing game where the user inputs numbers to guess the randomly generated number
  The user is prompted for a number. 
  'Too Low!' is printed if the number is too low
  'Too High!' is printed if the nubmer is too high
  'Already Guessed!' is printed if the number was entered before
  'Not a number! Try again!' is printed if the entered string is not a number
  'You got it! You took %i attempts!' is printed if the number is guessed correctly.
    %i is the number of attempts taken
  min: smallest random number that can be generated 
  max: largest random number that can be genereated
*/
function guessingGame(min, max) {

  let prompt = require("prompt-sync")({sigint: true});

  // code below (replace this example)

  /*checkNumber
    checks if the number is higher or lower than the target number
    Adds the correct message the the messag queue to print out
    targetNumber: secret number user is guessing
    guessNumber: number inputted by user
    return: nothing
  */
  function checkNumber(targetNumber, guessNumber) {
    let check =  guessNumber - targetNumber;
    if(check < 0) {
      msgs.push('Too Low!');
    } else if(check > 0) {
      msgs.push('Too High!');
    } else {
      msgs.push('You got it! You took ' + tries + ' attempts!');
    }
    return;
  }

  /*isValidInteger
    checks whether the entered string is a valid integer 
    The blank string ('') or empty spaces ('  ') is invalid
    Adds error messages to the message queue if invalid
    string: entered string to check
    return: true if it is a valid int. False otherwise
  */
  function isValidInteger(input) {
    if(!(input.trim() === '') && (Number.isInteger(Number(input)))) {
      return true;
    } else {
      msgs.push('Not a number! Try again!');
      return false;
    }
  }

  /*isRepeat
    checks whether the inputted number is a repeat value
    Adds message to message queue if input is duplicate
    input: Number to check
    return: True if is a repeat. False otherwise
  */
function isRepeat(input) {
    if(guessedNumbers.indexOf(input) !== -1) {
      msgs.push('Already Guessed!');
      return true;
    } else {
      return false;
    }
  }

  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let tries = 0;
  let guessedNumbers = [];
  let msgs = []; // message queue to be printed out
  let answer;

  //// debug log
  //console.log(randNum);
  //console.log(Number(answer));

  console.log('Guess a number between ' + min + ' and ' + max);

  while(Number(answer) !== randNum) {
    answer = prompt('Guess a number: ');
    tries++;

    if(isValidInteger(answer) && !isRepeat(answer)) {
      guessedNumbers.push(answer);
      checkNumber(randNum, answer);
    } else {
      // non integers or repeats do not count to tries
      tries--;
    }

    // empty queue as you print
    console.log(msgs.splice(0).join('\n'));
  }

  return;
}

// Testing for isValidNumber()
// isValidInteger moved inside guessingGame. These tests no longer work
//console.log('isValidInteger(\'1\'): ' +
  //((isValidInteger('1') === true) ? 'pass' : 'fail'));
//console.log('isValidInteger(\'-1\'): ' +
  //((isValidInteger('-1') === true) ? 'pass' : 'fail'));
//console.log('isValidInteger(\'0\'): ' +
  //((isValidInteger('0') === true) ? 'pass' : 'fail'));
//console.log('isValidInteger(\'\'): ' +
  //((isValidInteger('') === false) ? 'pass' : 'fail'));
//console.log('isValidInteger(\'false\'): ' +
  //((isValidInteger('false') === false) ? 'pass' : 'fail'));
//console.log('isValidInteger(\'true\'): ' +
  //((isValidInteger('true') === false) ? 'pass' : 'fail'));

guessingGame(0, 20);

//Guess a number:
//> 12
//Too Low!
//Guess a number:
//> 65
//Too High!
//Guess a number:
//> 65
//Already Guessed!
//Guess a number:
//> asdf
//Not a number! Try again!
//Guess a number:
//> 42
//You got it! You took 3 attempts!
