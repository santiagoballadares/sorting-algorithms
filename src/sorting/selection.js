const {less, swap} = require('../utils');

class Selection {

  // Sorts array in ascending order
  static sort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
      let min = i;
      
      for (let j = i + 1; j < n; j++) {
        if (less(arr[j], arr[min])) {
          min = j;
        }
      }
      
      swap(arr, i, min);
    }
  }

}

module.exports = Selection;
