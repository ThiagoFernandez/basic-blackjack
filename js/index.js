let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    // Clear cards element before re-rendering
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You are out, rookie!";
        isAlive = false;
    }
}

function newCard() {
    let card = 6;
    sum += card;
    cards.push(card);
    renderGame();
}


