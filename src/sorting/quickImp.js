const {less, swap, toInt, shuffleArr} = require('../utils');

const CUTOFF = 8;

/**
 * Quicksort improved with:
 * - Cutoff to insertion sort
 * - Median-of-three partitioning
 */
class QuickImp {

  // Sorts array in ascending order
  static sort(arr) {
    shuffleArr(arr);
    this._sort(arr, 0, arr.length - 1);
  }

  static _sort(arr, lo, hi) {
    // Cutoff to insertion sort
    const n = hi - lo + 1;
    if (n <= CUTOFF) {
      this._insertionSort(arr, lo, hi);
      return;
    }

    const m = this._median3(arr, lo, lo + toInt(n/2), hi);
    swap(arr, m, lo);

    const j = this._partition(arr, lo, hi);
    this._sort(arr, lo, j - 1);
    this._sort(arr, j + 1, hi);
  }

  static _partition (arr, lo, hi) {
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
  
  // Sort from arr[lo] to arr[hi] using insertion sort
  static _insertionSort(arr, lo, hi) {
    for (let i = lo; i <= hi; i++) {
      for (let j = i; j > lo && less(arr[j], arr[j - 1]); j--) {
        swap(arr, j, j - 1);
      }
    }
  }

  // Return the index of the median element among arr[i], arr[j], and arr[k]
  static _median3(arr, i, j, k) {
    return (
      less(arr[i], arr[j]) ?
      (less(arr[j], arr[k]) ? j : less(arr[i], arr[k]) ? k : i) :
      (less(arr[k], arr[j]) ? j : less(arr[k], arr[i]) ? k : i)
    );
  }

}

module.exports = QuickImp;
