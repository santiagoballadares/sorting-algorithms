const {less, swap, toInt} = require('../utils');

class Shell {

  // Sorts array in ascending order
  static sort(arr) {
    const n = arr.length;
    
    let h = 1;
    while (h < n/3) {
      h = 3*h + 1;
    }
    
    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h) {
          swap(arr, j, j - h);
        }
      }
      h = toInt(h / 3);
    }
  }

}

module.exports = Shell;
