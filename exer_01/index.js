var twoSum = function(nums, target) {
  let result = 0;

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j++];

      result = num1 + num2;

      if (result === target && num1 !== num2) {
        return [--j, i];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
