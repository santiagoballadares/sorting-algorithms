class Selection {
  static sort(a) {
    const n = a.length;
    
    for (let i = 0; i < n; i++) {
      let min = i;
      
      for (let j = i + 1; j < n; j++) {
        if (this.less(a[j], a[min])) {
          min = j;
        }
      }
      
      this.swap(a, i, min);
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
