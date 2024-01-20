import Timer from "easytimer.js";
import { createStartButton } from "./StartStopButton";
import { createTimer } from "./displayTimer";
import { createCheckboxes } from "./checkboxes";
export interface CountdownTime {
  seconds: number;
  setTime: number;
}

export function setTimer() {
  if (document.getElementById("chronoExample")) {
    return;
  }

  let timer = new Timer();

  // Initialize the countdown time
  let countdownTime: CountdownTime = {
    seconds: 30,
    setTime: 30,
  };

  // Create the HTML elements
  let chronoExample = document.createElement("div");
  chronoExample.id = "chronoExample";

  let displayTimer = createTimer(timer, countdownTime);
  chronoExample.appendChild(displayTimer);

  let { checkBoxInterval, checkBoxSleep, checkBoxContainer } =
    createCheckboxes();
  chronoExample.appendChild(checkBoxContainer);

  let startStopButton = createStartButton(timer, countdownTime);
  chronoExample.appendChild(startStopButton);

  let allInfo = document.querySelector(".allInfo")!;
  allInfo.appendChild(chronoExample);

  timer.addEventListener("targetAchieved", function () {
    let iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/rUkzZTGE6jI?autoplay=1";
    iframe.allow = "autoplay";
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

    chronoExample.appendChild(iframe);
  });

  return function stop() {
    timer.stop();

    chronoExample.remove();
  };
}
