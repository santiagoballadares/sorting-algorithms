const {less, toInt} = require('../utils');

// Abstract in-place merge
class Merge {

  // Sorts array in ascending order
  static sort(arr) {
    const aux = [];
    this._sort(arr, aux, 0, arr.length - 1);
  }

  // Recursively sort and merge arr 
  static _sort(arr, aux, lo, hi) {
    if (hi <= lo) {
      return;
    }
    const mid = lo + toInt((hi - lo) / 2);
    this._sort(arr, aux, lo, mid);
    this._sort(arr, aux, mid + 1, hi);
    this._merge(arr, aux, lo, mid, hi);
  }

  // Merge both parts of arr. arr[lo .. mid] and arr[mid + 1 .. hi] must be sorted subarrays
  static _merge(arr, aux, lo, mid, hi) {
    // Copy to aux[]
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k]; 
    }

    // Merge back to arr[]
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > hi) {
        arr[k] = aux[i++];
      } else if (less(aux[j], aux[i])) {
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }

}

module.exports = Merge;
