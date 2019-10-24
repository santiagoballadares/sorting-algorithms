const {less, swap} = require('../utils');

class Insertion {

  // Sorts array in ascending order
  static sort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
      for (let j = i; j > 0 && less(arr[j], arr[j - 1]); j--) {
        swap(arr, j, j - 1);
      }
    }
  }
  
  /**
   * Sorts subarray a[lo..hi) in ascending order
   * lo: left endpoint (inclusive)
   * hi: right endpoint (exclusive)
   */
  static sortRange(arr, lo, hi) {
    for (let i = lo + 1; i < hi; i++) {
      for (let j = i; j > lo && less(arr[j], arr[j - 1]); j--) {
        swap(arr, j, j - 1);
      }
    }
  }

}

module.exports = Insertion;
