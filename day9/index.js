const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const deco = document.querySelector('.deco');
const container = document.querySelector('.container');
const width = container.getBoundingClientRect();
const snowmanhouse = document.querySelector('.snowmanhouse');
decorator.addEventListener("click", deckTheHalls);
console.log(width);
var n =0
function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  if(n === 0){
    createItem(10);
    n++;
    console.log(n);
 }
 else{
    snowmanhouse.innerHTML = ``; 
     
    n--;
 }
  
 
}
function createItem(count){
    const x1 = 0;
    const y1 = 0;
    const x2 = width.width;
    const y2 = width.height;

    for(let i=0;i<count;i++){
        const item = document.createElement('span');
        item.setAttribute('class','snowman');
        item.innerText = '⛄️';
        item.style.position = 'absolute';
        const x = randomNumber(x1,x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        snowmanhouse.appendChild(item);
    }


}
function randomNumber(min ,max){
    return Math.random()*(max-min)+min;
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
