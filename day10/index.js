const meter = document.getElementById("meter")

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

const christmas = 25;
const date = new Date();
const today_date  = date.getDate();


function meterup(){
    let meterpercent = christmas - today_date;
    meter.setAttribute('value',meterpercent);
}
window.onload =  meterup();

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
