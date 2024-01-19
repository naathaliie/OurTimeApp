import Timer from "easytimer.js";

export function setupTimer() {
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

  let buttons = ["startButton", "stopButton"];

  buttons.forEach((button) => {
    let btn = document.createElement("button");
    btn.className = button;
    btn.textContent = button.charAt(0).toUpperCase() + button.slice(1);
    chronoExample.appendChild(btn);
  });

  // Append the chronoExample element to the .allInfo element
  let allInfo = document.querySelector(".allInfo")!;
  allInfo.appendChild(chronoExample);

  // Initialize the countdown time
  let countdownTime = 30;

  // Add event listeners to the buttons
  document
    .querySelector("#chronoExample .startButton")!
    .addEventListener("click", function () {
      timer.start({ countdown: true, startValues: { seconds: countdownTime } });
    });

  document
    .querySelector("#chronoExample .stopButton")!
    .addEventListener("click", function () {
      timer.stop();
    });

  document
    .querySelector("#chronoExample .increaseButton")!
    .addEventListener("click", function () {
      countdownTime += 10;
      document.querySelector("#chronoExample .values")!.textContent =
        "00:00:" + countdownTime;
    });

  document
    .querySelector("#chronoExample .decreaseButton")!
    .addEventListener("click", function () {
      countdownTime = Math.max(0, countdownTime - 10);
      document.querySelector("#chronoExample .values")!.textContent =
        "00:00:" + countdownTime;
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
    allInfo.appendChild(iframe);
  });
}
