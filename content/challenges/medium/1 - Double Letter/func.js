// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = word => {
  let x = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i] === x) {
      return true;
    } else {
      x = word[i];
      // console.log(x)
    }
  }
  return false;
};
