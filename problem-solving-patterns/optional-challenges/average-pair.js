function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right --;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5));
