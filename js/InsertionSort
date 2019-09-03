class Insertion {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const n = a.length;
    
    for (let i = 0; i < n; i++) {
      for (let j = i; j > 0 && this.less(a[j], a[j-1]); j--) {
        this.swap(a, j, j-1);
      }
    }
  }
  
  /**
   * Sorts subarray a[lo..hi) in ascending order
   * lo: left endpoint (inclusive)
   * hi: right endpoint (exclusive)
   */
  static sortRange(a, lo, hi) {
    for (let i = 0; i < hi; i++) {
      for (let j = i; j > lo && this.less(a[j], a[j-1]); j--) {
        this.swap(a, j, j-1);
      }
    }
  }
  
  static less(v, w) {
    return v < w;
  }
  
  static swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}
