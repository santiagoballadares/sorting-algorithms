const {less} = require('../utils');

// Bottom-up merge
class MergeBU {

  // Sorts array in ascending order
  static sort(arr) {
    const n = arr.length;
    const aux = [];
    for (let len = 1; len < n; len *=2) {
      for (let lo = 0; lo < n - len; lo += len + len) {
        const mid = lo + len - 1;
        const hi = Math.min(lo + len + len - 1, n - 1);
        this._merge(arr, aux, lo, mid, hi);
      }
    }  
  }

  static _merge(arr, aux, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k];
    }

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

module.exports = MergeBU;
