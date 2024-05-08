

let firstCard = 10
let secondCard = 4
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack= false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
function renderGame(){
    if (sum<=20){
        message="do u want a new card?"
    }
    
    else if(sum==21){
        message="blackjack!"
        hasBlackjack = true
    }
    
    else {
        message="u r out rookie!"
        isAlive = false
    }
    cardsEl.textContent= "cards: "
    for (let i=0; i=cards.length; i++) {
        cardsEl.textContent += cards[i]
    }
    messageEl.textContent = message
    sumEl.textContent = "sum: "+sum
}
function startGame() {
    renderGame()
}
function newCard(){
    let card = 6
    sum += card
    cards.push(card)
    renderGame()
}
    

