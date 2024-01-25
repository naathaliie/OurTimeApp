import Timer from "easytimer.js";
import { createStartButton } from "./StartStopButton";
import { createTimer } from "./displayTimer";
import { createCheckboxes } from "./checkboxes";
import { timesUp } from "../alarmview/alarmview";
import { breakView } from "../breakView/breakview";
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
    if (!checkBoxInterval.checked && !checkBoxSleep.checked) {
      timesUp();
    }
    countdownTime.seconds = countdownTime.setTime;

    if (checkBoxSleep.checked) {
      breakView();
    }

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
