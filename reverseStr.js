// Write a function that takes a string
//as input and returns a new string with the characters reversed.

str = "käännä toisin päin";
function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse(str));
