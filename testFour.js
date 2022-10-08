// TEST FOUR
//  Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = (n) => {
  let arr = []; //new Array(n);

  for (let i = 1; i <= n; ++i) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(String(i));
    }
    // switch (i) {
    //     case i % 3  i %
    // }
  }

  return arr;
};

console.log(fizzBuzz(3));
console.log(fizzbuzz(15));
