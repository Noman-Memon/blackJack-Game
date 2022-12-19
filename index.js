let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards-el");
let firsCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firsCard + secondCard;
function renderGame() {
  console.log(sum);
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = "Cards: " + firsCard + " " + secondCard;
  } else {
    message = "You're out of the game! 😭";
    sumEl.textContent = `Sum: ${sum}`;
  }
  messageEl.textContent = message;
}

function startGame() {
  renderGame()
}

function newCard() {
  let newCard = Math.floor(Math.random() * 11) + 2;
  sum += newCard;
  renderGame()
  // console.log("Drawing a new card from the deck!");
}
