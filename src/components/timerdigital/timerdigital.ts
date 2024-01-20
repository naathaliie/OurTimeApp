import Timer from "easytimer.js";

export function timerDigital() {
  let timer: Timer = new Timer();
  const app: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".allInfo")!;
  app.innerHTML = `<section id="timer-digital-section"></section>`;
  const section: HTMLDivElement | null = document.querySelector<HTMLDivElement>(
    "#timer-digital-section"
  );

  timer.addEventListener("secondsUpdated", function () {
    let secondCounter: string = timer.getTimeValues().seconds.toString();
    let minuteCounter: string = timer.getTimeValues().minutes.toString();

    if (section) {
      section.innerHTML = `<header id="timer-digital-header"><div id="timer-digital-navicon"><img  src="/navicon.svg" alt="navicon" /></div><div><h1>interval</h1></div></header>`;
      section.innerHTML += `<div id="timer-digital-numbers">${minuteCounter} : ${secondCounter}</div>`;

      // menu listener
      const menu: HTMLDivElement | null =
        document.querySelector<HTMLDivElement>("#timer-digital-navicon");
      if (menu) {
        menu.addEventListener("click", () => {
          timer.stop();
        });
      }
      // Abort button
      const abortButton: HTMLButtonElement = document.createElement("button");
      abortButton.textContent = "ABORT TIMER";
      abortButton.setAttribute("class", "abort-button");
      section.appendChild(abortButton);

      abortButton.addEventListener("click", () => {
        timer.reset();
      });
    }
  });
  timer.start();

  return function stop() {
    timer.stop();

    section!.remove();
  };
}
