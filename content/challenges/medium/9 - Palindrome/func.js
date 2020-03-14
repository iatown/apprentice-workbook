// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {

    let count = str.length;
    let backwards = "";
    let forward = str;
    for (let i = 0; i < str.length; i++) {
      //log("Upper " + str[i] + " " + i);
      //log(str.length -1, i)
  
      backwards = lookup(str, i, backwards);
    }
    //   log(forward)
    //   log(backwards)
  
    if (forward == backwards) {
      return true;
    } else {
      return false;
    }
  };
  
  lookup = (str, i, backwards) => {
    count = i;
    backwards = "";
  
    for (let k = i; k >= 0; k--) {
      //log("Lower " + str[k] );
      if (count == str.length - 1) {
        backwards += str[k];
      }
    }
  
    return backwards;

}