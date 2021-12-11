const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const bells = new Audio('bgm.mp3');
const high  = document.querySelector('#high');
const midum  = document.querySelector('#midum');
const low  = document.querySelector('#low');
// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
playBtn.addEventListener('click',()=>{
    bells.play();
});
pauseBtn.addEventListener('click',()=>{
    bells.pause();
})
stopBtn.addEventListener('click',()=>{
   bells.load(); 
});

high.addEventListener('click',()=>{
    bells.volume = 1;
});

midum.addEventListener('click',()=>{
    bells.volume = 0.5;
});
low.addEventListener('click',()=>{
    bells.volume = 0.2;
});
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.