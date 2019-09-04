class Shell {
  /**
   * Sorts array in ascending order
   */
  static sort(a) {
    const n = a.length;
    
    let h = 1;
    while (h < n/3) {
      h = 3*h + 1;
    }
    
    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j >= h && this.less(a[j], a[j-h]); j -= h) {
          this.swap(a, j, j-h);
        }
      }
      h = parseInt(h/3, 10);
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
