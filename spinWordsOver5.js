// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter
// words reversed (Just like the name of this Kata). Strings passed
//  in will consist of only letters and spaces. Spaces will be included
//   only when more than one word is present.

// my idea to solve this is to split the words in to an array, loop trough that array, if word.length >= 5 , reverse it.
function spinWords(string) {
  let ar = string.split(" ");
  let ansAr = [];
  // this takes words longer than 5 chars, reverses and pushes the word to main ansArray
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].length >= 5) {
      let str = ar[i].split("").reverse().join("");
      ansAr.push(str);
    } else {  //this pushes all words under 5 straight to ansArray
      ansAr.push(ar[i]);
    }
  }

  let ansString = ansAr.join(" ");
  console.log(ansString);
}

spinWords("moi mitä sinulle kuuluu petteri");
