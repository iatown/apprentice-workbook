// Create a function that performs an even-odd transform to an array, n times.
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
  let even = -2;
  let odd = 2;
  let final = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      for (j = 0; j < n; j++) {
        arr[i] += even;
      }
    } else {
      for (k = 0; k < n; k++) {
        arr[i] += odd;
      }
    }
    final.push(arr[i]);
  }
  return final;
};
