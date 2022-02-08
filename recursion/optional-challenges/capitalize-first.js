function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  if (arr.length === 1) return arr;
  return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana']));
