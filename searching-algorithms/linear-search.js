function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(indexOf([2,6,8,3], 8));
console.log(indexOf([2,6,8,3], 99));
