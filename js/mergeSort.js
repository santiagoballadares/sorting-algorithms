class Merge {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const sort = (a, aux, lo, hi) => {
      if (hi <= lo) {
        return;
      }
      const mid = lo + parseInt((hi - lo) / 2, 10);
      sort(a, aux, lo, mid);
      sort(a, aux, mid+1, hi);
      merge(a, aux, lo, mid, hi);
    };
    
    // a[lo .. mid] and a[mid+1 .. hi] must be sorted subarrays
    const merge = (a, aux, lo, mid, hi) => {
      // copy to aux[]
      for (let k = lo; k <= hi; k++) {
        aux[k] = a[k]; 
      }

      // merge back to a[]
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
    
    const aux = [];
    sort(a, aux, 0, a.length-1);
  }
  
  static less(v, w) {
    return v < w;
  }
}
