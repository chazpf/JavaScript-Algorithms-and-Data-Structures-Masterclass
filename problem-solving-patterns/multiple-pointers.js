// Creating pointers or values that correspond to an index or position and move toward the beginning, end or middle based on a certain condition.

// write a function called sumZero which accepts a sorted array of integers, returning the first pair where the sum is 0. Return an array of the two values that sum to zero, or undefined if a pair doesn't exist.

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));

// write function counterUniqueValues, which takes a sorted array, and counts the unique values in the array.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let lastSeenUniqueIndex = 0;
  let currentIndex = 0;
  let uniqueCount = 1;
  while (currentIndex < arr.length) {
    if (arr[currentIndex] !== arr[lastSeenUniqueIndex]) {
      uniqueCount++;
      lastSeenUniqueIndex = currentIndex;
    }
    currentIndex++;
  }
  return uniqueCount;
}

console.log(countUniqueValues([1,1,1,1,1,1,2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
