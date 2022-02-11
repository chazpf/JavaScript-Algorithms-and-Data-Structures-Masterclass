function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

function merge(arr1, arr2) {
  const sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

// console.log(mergeSort([35,78,32,57,90,12]));

const test = Array.from({length: 100000}, () => Math.random())

console.log(mergeSort(test));
