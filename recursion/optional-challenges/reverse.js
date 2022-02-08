function reverse(string) {
  let reversedStr = '';

  function reverseHelper(str) {
    if (str.length === 0) return '';
    reversedStr = reversedStr + str[str.length-1];
    reverseHelper(str.slice(0, str.length-1));
  }

  reverseHelper(string);

  return reversedStr;
}

console.log(reverse('awesome'));
