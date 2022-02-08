function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;
  const frequencyCounter = {};
  for (const char of num1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (const char of num2) {
    if (frequencyCounter[char] > 0) {
      frequencyCounter[char]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,41));
console.log(sameFrequency(3589578,5879385));
