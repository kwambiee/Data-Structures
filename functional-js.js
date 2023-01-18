// Given a list of integers, write a function filterEvenNumbers that removes all the odd numbers from the list and return only the even numbers.

function filterEvenNumbers(array) {
  // filter - pure function, creates a new array with values that have passsed the test.
  return array.filter((x) => x % 2 === 0);
}

console.log(filterEvenNumbers([1, 6, 5, 8, 0]));
