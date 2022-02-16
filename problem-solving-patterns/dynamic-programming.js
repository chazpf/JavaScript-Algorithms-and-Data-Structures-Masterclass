const fibMemoization = (n) => {
  return (function fibHelper(num, memo = { 1:1, 2:1 }) {
    if (memo[num] !== undefined) return memo[num];
    const res = fibHelper(num - 1, memo) + fibHelper(num - 2, memo);
    memo[num] = res;
    return memo[num]
  })(n)
}
console.log(fibMemoization(100));

const fibTabulation = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0,1,1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}
// console.log(fibTabulation(10000));
