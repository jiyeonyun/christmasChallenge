const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)
const greetingselector = document.querySelector('#switch-greeting');

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
];

const switchsArr = [
    {
        language: "English",
        greeting: "Happy New Year!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Año Nuevo.!"
    },
    {
        language: "Ukrainian",
        greeting: "Feliz Ano Novo"
    },
    {
        language: "Welsh",
        greeting: "С Новым годом"
    }
];


function translate(){
    for(var i=0; i<greetingsArr.length; i++){
        if(languageSelector.value == greetingsArr[i].language && greetingselector.value == "Merry Christmas!" ){
         greetingDisplay.innerText = greetingsArr[i].greeting
    }
    else if(languageSelector.value == greetingsArr[i].language && greetingselector.value == "Happy New Year"){
        greetingDisplay.innerText = switchsArr[i].greeting
    }
    
    }
   
    
    
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
