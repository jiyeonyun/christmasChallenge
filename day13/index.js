const btn = document.getElementById("btn")
let food = document.getElementById("food")
const vesi = document.getElementById("vegetarian-input");
const geust = document.getElementById("guests");
const numinput = document.getElementById("num-input");
 console.log();
btn.addEventListener('click',()=>{
    if(vesi.checked){
        food.innerText =`nut roast`;
    }
    else  if(numinput.value>=5){
        food.innerText =`goose`;
    }
    else{
        food.innerText =`turkey`;
    }
});

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

