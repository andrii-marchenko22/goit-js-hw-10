import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);

    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight'
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(input, options);

let intervalId;

startButton.addEventListener("click", startClick);

function startClick() {
  input.disabled = true;
  startButton.disabled = true;

  intervalId = setInterval(() => {
    const totalTime = Date.now();
    const remainder = userSelectedDate - totalTime;
    const time = getTime(remainder);

    if (remainder <= 0) {
      clearInterval(intervalId);
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      input.disabled = false; 
    } else {
      tick({
        daysElement: days,
        hoursElement: hours,
        minutesElement: minutes,
        secondsElement: seconds,
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds,
      });
    }
  }, 1000);
}

function getTime(remainder) {
  const daysRev = pad(Math.floor(remainder / (1000 * 60 * 60 * 24)));
  const hoursRev = pad(Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutesRev = pad(Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60)));
  const secondsRev = pad(Math.floor((remainder % (1000 * 60)) / 1000));

  return { days: daysRev, hours: hoursRev, minutes: minutesRev, seconds: secondsRev };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function tick({ daysElement, hoursElement, minutesElement, secondsElement, days, hours, minutes, seconds }) {
  if (daysElement && hoursElement && minutesElement && secondsElement) {
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }
}
