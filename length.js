// Write a function that takes a string as
// input and returns the length of the longest word in the string.

// function lengthOfLongest(str) {
//   if (!str) {
//     return "";
//   }

//   let strArray = str.split(" ");
//   let pisin = strArray[0];
//   for (let i = 1; i < strArray.length; i++) {
//     if (pisin.length < strArray[i].length) {
//       pisin = strArray[i];
//     }
//   }
//   return pisin.length;
// }

//refactored using reduce
function longestWord(str) {
  return str.split(/\s+/).reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
}

let string = "moi mitä kuuluu";
let stringx = "kuuluisa moi mitä kuuluu";
let stringr = "";
console.log(lengthOfLongest(string));
console.log(lengthOfLongest(stringx));
console.log(lengthOfLongest(stringr));
