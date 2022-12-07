let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let days = document.querySelector("#days");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let seconds = document.querySelector("#seconds");

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
