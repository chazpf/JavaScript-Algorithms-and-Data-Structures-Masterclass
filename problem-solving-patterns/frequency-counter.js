// This pattern uses objects or sets to collect values/frequencies of values

// write a function called same, which accepts two arrays and returns true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i=0; i<arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}


// console.log(same([1,2,3],[9, 1,4]));
// console.log(same([1,2,3],[4,1,1]));

// challenge: write a function that takes two strings and return true if they are anagrams of each other, flase otherwise.
function validAnagram(str1,str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter = {};
  for (const char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char]--;
    }
  }
  return true;
}

console.log(validAnagram('cat','tca'));
console.log(validAnagram('cat','txa'));
console.log(validAnagram('',''));
