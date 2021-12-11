const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
const bg = new Audio('bgm.mp3');
function christmassifyName(){
  greeting.setAttribute('class','christmassified');
}
christmassifierBtn.addEventListener('click',()=>{
  if(greeting.className !== 'christmassified'){
    christmassifyName();
    bg.play();
    christmassifierBtn.innerText = "De-christmassify"
  }
  
  else{
    greeting.removeAttribute('class','christmassified');
    bg.pause();
    christmassifierBtn.innerText = "christmassify"
  }
 
});
 // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

