function naiveStringSearch(str, subStr) {
  let count = 0;
  for (let i = 0; i < str.length - subStr.length + 1; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i+j] !== subStr[j]) break;
      if (j === subStr.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch('roomgomtomg', 'omg'));
console.log(naiveStringSearch('omomomomomomo', 'omomo'));
