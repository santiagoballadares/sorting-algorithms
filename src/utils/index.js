const less = (v, w) => {
  return v < w;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const toInt = value => {
  return parseInt(value, 10);
};

// Modern Fisher–Yates shuffle
const shuffleArr = arr => {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

module.exports = {
  less,
  swap,
  toInt,
  shuffleArr,
};
