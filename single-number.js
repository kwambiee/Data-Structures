
function singleNumber(nums){
let count = 0;
for (i = 0; i < nums.length; ++i) {
    let occurence = nums.filter((value) => (value === nums[i])).length;
    if (occurence == 1){
        console.log(nums[i], "nums[i]")
        return nums[i]
    }
}       
};

// singleNumber([2, 2, 1])
singleNumber([4, 1, 2, 1, 2])