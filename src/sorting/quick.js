const {less, swap, shuffleArr} = require('../utils');

class Quick {

  // Sorts array in ascending order
  static sort(arr) {
    shuffleArr(arr);
    this._sort(arr, 0, arr.length - 1);
  }

  static _sort(arr, lo, hi) {
    if (hi <= lo) {
      return;
    }
    const j = this._partition(arr, lo, hi);
    this._sort(arr, lo, j - 1);
    this._sort(arr, j + 1, hi);
  }

  static _partition(arr, lo, hi) {
    let i = lo;
    let j = hi + 1;

    while (true) {

      // Find item on lo to swap
      while (less(arr[++i], arr[lo])) {
        if (i == hi) {
          break;
        }
      }

      // Find item on hi to swap
      while (less(arr[lo], arr[--j])) {
        // Redundant since arr[lo] acts as sentinel
        if (j == lo) {
          break;
        }
      }

      // Check if pointers cross
      if (i >= j) {
        break;
      }
      
      swap(arr, i, j);
    }

    // Put partitioning item arr[lo] at arr[j]
    swap(arr, lo, j);

    // Now, arr[lo .. j-1] <= arr[j] <= arr[j+1 .. hi]
    return j;
  }

}

module.exports = Quick;;
