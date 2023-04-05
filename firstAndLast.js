// Write a function that takes an array of integers
//  and returns the sum of the first and last elements in the array.

function firstnlast(ar) {
  return ar[0] + ar[ar.length - 1];
}

let array = [7, 3, 4, 4, 10];
console.log(firstnlast(array));
