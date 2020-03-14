// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    let space = " ";
    let word = "";
    let sentence = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == space || str.length-1 == i) { //check if this is space or last letter 
    
        if (word.length >= 5) {//  //if it is check if work is longer than 5
         // log(word)
          if(str.length-1 == i){ // if its the last letter, start the str w/that
            sentence += str[i]  // adding to the sentence
          }
          for (let j = word.length - 1; j >= 0; j--) { //strs the word
            sentence += word[j]; // adding to the sentence
          }
        } else {
          sentence += word;   //adding entire word to the sentence
          if(str.length-1 == i){
          sentence += str[i]
          }
        }
        if(str.length-1 !== i){ //check if its NOT the last character
            sentence += space // if not, add space back
          }
        word = "" //setting word back to blank
      } else {
        word += str[i]; //building the word out
      }
    }return sentence
  };
  


//loop through to see if sentence is greater than 5, if so split the sentence into an array, reversestring the array, then join back to sentence