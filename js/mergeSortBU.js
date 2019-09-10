class MergeBU {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const merge = (a, aux, lo, mid, hi) => {
      for (let k = lo; k <= hi; k++) {
        aux[k] = a[k];
      }

      let i = lo;
      let j = mid+1;
      for (let k = lo; k <= hi; k++) {
        if (i > mid) {
          a[k] = aux[j++];
        } else if (j > hi) {
          a[k] = aux[i++];
        } else if (this.less(aux[j], aux[i])) {
          a[k] = aux[j++];
        } else {
          a[k] = aux[i++];
        }
      }
    };

    const n = a.length;
    const aux = [];
    for (let len = 1; len < n; len *=2) {
      for (let lo = 0; lo < n-len; lo += len+len) {
        const mid = lo+len-1;
        const hi = Math.min(lo+len+len-1, n-1);
        merge(a, aux, lo, mid, hi);
      }
    }  
  }
  
  static less(v, w) {
    return v < w;
  }
}
