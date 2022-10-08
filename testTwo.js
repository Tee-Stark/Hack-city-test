// TEST TWO
//  You are given an m x n integer grid account where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.
//  A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const wealthCalc = (acct) => {
  let maxSum = 0;
  for (let i = 0; i < acct.length; i++) {
    let sum = 0;
    for (let j = 0; j < acct[i].length; j++) {
      sum += acct[i][j];
    }
    maxSum = Math.max(maxSum, sum);
    console.log(sum);
  }
  return maxSum;
};

console.log(
  wealthCalc([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  wealthCalc([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  wealthCalc([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
