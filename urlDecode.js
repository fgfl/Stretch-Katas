/*
Name: Frederick Lee
Date: Oct 14, 2019

URL Encoded Strings

To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters.
For this assignment we will only focus on the following URL encoding rules:

  - %20 represents a space character.
  - Key-value pairs are represented using an = character: key=value
  - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

So the following URL encoded string:

  city=Vancouver&weather=lots%20of%20rain

Could be converted to the following JavaScript object:

  {
    city: "Vancouver",
    weather: "lots of rain"
  }

Create a function named urlDecode that will receive a URL encoded string,
and return the a JavaScript object that represents that data. 
*/

// decode the space character
// input: string with %20 as spaces
// return: string with %20 replaced with spaces
function decodeSpaces(input) {
  return input.replace(/%20/g, ' ');
}

// Decodes a URL string and converts it to a javascript object
// text: input URL
// return: javascript object representing the data in the input URL
const urlDecode = function(text) {
  // Put your solution here
  let urlObj = {};
  let keyValueStrings = text.split('&'); // multple key value pairs separated by '&'
  keyValueStrings.forEach(function(keyValuePair) {
    let [key, value] = keyValuePair.split('=');
    value = decodeSpaces(value);
    urlObj[key] = value;
  });

  return urlObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
