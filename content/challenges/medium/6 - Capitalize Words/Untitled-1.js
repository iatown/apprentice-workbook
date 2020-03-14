let log = console.log;
firstWord = str => {
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
  }
};

firstWord("PIZZA PIZZA PIZZA");
