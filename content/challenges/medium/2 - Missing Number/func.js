// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = arr => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let b = arr;
  console.log(typeof b)

  // if (a.length === b.length) {
  //   console.log("perfect");
  // }
  // if (a.length !== b.length) {
  //   for (let i = 0; i < b.length; i++) {
  //     let c = b.includes(a[i]);
  //console.log(c);
  // if (c) {
  //   continue;
  // } else {
  //   return a[i];
  // }
  // }
  if (a !== b) {
    for (let i = 0; i < a.length; i++) {
      let c = b.includes(a[i]);
      //console.log(c)

      if (c === false) {
        let num = a[i];
        return num;
      } else {
        continue;
      }
    }
  }
};
