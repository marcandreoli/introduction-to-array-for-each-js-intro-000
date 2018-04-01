// Add your doToElementsInArray() function here:
var evens = [1,2,3,4,5,6,7]

evens.forEach(n => {
  console.log(`${n} is great`)
});


evens.forEach((even, index, array) => {
  debugger;
  console.log(`${even} is not odd!`);
});

// Add your changeCompletely() function here:
