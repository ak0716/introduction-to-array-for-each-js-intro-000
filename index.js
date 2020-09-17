// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];

function doToElementsInArray(callback) {
  return callback(fruits)
}

function callback() {
  fruits.forEach(fruit => {
  return(`Mmmm, ${fruit}!`);
});
}

doToElementsInArray(callback)

// Add your changeCompletely() function here:
