const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const elfzone = document.querySelector('.elf-hangout-zone');
const width = elfzone.getBoundingClientRect();

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
    const newelf = document.createElement('div');
    const x1 = 0;
    const y1 = 0;
    const x2 = width.width;
    const y2 = width.height;
    const x = randomNumber(x1,x2);
    const y = randomNumber(y1, y2);
    newelf.setAttribute('class','elf');
    newelf.innerText = '🧝';
    newelf.style.left= `${x}px`;
    newelf.style.top = `${y}px`;
    elfzone.appendChild(newelf);
    
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
}
function randomNumber(min ,max){
    return Math.random()*(max-min)+min;
}
// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.