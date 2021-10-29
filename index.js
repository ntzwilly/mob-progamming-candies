function candies(n, arr) {
  let candies = arr.map(rank => 1);
  for (let i = 1; i <= n; i++) {
    if (arr[i] > arr[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((a, b) => a + b);
}

console.log(candies(6, [4, 6, 4, 5, 6, 2]));
console.log(candies(3, [1, 2, 2]));
console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));
console.log(candies(8, [2, 4, 3, 5, 2, 6, 4, 5]));
