class Quick {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const sort = (a, lo, hi) => {
      if (hi <= lo) {
        return;
      }
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
  
  static less(v, w) {
    return v < w;
  }
  
  static swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
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
