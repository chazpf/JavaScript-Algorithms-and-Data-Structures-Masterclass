function findLongestSubstring(str) {
  let longestSubstringLen = 0;
  let highestIndexChecked = 0;
  const substring = [];

  while (highestIndexChecked < str.length) {
    if (substring.includes(str[highestIndexChecked])) {
      substring.splice(0, substring.indexOf(str[highestIndexChecked]) + 1)
    }
    substring.push(str[highestIndexChecked]);
    longestSubstringLen = Math.max(longestSubstringLen, substring.length);
    highestIndexChecked++;
  }

  return longestSubstringLen;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
