function capitalizeWords (arr) {
  if (arr.length === 0) return [];
  arr[0] = arr[0].toUpperCase();
  if (arr.length === 1) return arr;
  return [arr[0]].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
