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
//     console.log("Not eligible, you've already gotten one")
// }

//exercise5) write the conditional according to these rules:
// if less than or equal to 20-> "do u want a new card?"
// else if exactly 21 -> "blackjack!"
// else -> " u r out of the game"

//exercise6) create a variable isAlive and assign it to true
// then flip its value to false

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
    for (let i=0; i=cards.length; i++) {
        cardsEl.textContent += cards[i]+" "
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
    



// //exercise7) boolean result
// console.log(4===3)// false
// console.log(5>2)// true
// console.log(12>12)// false
// console.log(3<0)// false
// console.log(3>=3)// true
// console.log(11<=11)// true
// console.log(3<=2)// false

// // exercise24) create an array that lists your, experience, education, licenses, skills or similar
// let list = ["web developer course and a lot of youtube videos?", "primary, secondary, davinci, coderhouse, liceo britanico","davinci, coderhouse, firstexam", "english, html, css, sass, bootstrap, media queries, js, git, github"]
// //exercise25) make the following path appear in the console
// //education
// //licenses
// //experience
// console.log(list=[1])
// console.log(list=[2])
// console.log(list=[0])

// //exercise26)
// //create an array that describes yourself. use the three primitive data types you have learned
// // it should contain your name(string), your age(number), and whether you like pizza(boolean)

// let yourSelf=["thiago", 18, true]

// //exercise27)
// let cardzzz = [7, 4]
// cardzzz.push(6)
// //push the newMessage to the messages array, and then log out the array
// let messages=[
//     "hey, how is it going?",
//     "I am great, thank you! how about you?",
//     "all good. been working on my portfolio lately."
// ]

// let newMessage= "same here!"

// messages.push(newMessage)
// console.log(messages)
// // exercise28) remove the push(hint: u have to google it)
// messages.pop()
// console.log(messages)


//       start         finish    step size
// for ( let count = 10; count<20; count =+1) {
//     console.log(count)
// }
//exercise31) 

//create a for loop that counts from 10 to 100 in steps of 10
// for (let i=10; i<=100; i=+10) {
//     console.log(i)
// }

//exercise32) create a for loop that logs out all the cars in the array
// use cards.length to specify how  long the loop should run
// let cardszsz = [7, 3, 9]
// for (let counterStrike = 0; counterStrike < cardszsz.length; counterStrike++){
//     console.log(cardszsz[counterStrike])
// }

