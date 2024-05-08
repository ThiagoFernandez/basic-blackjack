let sentence = ["hello", "my","name","is","Per"]
let greetingEl =document.querySelector("#greeting-el")

 for(let i=0; i=sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}