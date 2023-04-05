// Write a function that takes an array of
// integers and returns the average of all the numbers in the array.

function avg(ar) {
  return (
    ar.reduce((sum, num) => {
      return sum + num;
    }, 0) / ar.length
  );
}

let x = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7];
console.log(avg(x));
