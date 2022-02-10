function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

function pivotHelper(arr, startIndex = 0, endIndex = arr.length - 1) {
  let randomIndex = startIndex + Math.floor(Math.random() * (endIndex - startIndex));
  [arr[startIndex], arr[randomIndex]] = [arr[randomIndex], arr[startIndex]];
  let pivot = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex+1; i < endIndex+1; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[startIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[startIndex]];
  return pivotIndex;
}

// console.log(quickSort([35,78,32,57,90,12]));

const test = Array.from({length: 100000}, () => Math.random())

console.log(quickSort(test));
console.log(quickSort(test));
