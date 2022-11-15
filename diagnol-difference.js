/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */


function diagonalDifference(arr){
  // Write your code here
  let leftDiag = 0;
  let rightDiag = 0;
  let result = 0;
  for(let i=0; i<arr.length; i++){
    leftDiag += arr[i][i];
    rightDiag += arr[i][arr.length-1-i];
  }
  result = leftDiag - rightDiag;
  return Math.abs(result);


}


