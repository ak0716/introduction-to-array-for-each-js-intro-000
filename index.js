// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];
var callback = function(fruit) {
  return `Mmmm, ${fruit}!!!`;
};

function doToElementsInArray(fruit) {
  let fruitArr = []
  fruits.forEach(
    fruitArr.push(`Mmmm, ${fruit}!!!`)
  })
}

// Add your changeCompletely() function here:
