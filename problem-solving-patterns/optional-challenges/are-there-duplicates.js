function areThereDuplicates(...args) {
  const seenVals = {};
  for (const val of args) {
    if (seenVals[val]) return true;
    seenVals[val] = true;
  }
  return false;
}

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
