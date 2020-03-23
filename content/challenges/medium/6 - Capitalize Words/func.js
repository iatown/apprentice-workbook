// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {

    let first = str[0];
  let capital = first.toUpperCase();
  let sentence = capital;
  let space = " ";
  let num = 0;

  for (let i = 1; i < str.length; i++) {
    let flag = false;

    if (str[i] == space) {
      flag = true;
      num = i;
      num += 1;
    }

    if (num == i) {
      capital = str[i].toUpperCase();
      sentence += capital;
      flag = true;
    } else {
      sentence += str[i];
    }
  }return sentence
}

//split into array, upper case first index, join
