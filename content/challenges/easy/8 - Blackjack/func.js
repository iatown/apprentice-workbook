// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21,
//return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win,
//then go with 1.

module.exports = cards => {
  let total = 0;
  let length = cards.length;
  let numbers = 0;
  for (let i = 0; i < length; i++) {
    card = cards[i];

    if (card > 2 && card < 11) {
      numbers += card;
    }

    if (card === "J") {
      numbers += 10;
    }
    if (card === "K") {
      numbers += 10;
    }
    if (card === "Q") {
      numbers += 10;
    }
  }

  total += numbers;
  for (prop in cards) {
    card = cards[prop];
    if (total === 20 && card === "A") {
      total += 1;
    }
    if (total < 20 && card === "A") {
      total += 11;
    }
  }

  if (total > 21) {
    return true;
  } else {
    return false;
  }
};
