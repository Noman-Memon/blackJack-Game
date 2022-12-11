let helloEl = document.getElementById("hello")
let firsCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let sum = firsCard + secondCard;
console.log(sum)
function Hello() {
    if (sum < 21) {
        console.log("Do you want to draw a new card? 🙂")
    }else if (sum === 21) {
        console.log("Wohoo! You've got Blackjack! 🥳")
    }
    else {
        console.log("You're out of the game! 😭")
    }
    helloEl.innerText = sum
}