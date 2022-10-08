// Test One
// Using the while and/or if/else statements, write a program (calculator) that continuously inputs a number and then checks if the number is a prime or not.
// If the number is not a prime, “number”  is not a prime number. If it is prime, it says ‘number’ is a prime number.
// Assume that the only prime factors that exist are 2, 3, 5, and 7.

const checkPrime = (n) => {
  let prime = true;
  let i = 2;
  while (i < n) {
    if (n % i === 0) {
      prime = false;
      break;
    }
    i++;
  }
  return prime;
};

console.log(checkPrime(1));
