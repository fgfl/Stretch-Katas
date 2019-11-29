/*
Date: Oct 19, 2019
Name: Frederick

The taxi driver is given a list of directions that tell her whether to turn left or right,
and how many blocks to drive for. Every time the taxi driver has to turn left,
she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].

Create a function named blocksAway that will receive an array of directions,
and return an object that calculates how far north and east those directions will take someone.

The taxi driver will always start at the same position, in the most south west position on the grid.
This means that the output will only need to specify an east and north position, since the taxi driver can only end up in these East and North of the starting point.
*/

/* Takes an initial direction and returns the new direction after turning
initialDirection: string with direction ('north', 'east', 'south', 'west')
turnDirection: string with the direction to turn ('right', 'left')
*/
function turn(initialDirection, turnDirection) {
  const NEWS = ['north', 'east', 'south', 'west'];
  let i = NEWS.indexOf(initialDirection);

  if(turnDirection === 'right') {
    i = (i + 1) % NEWS.length;
  } else if(turnDirection === 'left') {
    i = (i - 1) < 0 ? (i - 1 + NEWS.length) : (i - 1);
  }
  return NEWS[i];
}

/* Calculates how many blocks east and north the taxi driver is from the origin
directions: array of string and numbers, specifying directions
return: object {east: m, north: n}. m and n are the number of block east and north of the origin
*/
const blocksAway = function(directions) {
  // Put your solution here
  // - pop two values at a time [string, number], update position, stop if no more directions
  // - calculate displacement
  let displacement = {
    east: 0,
    north: 0
  };
  let facingDirection;
  let [direction, numBlocks] = directions.splice(0,2);

  // initial starting direction
  if(direction === 'right') {
    facingDirection = 'east';
  } else if(direction === 'left') {
    facingDirection = 'north';
  }
  displacement[facingDirection] += numBlocks;

  while(directions.length !== 0) {
    [direction, numBlocks] = directions.splice(0, 2);
    facingDirection = turn(facingDirection, direction);

    switch(facingDirection) {
      case 'north':
      case 'east':
        displacement[facingDirection] += numBlocks;
        break;
      case 'south':
        displacement.north -= numBlocks;
        break;
      case 'west':
        displacement.east -= numBlocks;
    }
  }

  return displacement;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/* Output
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/