import Timer from "easytimer.js";
import { CountdownTime } from "./setTimer";

export const createTimer = (timer: Timer, countdownTime: CountdownTime) => {
  let values = document.createElement("div");
  values.className = "values";
  values.textContent = "00:00:30"; // initial countdown time

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
      "00:00:" + countdownTime.seconds;
  });
  valuesContainer.appendChild(increaseButton);

  decreaseButton.addEventListener("click", function () {
    countdownTime.setTime = Math.max(0, countdownTime.setTime - 10);
    countdownTime.seconds = countdownTime.setTime;
    document.querySelector("#setTimerWrapper .values")!.textContent =
      "00:00:" + countdownTime.seconds;
  });

  timer.addEventListener("secondsUpdated", function () {
    document.querySelector("#setTimerWrapper .values")!.innerHTML = timer
      .getTimeValues()
      .toString();
  });
  return valuesContainer;
};
