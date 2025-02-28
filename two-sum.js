const twoSum = function (nums, target) {

    let output = [];
    let difference;

    for (let i = 0; i <= nums.length; i++) {
        difference = target - nums[i];
        // exists in the array and is not the same element
        if (nums.includes(difference) && nums.indexOf(difference) !== i) {
            let index = nums.indexOf(difference)
            output.push(i, index);
            break;
        }      
    }

    return output.sort((a, b) => a - b)

};

twoSum([3, 2, 4], 6) 
