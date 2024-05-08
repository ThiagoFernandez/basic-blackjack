//tips: length is one longer than array(array starts at 0 and length at 1)
// // exercise1) create two variables, firstCard and secondCard, and set their values to a random number between 2-11
// let firstCard = 5
// let secondCard = 6
// //create a variable, sum and set it to the sum of the two cars
// let sum = firstCard+secondCard
// //check


// //exercise2) do the if
// if (sum<21){
//     console.log("do u want to draw a new card?")
// }
// else if(sum==21){
//     console.log("BLACKJACK!")
// }
// else if(sum>21){
//     console.log("u r out of the game")
// }

// //exercise3) check if the person is old enough to enter the nightclub(18)
// let age= 18
// // if less than 18 -> " u cannot enter the club!"
// //else -> welcome
// if (age<18){
//     console.log("U cannot enter the club!")
// }
// else {
//     console.log("Welcome")
// }


// //exercise4) check if the person is eligible for a birthday card from the king!(100)
// let candidateAge = 100
// if(candidateAge<100) {
//     console.log("not eligible")
// }
// else if (candidateAge==100){
//     console.log("Here is your birthday card from the king")
// }
// else{
//     console.log("Not eligible, U've already gotten one")
// }

//exercise5) write the conditional according to these rules:
// if less than or equal to 20-> "do u want a new card?"
// else if exactly 21 -> "blackjack!"
// else -> " u r out of the game"

//exercise6) create a variable isAlive and assign it to true
// then flip its value to false

let firstCard = 5
let secondCard = 6
let cards =[firstCard, secondCard] // array - ordered list items
let sum = firstCard + secondCard
let hasBlackjack= false
let isAlive = true
//exercise8) declare a variable called message and assign its value to an empty string
let message = ""
//exercise12) store the message-el paragraph in a variable called messageEL
let messageEl = document.querySelector("#message-el")
//exercise14) store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#sum-el")
//exercise17) store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")
//reassign the message variable to the string we are logging out
//exercise11) create a startGame() function. move the conditional inside the body of the function
function renderGame(){
    //exercise15) render the sum on the page using this format -> "sum: 14"
    //exercise18) render the cards on the page using this format-> "cards: "
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
    messageEl.textContent = message
    sumEl.textContent = "sum: "+sum
    cardsEl.textContent= "cards: "+cards[0]+" and "+cards[1]
}
//exercise22) create a function startGame that render the renderGame function
function startGame() {
    renderGame()
}
//exercise20) create a function newCard() that logs out "drawing a new card"
function newCard(){
    //exercise21) create a card variable
    let card = 10
    sum += card
    renderGame()
}
    



// //exercise7) boolean result
// console.log(4===3)// false
// console.log(5>2)// true
// console.log(12>12)// false
// console.log(3<0)// false
// console.log(3>=3)// true
// console.log(11<=11)// true
// console.log(3<=2)// false

// exercise24) create an array that lists your, experience, education, licenses, skills or similar
let list = ["web developer course and a lot of youtube videos?", "primary, secondary, davinci, coderhouse, liceo britanico","davinci, coderhouse, firstexam", "english, html, css, sass, bootstrap, media queries, js, git, github"]
//exercise25) make the following path appear in the console
//education
//licenses
//experience
console.log(list=[1])
console.log(list=[2])
console.log(list=[0])