let player = {
  name: prompt("Enter player name"),
  chips: 500,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name.toUpperCase();
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards-el");
let firsCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [firsCard, secondCard];
let sum = firsCard + secondCard;

cardsEl.textContent = "Cards:";

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber == 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  if (sum < 21) {
    message = "Draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    sumEl.textContent = `Sum: ${sum}`;
    cardString = "Cards: ";
    for (let i = 0; i < cards.length; i += 1) {
      // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
      cardString += cards[i] + " ";
    }
    cardsEl.textContent = cardString;
    playerEl.textContent = player.name.toUpperCase() +": $"+(player.chips)
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    sumEl.textContent = `Sum: ${sum}`;
    cardString = "Cards: ";
    for (let i = 0; i < cards.length; i += 1) {
      cardString += cards[i] + " ";
    }
    cardsEl.textContent = cardString;
    isAlive = false;
  }
  messageEl.textContent = message;
}

function startGame() {
  isAlive = true;
  renderGame();
}

function newCard() {
  if (hasBlackJack == false && isAlive == true) {
    let newCard = getRandomNumber();
    sum += newCard;
    cards.push(newCard);
    renderGame();
    // console.log("Drawing a new card from the deck!");
  }
}
