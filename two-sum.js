const twoSum = (nums, target) => {

    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (numMap.has(difference)) {
            return [numMap.get(difference), i];
        }
        numMap.set(nums[i], i);
    }

};

twoSum([3, 2, 4], 6) 
