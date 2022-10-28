// find sum of two indices to match the sum, the second parameter in the function.
// It should return an array of two indices that match the sum.
// Example is: findSum([3,7,5,4,5], 10) should return [0,1] because 3+7 = 10, and 0 and 1 are the indices of 3 and 7.

function findSum(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        result.push(i, j);
      }
    }
  }
  return result;
}

console.log(findSum([3, 7, 5, 4, 5], 10));
