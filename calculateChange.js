/*
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier.
Both of these numbers will be represented as whole numbers in cents.
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back.
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)
*/

const denominations = new Map([
  ["twentydollar", 2000],
  ["tendollar", 1000],
  ["fivedollar", 500],
  ["twodollars", 200],
  ["onedollar", 100],
  ["quarter", 25],
  ["dime", 10],
  ["nickel", 5],
  ["penny", 1]
]);

let calculateChange = function(total, cash) {
  // Your code here
  let change = {};
  let diff = cash - total;

  // add property to change object only if the change is >= the denominations
  for(const [key, value] of denominations) {
    if(Math.floor(diff / value) > 0) { 
      change[key] = Math.floor(diff / value);
      // use remaining change for next denomination
      diff = diff % value;
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
//{ twodollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));
//{ tendollar: 1, twodollar: 1, onedollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));
//{ twodollar: 2, quarter: 3, dime: 2, penny: 4 }
console.log(calculateChange(5000, 4000));