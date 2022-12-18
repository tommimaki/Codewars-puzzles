// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
function findNeedle(haystack) {
  let index = "needle";
  for (let i = 0; 0 < haystack.length; i++) {
    if (index == haystack[i]) {
      return "found the needle at position " + i;
    }
  }
}

console.log(findNeedle(haystack));
