/*
In this activity, we will be converting date strings like "2017/12/02",
into more English friendly date strings like December 2nd, 2017.

We will be given a date as a string (not a Date object).
The date will always be formatted as YYYY/MM/DD.
We will have to parse the given string and produce a human readable date.

*/

function numToHumanString(numAsString) {
  let retStr;
  switch(numAsString.slice(-1)) {
    case 1:
      retStr = String(Number(numAsString)) + 'st';
      break;
    case 2:
      retStr = String(Number(numAsString)) + 'nd';
      break;
    case 3:
      retStr = String(Number(numAsString)) + 'rd';
      break;
    default:
      retStr = String(Number(numAsString)) + 'th';
  }
  return retStr;
}

let talkingCalendar = function(date) {
  // Your code here
  let dateNumbers = date.split('\/');
  let returnStr = '';

  switch(dateNumbers[1]) {
    case '01':
      returnStr += 'January ';
      break;
    case '02':
      returnStr += 'February ';
      break;
    case '03':
      returnStr += 'March ';
      break;
    case '04':
      returnStr += 'April ';
      break;
    case '05':
      returnStr += 'May ';
      break;
    case '06':
      returnStr += 'June ';
      break;
    case '07':
      returnStr += 'July ';
      break;
    case '08':
      returnStr += 'August ';
      break;
    case '09':
      returnStr += 'September ';
      break;
    case '10':
      returnStr += 'October ';
      break;
    case '11':
      returnStr += 'November ';
      break;
    case '12':
      returnStr += 'December ';
      break;
  }

  returnStr += numToHumanString(dateNumbers[1]);
  returnStr += ', ' + dateNumbers[0];

  return returnStr;
};

console.log(talkingCalendar("2017/12/02"));
// December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));
// November 11th, 2007
console.log(talkingCalendar("1987/08/24"));
// August 24th, 1987