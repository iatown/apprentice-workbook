// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = word => {
  let stretch = word[0];
  let sentence = stretch;
  let duplicateWord = "";

  for (let i = 0; i < word.length; i++) {
    //log(word, i)
    if (word[i] !== stretch && word[i] !== duplicateWord) {
      sentence += word[i];
      stretch = word[i];
    }
    // if (stretch[i] == word){
    //     duplicateWord += stretch[i]
    // }
  }
  return sentence;
};

//store the first letter, loop until you get the next letter, push that letter to the first store
