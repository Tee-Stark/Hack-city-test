// TEST FIVE
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums

const runningSum = (nums) => {
  let sum = 0;
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    answer.push(sum);
  }

  return answer;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([3, 1, 2, 10, 1]));
console.log(runningSum([1, 1, 1, 1, 1]));
