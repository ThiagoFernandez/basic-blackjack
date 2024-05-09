let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {
    playerName: prompt("Enter your name"), 
    credits: prompt("Enter your bet") 
};
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.playerName + ": $" + player.credits;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1 && sum + 11 <= 21) {
        return 11;
    } else if (randomCard === 1 && sum + 11 > 21) {
        return 1;
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard;
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard; // Corrected the sum calculation
    renderGame();
}

function renderGame() {
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
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}



// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime(){
//     if (player1Time<player2Time) {
//         return player1Time
//     }
//     else if (player2Time< player1Time) {
//         return player2Time
//     }
//     else {
//         return player1Time
//     }
// }

// // let fastestRace = getFastestRaceTime()

// function totalRaceTime(){
//    return player1Time+player2Time
// }
// let totalTime = totalRaceTime()
// console.log(totalTime)



// // let randomNumber = Math.random()*6 (go to 0 to 0.9999999999999999999)
// // let flooredNumber = Math.floor(21.212312314) (remove decimals)


// function rollDice(){
//     let randomNumber = Math.floor(Math.random()*6) + 1
//     return randomNumber
// }
// console.log(rollDice()) // literalmente un dado papu!

// let hasCompletedCourse = true
// let givesCertificate = true
// if(hasCompletedCourse === true && givesCertificate === true)  {
//     generateCertificate()
// }
// function generateCertificate(){
//     console.log("generating certificate...")
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if(hasSolvedChallenge=== false && hasHintsLeft===false) {
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solution...")
// }
// let likesDocumentaries = true;
// let likesStartUps = false;

// if (likesDocumentaries===true || likesStartUps===true) {
//     recommendMovie
// }

// function recommendMovie () {
//     console.log("check out this new film we think you will like!")
// }

// let course = {
//     title: "learn css grid for free",
//     lessons:16,
//     creator:"thiago fernandez procacci",
//     length:63,
//     level:2,
//     isFree:true,
//     tags:["html","css"]
// }
// console.log(course.isFree)

// let object = {
//     price: 150,
//     place: "castelvania",
//     roomService: true,
//     hashtags: ["gym", "english", "touristic", "countryside"]
// };

// console.log(object.hashtags[1], object.hashtags[2], object.roomService);
