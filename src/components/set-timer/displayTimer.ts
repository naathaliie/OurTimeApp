import Timer from "easytimer.js";
import { CountdownTime } from "./setTimer";

function formatTime(countdownTime: CountdownTime) {
  let s = countdownTime.seconds % 60;
  let m = Math.floor(countdownTime.seconds / 60);
  let h = Math.floor(countdownTime.seconds / 3600);
  let fs = s < 10 ? "0" + s : s;
  let fm = m < 10 ? "0" + m : m;
  let fh = h < 10 ? "0" + h : h;
  return `${fh}:${fm}:${fs}`;
}

export const createTimer = (timer: Timer, countdownTime: CountdownTime) => {
  let values = document.createElement("div");
  values.className = "values";
  values.textContent = formatTime(countdownTime);

  let valuesContainer = document.createElement("div");
  valuesContainer.className = "valuesContainer";

  let decreaseButton = document.createElement("button");
  decreaseButton.className = "decreaseButton";
  decreaseButton.textContent = "<";
  valuesContainer.appendChild(decreaseButton);

  valuesContainer.appendChild(values);

  let increaseButton = document.createElement("button");
  increaseButton.className = "increaseButton";
  increaseButton.textContent = ">";

  increaseButton.addEventListener("click", function () {
    countdownTime.setTime += 10;
    countdownTime.seconds = countdownTime.setTime;
    document.querySelector("#setTimerWrapper .values")!.textContent =
      formatTime(countdownTime);
  });
  valuesContainer.appendChild(increaseButton);

  decreaseButton.addEventListener("click", function () {
    countdownTime.setTime = Math.max(0, countdownTime.setTime - 10);
    countdownTime.seconds = countdownTime.setTime;
    document.querySelector("#setTimerWrapper .values")!.textContent =
      formatTime(countdownTime);
  });

  timer.addEventListener("secondsUpdated", function () {
    document.querySelector("#setTimerWrapper .values")!.innerHTML = timer
      .getTimeValues()
      .toString();
  });
  return valuesContainer;
};
