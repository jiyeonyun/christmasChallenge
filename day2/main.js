const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const special =document.querySelector(".hallo");

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.


snowBtn.addEventListener('click',()=>{
   body.setAttribute('class','snow'); 
});
christmasBtn.addEventListener('click',()=>{
   body.setAttribute('class','christmas'); 
});
// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
var i = 1;
special.addEventListener('click',()=>{
   togglehallo();
});



function togglehallo(){
   if(i === 1){
      body.setAttribute('class','halloween'); 
      greeting.innerText = `boo~~~!!!!!👻`;
      i++
   }
   else{
      body.setAttribute('class','christmas'); 
      greeting.innerText = `🎅 Merry Christmas!`;
      i--;
   }
}
console.log(i);