function minSubArrayLen(arr, num) {
  let count = 0;
  let minLen = 0;
  let highestIndexChecked = 0;
  for (; highestIndexChecked < arr.length; highestIndexChecked++) {
    count += arr[highestIndexChecked];
    if (count >= num) {
      minLen = highestIndexChecked + 1;
      break;
    }
  }
  let tempLen = minLen;
  while (highestIndexChecked < arr.length) {
    if (count >= num && tempLen === minLen) {
      tempLen--;
      count -= arr[highestIndexChecked - (tempLen)]
      if (count >= num) {
        minLen = tempLen;
      }
    } else {
      tempLen++;
      highestIndexChecked++;
      count += arr[highestIndexChecked] || 0;
    }
  }

  return minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
