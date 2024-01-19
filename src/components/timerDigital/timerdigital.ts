import Timer from "easytimer.js";

export function timerDigital(): void {
  console.log("timerDigital funkar");

  let timer: Timer = new Timer();

  // Create elements once
  const allInfo: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".allInfo")!;
  allInfo.innerHTML = `<header id="timer-digital-header"><div>ham</div><h1>interval</h1></header><div id="timer-digital-numbers"></div>`;
  const timerNumbers: HTMLDivElement = document.querySelector<HTMLDivElement>(
    "#timer-digital-numbers"
  )!;
  const abortButton: HTMLButtonElement = document.createElement("button");
  abortButton.textContent = "ABORT TIMER";
  abortButton.setAttribute("id", "abort-button");
  allInfo.appendChild(abortButton);

  timer.addEventListener("secondsUpdated", function () {
    let secondCounter: string = timer.getTimeValues().seconds.toString();
    let minuteCounter: string = timer.getTimeValues().minutes.toString();

    // Update text content of timer values
    timerNumbers.textContent = `${minuteCounter} : ${secondCounter}`;
  });

  abortButton.addEventListener("click", () => {
    console.log("aborted");
    timer.reset();
  });

  timer.start();
}
