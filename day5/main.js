const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
const from =document.querySelector('#from');

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

const min = 0
const max = greetings.length;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
let randn = getRandomInt(min,max);

console.log(randn);

function writeGreeting(){
    const cardtext = greetings[randn];
    greetingDisplay.innerText = cardtext;
}
function printName(){
    const fromWho = document.querySelector('#fromWho').value;
    from.innerText =`from.${fromWho}`;
  }
function printMessage(){
    const message = document.querySelector('#customMessage').value;
    greetingDisplay.innerText = message;
}
    
    


btn.addEventListener("click", ()=>{
writeGreeting();

});
// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.