// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];

function doToElementsInArray(callback) {
  return fruits.forEach(fruit => {
    return `Mmmm, ${fruit}!`;
  })
}


doToElementsInArray(callback)

// Add your changeCompletely() function here:
