import Timer from "easytimer.js";
import { createStartButton } from "./StartStopButton";
import { createTimer } from "./displayTimer";
import { createCheckboxes } from "./checkboxes";
import { timesUp } from "../alarmview/alarmview";
export interface CountdownTime {
  seconds: number;
  setTime: number;
}

export const countdownTime: CountdownTime = {
  seconds: 30,
  setTime: 30,
};

export function setTimer() {
  if (document.getElementById("setTimerWrapper")) {
    return;
  }

  let timer = new Timer();

  // Initialize the countdown time

  // Create the HTML elements
  let setTimerWrapper = document.createElement("div");
  setTimerWrapper.id = "setTimerWrapper";

  let displayTimer = createTimer(timer, countdownTime);
  setTimerWrapper.appendChild(displayTimer);

  let { checkBoxInterval, checkBoxSleep, checkBoxContainer } =
    createCheckboxes();
  setTimerWrapper.appendChild(checkBoxContainer);

  let startStopButton = createStartButton(timer, countdownTime);
  setTimerWrapper.appendChild(startStopButton);

  let allInfo = document.querySelector(".allInfo")!;
  allInfo.appendChild(setTimerWrapper);

  timer.addEventListener("targetAchieved", function () {
    timesUp();
    // let iframe = document.createElement("iframe");
    // iframe.src = "https://www.youtube.com/embed/rUkzZTGE6jI?autoplay=1";
    // iframe.allow = "autoplay";

    countdownTime.seconds = countdownTime.setTime;

    if (checkBoxInterval.checked == true || checkBoxSleep.checked == true) {
      if (checkBoxSleep.checked == true) {
        setTimeout(function () {
          timer.start({
            countdown: true,
            startValues: { seconds: countdownTime.seconds },
          });
        }, 300000);
      } else {
        timer.start({
          countdown: true,
          startValues: { seconds: countdownTime.seconds },
        });
      }
    }
    if (timer.isRunning() == false) {
      startStopButton.textContent = "Reset Timer";
    }

    // setTimerWrapper.appendChild(iframe);
  });

  return function stop() {
    timer.stop();

    setTimerWrapper.remove();
  };
}
