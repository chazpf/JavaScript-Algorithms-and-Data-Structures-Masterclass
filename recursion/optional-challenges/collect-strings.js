function collectStrings(obj) {
  let strings = [];

  function collectStringsHelper(data) {
    for (let key in data) {
      if (typeof data[key] === 'string') {
        strings.push(data[key]);
      } else if (typeof data[key] === 'object') {
        collectStringsHelper(data[key]);
      }
    }
  }

  collectStringsHelper(obj);

  return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));
