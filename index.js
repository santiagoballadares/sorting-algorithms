const {
  Selection,
  Insertion,
  Shell,
  Merge,
  MergeBU,
  Quick,
  QuickImp,
} = require('./src/sorting');

const arr = [30, 10, 9, 45, 7, 80, 15, 2, 18, 34, 8, 0, 28, 40, 23, 1];

console.log(arr);

QuickImp.sort(arr);

console.log(arr);
