// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];
var callback = function(fruit) {
  return `Mmmm, ${fruit}!!!`;
};

function doToElementsInArray(fruit) {
  let fruitArr = []
  fruits.forEach(fruit => {fruitArr.push(`Mmmm, ${fruit}!!!`)})
  return fruitArr
  }

// Add your changeCompletely() function here:
