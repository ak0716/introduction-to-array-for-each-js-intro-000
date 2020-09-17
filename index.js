// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];
const callback = function(fruit) {
  return `Mmmm, ${fruit}!!!`;
};

function doToElementsInArray(callback) {
  fruits.forEach(fruit => {
    return callback;
  })
}

// Add your changeCompletely() function here:
