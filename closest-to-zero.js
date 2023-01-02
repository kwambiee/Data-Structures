// The function closestToZero() takes an array of integers as a parameter and returns the value closest to zero.
// If there are two values that are equally close to zero, the function returns the positive value.
// If the array is empty, the function returns zero.

function closestToZero(arr){
  // 1. sort the array in ascending order.By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.The sort() method casts elements to strings and compares the strings to determine the orders.
  // Example input: arr = [0, 1 , 2, 3, 10, 20, 30], arr.sort() = [0, 1, 10, 2, 20, 3, 30]
  // To fix this, you need a compare function that takes accepts two arguments and returns a value that determines the sort order. i.r arr.sort(comparefunction(a,b)).It will compare which value that is a or b and start with the lowest.
  arr.sort((a, b) => a - b);
  // 2. Find the index of the first positive value in the sorted array.findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
  let firstPositiveIndex = arr.findIndex((value) => value > 0);
    // 3. if the firstPositiveIndex is greater than zero, the value closest to zero is either the value at that index or the value at the index before it.
    if (firstPositiveIndex > 0) {
        let indexBefore = arr[firstPositiveIndex - 1];
        let firstIndex = arr[firstPositiveIndex];
        // 4. If the value at the index before is closer to zero than the value at the index, return the value at the index before.
        if(Math.abs(firstIndex) < Math.abs(indexBefore)){
            return firstIndex;
        } else if(Math.abs(firstIndex) > Math.abs(indexBefore)){
            return indexBefore;
        } else {
            return firstIndex;
        }
    }
    // 5. If the firstPositiveIndex is zero or less, the value closest to zero is the first value in the sorted array.
    return arr[0];
}

const arr = [1, -1, 2, -2, 3, 0, 4, -4];
console.log(closestToZero(arr));
