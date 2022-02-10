function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({length: 10}, () => []);
    for (const num of arr) {
      const digit = getDigitMathMethod(num, k);
      const bucket = buckets[digit];
      bucket.push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getDigitStringMethod(num, place) {
  let numStringified = num.toString();
  let digitIndex = numStringified.length - 1 - place;
  return parseInt(numStringified[digitIndex]) || 0;
}

function getDigitMathMethod(num, place ) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCountStringMethod(num) {
  return num.toString().length
}

function digitCountMathMethod(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  nums.forEach(num => max = Math.max(max, digitCountMathMethod(num)));
  return max;
}

console.log(radixSort([1234, 99, 1, 20, 267, 42, 987, 9657]));
// console.log(radixSort([1]));
// console.log(getDigitMathMethod(1, 0));
// console.log(mostDigits([1234, 56, 7]));
