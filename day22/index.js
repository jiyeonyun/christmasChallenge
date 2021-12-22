const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

var time = 900;
var min = '';
var sec = '';

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.
function timerr(){
   setInterval(() => {
    min = parseInt(time/60);
    sec = time%60;
    timer.innerHTML = min + ":" + sec;
    time--;
    
    if(time<0){
        clearInterval();
    }
   },1000);
}
// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
btn.addEventListener('click',timerr);