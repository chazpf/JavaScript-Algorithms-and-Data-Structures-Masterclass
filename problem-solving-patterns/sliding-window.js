// This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes and a new window is created.

// write a function maxSubarraySum which accepts an array of intergers and a number called n. The function calculates the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i+j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));
