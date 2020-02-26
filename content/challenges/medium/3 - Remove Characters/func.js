// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = str => {
    let special = ["!", "@", "#", "$", "%", "^", "&", '"', "*", "(", ")", "."];
  
    for (var i = 0; i < special.length; i++) {
      str = str.replace(special[i], "");
    }
     return str
};

// create an array of special characters, then filter or loop, if special caracters remove
