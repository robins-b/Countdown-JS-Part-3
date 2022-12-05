let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let days = document.querySelector("#days");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let seconds = document.querySelector("#seconds");

// function start() {
//   num = input.value;
//   let days = Math.floor(num / (3600 * 24));
//   let hours = Math.floor((num % (3600 * 24)) / 3600);
//   let minutes = Math.floor((num % 3600) / 60);
//   let seconds = Math.floor(num % 60);
//   if (days < 10) {
//     days = "0" + days;
//   }
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   display.textContent = `${days}days:${hours}hrs:${minutes}mins:${seconds}sec`;
// }

function start() {
  if (input.value != "") {
    btn.classList.add("off");
    input.classList.add("off");
  }
  let num = input.value;
  setInterval(() => {
    num--;
    if (num >= 0) {
      seconds.textContent = `${Math.floor(num % 60)} secs`;
      minutes.textContent = `${Math.floor((num % 3600) / 60)} mins`;
      hours.textContent = `${Math.floor((num % (3600 * 24)) / 3600)} hrs`;
      days.textContent = `${Math.floor(num / (3600 * 24))} days`;
    }
  }, 1000);
}
