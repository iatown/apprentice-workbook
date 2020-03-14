// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    let word = str.toLowerCase();
  let letter = [];
  let flag = true;
  for (let i = 0; i < word.length; i++) {
    letter.push(word[i]);
  }
  let count = letter.length;

  for (let k = 0; k < count; k++) {
    flag = lookup(word[k], letter, count, flag);
  }
  
  //log(flag);
  return flag
};

let lookup = (word, letter, count, flag) => {
  let letterCount = 0;
  let find = "";
  let check = "";
  let i = 0;
  //flag = true
  //log(count)

  // while(i < count ) {
  //log(word, letter)

  for (let k = 0; k < count; k++) {
    let val = letter[k];

    if (word == find) {
      letterCount += 1;
      check = word;
      //log("Letter count Word "+ word + " Val " + val + " find "+ find )
    }

    if (word == val) {
      find = val;
      // log(find, word)
      //log("Word "+ word + " Val " + val + " find "+ find)

      if (check.length == 0) {
        check = find;
        letterCount += 1;
        //log("check " + check + " find " + find + i)
      }
      //log(check, letterCount);
      if (letterCount >= 2) {
        //log("found " + check, letterCount);
        flag = false;
        return flag;
        break;
      }
    }
  }
  return flag;
}
