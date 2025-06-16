// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
    // if nums includes target return index else add the value to the array then sort and return the index
    let sorted = [];
    let indexing = 0;
    for (i = 0; i < nums.length; i++){
        if (nums[i] === target) {
            return i;
        } else if
            (nums[i] >= target) {
            return i;
        }
            
    }
    // if (!nums.includes(target)) {
    //    nums.push(target)
    //     sorted = nums.sort((a, b) => a - b);
    // } else {
    //     sorted = nums
    // }
    // let index = sorted.indexOf(target)
    // console.log("index ", index)

};

searchInsert([1, 3, 5, 6], 1) //2