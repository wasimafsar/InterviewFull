hoisting(x, y); // can access x and y even though they are declared later since they are added to global scope
var x = 10;
var y = 10;
function hoisting(x, y) {
  console.log(x, y);
}
// Code execution there are 2 phases :
// memory phase and execution phase . In memory phase the memory is alloted to variables
// even functions are alloted memory .I n execution phase actual assignment of value happens since in memory phase the memory is alloted we can accees those variables and functions .
