let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards-el");
let firsCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let cards = [firsCard, secondCard];
let sum = firsCard + secondCard;
cardsEl.textContent = "Cards:";
function renderGame() {
  console.log(sum);
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    sumEl.textContent = `Sum: ${sum}`;
    cardString = "Cards: ";
    for (let i = 0; i < cards.length; i += 1) {
      // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
      cardString += cards[i] + " ";
    }
    cardsEl.textContent = cardString;
  } else {
    message = "You're out of the game! 😭";
    sumEl.textContent = `Sum: ${sum}`;
    cardString = "Cards: ";
    for (let i = 0; i < cards.length; i += 1) {
      // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
      cardString += cards[i] + " ";
    }
    cardsEl.textContent = cardString;
  }
  messageEl.textContent = message;
}

function startGame() {
  renderGame();
}

function newCard() {
  let newCard = Math.floor(Math.random() * 11) + 2;
  sum += newCard;
  cards.push(newCard);
  renderGame();
  // console.log("Drawing a new card from the deck!");
}
