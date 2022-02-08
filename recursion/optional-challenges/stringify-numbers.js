function stringifyNumbers(obj) {
  let newObj = {};

  function stringifyNumbersHelper(data) {
    for (let key in data) {
      if (typeof data[key] === 'number') {
        newObj[key] = data[key].toString();
      } else if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
        newObj[key] = stringifyNumbers(data[key]);
      } else {
        newObj[key] = data[key];
      }
    }
  }

  stringifyNumbersHelper(obj);

  return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));
