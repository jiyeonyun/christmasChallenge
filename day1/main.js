const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    var today = new Date();
    console.log(today);
    const today_date = today.getDate();
     console.log(today_date);
    let remaining_day = christmas - today_date;
    console.log(remaining_day);
    countdownDisplay.innerText = remaining_day;
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.