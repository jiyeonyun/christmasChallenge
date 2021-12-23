// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
const sign = document.getElementById('sign');
const textInput = document.querySelector('.text-input');
const textform = document.querySelector('.textform');
function changetext(event){
    event.preventDefault();
    sign.innerText = `🎅${textInput.value}☃️`;
}
textform.addEventListener('submit',changetext)
