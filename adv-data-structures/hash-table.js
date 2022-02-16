class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (const pair of this.keyMap[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }
  keys() {
    const keyList = new Set();
    for (const group of this.keyMap) {
      if (group) {
        for (const pair of group){
          keyList.add(pair[0]);
        }
      }
    }
    return keyList;
  }
  values() {
    const valueList = new Set();
    for (const group of this.keyMap) {
      if (group) {
        for (const pair of group){
          valueList.add(pair[1]);
        }
      }
    }
    return valueList;
  }
}

const hashMap = new HashTable(4);
hashMap.set("blue", '#f0000');
hashMap.set("red", '#gggggg');
hashMap.set("yellow", '#yyyyy');
hashMap.set("black", '#44444');
hashMap.set("turquiose", "#r7r7r7r7");
hashMap.set("silver", "#01984");
hashMap.set("amber", "#e987uj");
hashMap.set("otheramber", "#e987uj");
console.log(hashMap.keys());
