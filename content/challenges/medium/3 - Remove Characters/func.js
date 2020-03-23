// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = str => {
    let special = ["!", "@", "#", "$", "%", "^", "&", '"', "*", "(", ")", "."];
  
    // for (var i = 0; i < special.length; i++) {
    //   str = str.replace(special[i], "");
    // }
    //  return str
  let char = "";
  let sentence = "";

  for (let i = 0; i < str.length; i++) {
    let found = false;
    //sentence = str[i]
    for (j = 0; j < special.length; j++) {
      if (str[i] === special[j]) {
        char = special[j];
        found = true;
        // log( char)
      }
    }
    if (!found) {
      sentence += str[i];
      continue;
    }
  }
  return sentence;
};

// create an array of special characters, then filter or loop, if special caracters remove
