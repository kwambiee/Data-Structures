// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and  zeros: 1/6 = 0.166667.

function plusMinus(arr) {
  // find length of array
  let n = arr.length;
  // calculate positive, negative and zero counts
  let positive_count = 0;
  let negative_count = 0;
  let zero_count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive_count++;
    } else if (arr[i] < 0) {
      negative_count++;
    } else {
      zero_count++;
    }
  }

  console.log((positive_count / n).toFixed(6));
  console.log((negative_count / n).toFixed(6));
  console.log((zero_count / n).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);

// AI SUGGESTIONS IMPROVEMENTS

// function plusMinus(arr) {
//   const n = arr.length;
//   let positive = 0,
//     negative = 0,
//     zero = 0;

//   for (const num of arr) {
//     if (num > 0) positive++;
//     else if (num < 0) negative++;
//     else zero++;
//   }

//   console.log((positive / n).toFixed(6));
//   console.log((negative / n).toFixed(6));
//   console.log((zero / n).toFixed(6));
// }
