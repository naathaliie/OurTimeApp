import Timer from "easytimer.js";
import { CountdownTime } from "./setTimer";

export const createStartButton = (
  timer: Timer,
  countdownTime: CountdownTime
) => {
  let startStopButton = document.createElement("button");
  startStopButton.className = "startStopButton";
  startStopButton.textContent = "Start Timer";

  startStopButton.addEventListener("click", function () {
    if (timer.isRunning() == false) {
      startStopButton.textContent = "Stop Timer";
      timer.start({
        countdown: true,
        startValues: { seconds: countdownTime.seconds },
      });
    } else {
      startStopButton.textContent = "Start Timer";
      countdownTime.seconds = timer.getTimeValues().seconds;
      timer.stop();
    }
  });

  return startStopButton;
};
