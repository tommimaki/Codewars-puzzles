function positiveSum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      ans += arr[i];
    }
  }
  return ans;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
