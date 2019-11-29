/*
In this exercise, we will be given a list of instructors and we will
create a single object to organize them based on their course.

Create a function named organizeInstructors that will receive an array of
instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function(instructors) {
  // Put your solution here
  let organizedInstructors = {};
  instructors.forEach(function(instructor) {
    // must create the first array when adding new properties
    if(!organizedInstructors[instructor.course]) { 
      organizedInstructors[instructor.course] = [instructor.name];
    } else {
      organizedInstructors[instructor.course].push(instructor.name);
    }
  });

  return organizedInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
/*
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
*/
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
/*
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/