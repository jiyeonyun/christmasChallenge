const countdownDisplay = document.getElementById("countdown-display");
const countdownDisplay_ny = document.getElementById("countdown-display_ny");

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    var today = new Date();
    const today_date = today.getDate();
    let remaining_day = christmas - today_date;
    countdownDisplay.innerText = remaining_day;
}
 function newyear(){
     const setDate =new Date("2022-01-01T00:00:00+0900");
     const today = new Date();
     const distance =setDate.getTime() - today.getTime();

    const day = Math.floor(distance/(1000*60*60*24));//밀리초라 1000 60초 60분 24시간
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/(1000));
    countdownDisplay_ny.innerText = `${day}Days ${hours}hours ${minutes}minutes ${seconds}seconds 🎅🏻`;
    }
 
 
 
renderCountdown();
newyear();
setInterval(newyear,1000);
// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.