// Write a function that takes an array of integers
//  and returns the sum of the even numbers in the array.

let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evens(x) {
//   let sum = 0;

//   for (let i = 0; i < x.length; i++) {
//     if (x[i] % 2 === 0) {
//       sum += x[i];
//     }
//   }
//   return sum;
// }

function evens(x) {
  return x.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

console.log(evens(y));
