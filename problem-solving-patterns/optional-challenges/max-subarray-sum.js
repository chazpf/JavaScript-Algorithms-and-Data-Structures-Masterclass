function maxSubarraySum(arr, length) {
  if (arr.length < length) return null;
  let maxSum = 0;
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let j = length; j < arr.length; j++) {
    tempSum -= arr[j - length];
    tempSum += arr[j];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));
