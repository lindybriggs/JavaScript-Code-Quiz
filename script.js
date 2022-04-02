// defining variable with value of timer id in html
let timerEl = document.querySelector("#timer");
// starting timer with 75 seconds
let timer = 75;
// defining an interval/countdown function to subtract 1 from timer every 1000 milliseconds and updating the timeEL (timer id is an h1 tag on page) to display timer's current value. will clear the interval once 0 is reached
let timerId = setInterval(function () {
    timer--;
    timerEl.textContent = timer;

    if (timer === 0) {
        clearInterval(timerId);
    }
}, 1000)