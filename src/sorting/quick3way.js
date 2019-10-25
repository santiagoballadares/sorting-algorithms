const {compare, swap, shuffleArr} = require('../utils');

// Quicksort using 3-way partitioning
class Quick3Way {

  // Sorts array in ascending order
  static sort(arr) {
    shuffleArr(arr);
    this._sort(arr, 0, arr.length - 1);
  }

  // Sort the subarray arr[lo .. hi]
  static _sort(arr, lo, hi) {
    if (hi <= lo) {
      return;
    }
    let lt = lo;
    let gt = hi;
    const v = arr[lo];

    let i = lo + 1;
    while (i <= gt) {
      const cmp = compare(arr[i], v);
      if (cmp < 0) {
        swap(arr, lt++, i++);
      } else if (cmp > 0) {
        swap(arr, i, gt--);
      } else {
        i++;
      }
    }

    // arr[lo..lt-1] < v = arr[lt..gt] < arr[gt+1..hi]
    this._sort(arr, lo, lt - 1);
    this._sort(arr, gt + 1, hi);
  }

}

module.exports = Quick3Way;
