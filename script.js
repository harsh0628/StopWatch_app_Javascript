let display = document.getElementById("timerdisplay");
let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let lap = document.getElementById("lap");
let lapsContainer = document.getElementById("lapsContainer");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerId = null;

start.addEventListener("click", function () {
  if (timerId === null) {
    timerId = setInterval(startTimer, 10);
  }
});

stop.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

reset.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerHTML = "00:00:00.00";
  lapsContainer.innerHTML = ""; // Clear laps
});

lap.addEventListener("click", function () {
  if (timerId !== null) {
    let lapTime = display.innerHTML;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
    lapsContainer.appendChild(lapItem);
  }
});

function startTimer() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0; 
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let msecstring = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  let secstring = seconds < 10 ? "0" + seconds : seconds;
  let minstring = minutes < 10 ? "0" + minutes : minutes;
  let hourstring = hours < 10 ? "0" + hours : hours;

  display.innerHTML = `${hourstring}:${minstring}:${secstring}.${msecstring}`;
}

