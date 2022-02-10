function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) return middle;
    else arr[middle] < val ? left = middle + 1 : right = middle - 1;
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10));
