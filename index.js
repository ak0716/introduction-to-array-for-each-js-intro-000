// Add your doToElementsInArray() function here:
var fruits = ['apple', 'banana', 'cherry'];
var callback = function(fruit) {
  return `Mmmm, ${fruit}!!!`;
};

function doToElementsInArray(fruits, callback) {
  let newArr = []
  fruits.forEach(fruit => {
    newArr.push(callback)
  })
  return newArr
}

// Add your changeCompletely() function here:
