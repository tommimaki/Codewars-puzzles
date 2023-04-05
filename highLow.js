// In this little assignment you are given a string of
//  space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

let numbers = "1 2 3 4 5";
let numbers2 = "4 3 -2 9 3 4 5";
let numbers3 = "4 2 32 2 3 5";

function highAndLow(numbers) {
  let numbersArray = numbers.split(" ");
  let lowest = Number(numbersArray[0]);
  let high = Number(numbersArray[0]);

  for (let i = 0; i < numbersArray.length; i++) {
    let num = Number(numbersArray[i]);
    if (high < num) {
      high = num;
    }
    if (lowest > num) {
      lowest = num;
    }
  }

  let answer = `${high} ${lowest}`;
  return answer;
}

// highAndLow(numbers2);
highAndLow(numbers);
console.log(highAndLow(numbers));
console.log(highAndLow(numbers2));
console.log(highAndLow(numbers3));
