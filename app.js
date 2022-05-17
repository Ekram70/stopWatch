const secondsElem = document.getElementById("seconds");
const tensElem = document.getElementById("tens");
const startBtn = document.getElementById("button-start");
const stopBtn = document.getElementById("button-stop");
const resetBtn = document.getElementById("button-reset");

startBtn.addEventListener("click", () => {
  let seconds = +secondsElem.innerText;
  let secondInterval = setInterval(() => {
    secondsElem.innerText =
      seconds.toString().length == 1 ? "0" + seconds++ : seconds++;
  }, 1000);

  let tens = +tensElem.innerText;
  let tensInterval = setInterval(() => {
    tens == 100 ? (tens = 0) : tens;
    tensElem.innerText = tens.toString().length == 1 ? "0" + tens++ : tens++;
  }, 10);

  stopBtn.addEventListener("click", () => {
    clearInterval(secondInterval);
    clearInterval(tensInterval);
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(secondInterval);
    clearInterval(tensInterval);
    secondsElem.innerText = "00";
    tensElem.innerText = "00";
  });
});
