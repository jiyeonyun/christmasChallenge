const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const div = document.querySelector(".container");
const body = document.querySelector('body');
const container = document.querySelector('div');
function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  div.style.fontFamily  =  "'Mountains of Christmas', cursive"  ;
  greeting.innerText = `HAPPY NEW YEAR~~~~🐯`;
  body.style.background = "white";
  container.setAttribute("class","container theme");
}

btn.addEventListener('click',()=>{
  fix();
});

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.



