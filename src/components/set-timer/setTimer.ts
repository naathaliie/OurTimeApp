import Timer from "easytimer.js";

export function setupTimer() {
  if (document.getElementById("chronoExample")) {
    // If it does, return early to prevent the rest of the code from executing
    return;
  }
  let timer = new Timer();

  // Create the HTML elements
  let chronoExample = document.createElement("div");
  chronoExample.id = "chronoExample";

  let values = document.createElement("div");
  values.className = "values";
  values.textContent = "00:00:30"; // initial countdown time

  let valuesContainer = document.createElement("div");
  valuesContainer.className = "valuesContainer";

  let decreaseButton = document.createElement("button");
  decreaseButton.className = "decreaseButton";
  valuesContainer.appendChild(decreaseButton);

  valuesContainer.appendChild(values);

  let increaseButton = document.createElement("button");
  increaseButton.className = "increaseButton";
  valuesContainer.appendChild(increaseButton);

  chronoExample.appendChild(valuesContainer);

  let startStopButton = document.createElement("button");
  startStopButton.className = "startStopButton";
  startStopButton.textContent = "Start Timer";
  chronoExample.appendChild(startStopButton);

  let checkBoxWrapper = document.createElement("div");
  checkBoxWrapper.className = "checkBoxWrapper";
  chronoExample.appendChild(checkBoxWrapper);

  let checkBoxInterval = document.createElement("input");
  checkBoxInterval.type = "checkbox";
  checkBoxInterval.id = "checkBoxInterval";
  let intervalLabel = document.createElement("label");
  intervalLabel.htmlFor = "checkBoxInterval";
  intervalLabel.textContent = "Interval";
  checkBoxWrapper.appendChild(checkBoxInterval);
  checkBoxWrapper.appendChild(intervalLabel);

  let checkBoxWrapperSleep = document.createElement("div");
  checkBoxWrapperSleep.className = "checkBoxWrapper";
  chronoExample.appendChild(checkBoxWrapperSleep);

  let checkBoxSleep = document.createElement("input");
  checkBoxSleep.type = "checkbox";
  checkBoxSleep.id = "checkBoxSleep";
  let sleepLabel = document.createElement("label");
  sleepLabel.htmlFor = "checkBoxSleep";
  sleepLabel.textContent = "Sleep 5 min";
  checkBoxWrapperSleep.appendChild(checkBoxSleep);
  checkBoxWrapperSleep.appendChild(sleepLabel);

  // Append the chronoExample element to the .allInfo element
  let allInfo = document.querySelector(".allInfo")!;
  allInfo.appendChild(chronoExample);

  // Initialize the countdown time
  let countdownTime = {
    seconds: 30,
    setTime: 30,
  };

  // Add event listeners to the buttons
  document
    .querySelector("#chronoExample .startStopButton")!
    .addEventListener("click", function () {
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

  document
    .querySelector("#chronoExample .increaseButton")!
    .addEventListener("click", function () {
      countdownTime.setTime += 10;
      countdownTime.seconds = countdownTime.setTime;
      document.querySelector("#chronoExample .values")!.textContent =
        "00:00:" + countdownTime.seconds;
    });

  document
    .querySelector("#chronoExample .decreaseButton")!
    .addEventListener("click", function () {
      countdownTime.setTime = Math.max(0, countdownTime.setTime - 10);
      countdownTime.seconds = countdownTime.setTime;
      document.querySelector("#chronoExample .values")!.textContent =
        "00:00:" + countdownTime.seconds;
    });
  document
    .querySelector("#chronoExample #checkBoxInterval")!
    .addEventListener("click", function () {
      if (checkBoxInterval.checked) {
        checkBoxInterval.checked = true;
      }
    });

  document
    .querySelector("#chronoExample #checkBoxSleep")!
    .addEventListener("click", function () {
      if (checkBoxSleep.checked) {
        checkBoxSleep.checked = true;
      }
    });

  // Update the timer display
  timer.addEventListener("secondsUpdated", function (e) {
    document.querySelector("#chronoExample .values")!.innerHTML = timer
      .getTimeValues()
      .toString();
  });

  // Play a video when the timer runs out
  timer.addEventListener("targetAchieved", function (e) {
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

    allInfo.appendChild(iframe);
  });
}
