let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
function startGame() {
  let firsCard = Math.floor(Math.random() * 11) + 2;
  let secondCard = Math.floor(Math.random() * 11) + 2;
  let sum = firsCard + secondCard;
  console.log(sum)

  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    sumEl.textContent = `Sum: ${sum}`
  } else {
    message = "You're out of the game! 😭";
  }
  messageEl.textContent= message
  
}
console.log(messageEl)
