exports.twoSum = function(nums, target) {
  let result = 0;

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j];

      result = num1 + num2;

      if (i === j && nums[i] === nums[j]) {
        continue;
      }

      if (result === target) {
        return [i, j];
      }
    }
  }
};
