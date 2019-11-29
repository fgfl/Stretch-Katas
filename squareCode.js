/*
Date: Oct 16, 2019
Name: Frederick

Square Code

In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle).
For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed,
so it is written into a rectangle with 7 rows and 8 columns.

ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots

The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))),
we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right.
For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseaoau

Create a function named squareCode that will receive a message,
and return the secret square code version of the message. 
*/

/*
Take message and strip spaces, put into array of strings with length of the square, then join back
up the characters from each array taking each character in order
message: string with message to encode
return: encoded message
*/
const squareCode = function(message) {
  // Put your solution here
  
  let unspacedMsg = message.replace(/\s/g, '');
  // squareSize will be the length of the columns. Msg length / col length = # of rows
  let squareSize = Math.ceil(Math.sqrt(unspacedMsg.length));
  let encodeArray = Array(squareSize);
  encodeArray.fill(''); // make sure array is filled with empty stings for concatenating
  
  // split into strings of squareSize lengths. Each subString is a row.
  // Below does the same as the for loop
  let subStringArray = unspacedMsg.match(new RegExp('.{1,' + squareSize + '}', 'g'));  
  /*
  for(let i = 0; i < encodeString.length / squareSize; i++) {
    encodeArray[i] = encodeString.slice(i * squareSize, (i + 1) * squareSize);
  }
  */
  
  // further split each subString into single characters and separate into the indices
  // of our encoded message. Essentially reading the columns of our unencoded msg.
  subStringArray.forEach(function(subString) {
    let charArray = subString.match(/./g);
    for(let i = 0; i < charArray.length; i++) {
      encodeArray[i] += charArray[i];
    } 
  });

  return encodeArray.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("chill out") === 'clu hlt io');
console.log(squareCode("feed the dog"));
console.log(squareCode("feed the dog") === 'fto ehg ee dd');
console.log(squareCode("have a nice day"));
console.log(squareCode("have a nice day") === 'hae and via ecy');
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots") ===
  'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau');
