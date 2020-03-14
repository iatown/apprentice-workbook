let log = console.log;

evenOdd = (arr, n) => {
  let even = -2;
  let odd = 2;
  let final = ([]);

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
  log(final)
    return final;
};

evenOdd([1, 2, 3], 1);
