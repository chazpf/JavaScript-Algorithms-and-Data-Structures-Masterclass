function flatten(arr) {
  let newArr = [];
  for (const val of arr) {
    if (Array.isArray(val)) {
      newArr.push(...flatten(val));
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
