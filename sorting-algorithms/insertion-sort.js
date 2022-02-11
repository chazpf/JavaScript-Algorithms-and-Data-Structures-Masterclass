function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > val) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = val;
  }
  return arr;
}

console.log(insertionSort([35,78,32,57,90,12]));
