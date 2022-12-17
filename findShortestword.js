// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// my idea is to turn the string to array by split(" ") method, then sort array so smallest is first, and return the length of first index.
function findShort(s){
    let ar = s.split(" ").sort((a,b) => a.length - b.length);
    let ans = ar[0].length;
    return ans;
}

findShort('Pekka Pirkko pate make jussili');