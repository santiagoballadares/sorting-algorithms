/**
 * Quicksort with:
 * - Cutoff to insertion sort
 * - Median-of-three partitioning
 */
class Quick {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const sort = (a, lo, hi) => {
      // cutoff to insertion sort
      const n = hi - lo + 1;
      if (n <= this.cutoff()) {
        this.insertionSort(a, lo, hi);
        return;
      }

      const m = this.median3(a, lo, lo + parseInt(n/2, 10), hi);
      this.swap(a, m, lo);

      const j = partition(a, lo, hi);
      sort(a, lo, j-1);
      sort(a, j+1, hi);
    };
    
    const partition = (a, lo, hi) => {
      let i = lo;
      let j = hi + 1;

      while (true) {

        // find item on lo to swap
        while (this.less(a[++i], a[lo])) {
          if (i == hi) {
            break;
          }
        }

        // find item on hi to swap
        while (this.less(a[lo], a[--j])) {
          // redundant since a[lo] acts as sentinel
          if (j == lo) {
            break;
          }
        }

        // check if pointers cross
        if (i >= j) {
          break;
        }
        
        this.swap(a, i, j);
      }

      // put partitioning item a[lo] at a[j]
      this.swap(a, lo, j);

      // now, a[lo .. j-1] <= a[j] <= a[j+1 .. hi]
      return j;
    };
    
    this.shuffle(a);
    sort(a, 0, a.length - 1);
  }
  
  // sort from a[lo] to a[hi] using insertion sort
  static insertionSort(a, lo, hi) {
    for (let i = lo; i <= hi; i++) {
      for (let j = i; j > lo && this.less(a[j], a[j-1]); j--) {
        this.swap(a, j, j-1);
      }
    }
  }

  // return the index of the median element among a[i], a[j], and a[k]
  static median3(a, i, j, k) {
    return (
      this.less(a[i], a[j]) ?
      (this.less(a[j], a[k]) ? j : this.less(a[i], a[k]) ? k : i) :
      (this.less(a[k], a[j]) ? j : this.less(a[k], a[i]) ? k : i)
    );
  }
  
  static less(v, w) {
    return v < w;
  }
  
  static swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  
  static cutoff() {
    return 8;
  }
  
  /**
   * Modern Fisher–Yates shuffle
   */
  static shuffle(a) {
    const n = a.length;
    for (let i = n-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
