import Timer from "easytimer.js";
import pause from "./img/pause.svg";

export function breakView() {
  const timer = new Timer();

  const allInfo: Element | null = document.querySelector(".allInfo");

  const outerWrapper: HTMLDivElement = document.createElement("div");
  outerWrapper.setAttribute("class", "outer-wrapper");
  allInfo?.appendChild(outerWrapper);

  const innerWrapper: HTMLDivElement = document.createElement("div");
  innerWrapper.setAttribute("class", "inner-wrapper");
  outerWrapper.appendChild(innerWrapper);

  const breakContainer: HTMLDivElement = document.createElement("div");
  breakContainer.setAttribute("class", "breakContainer");
  innerWrapper.appendChild(breakContainer);

  const pauseContainer: HTMLDivElement = document.createElement("div");
  pauseContainer.setAttribute("class", "pause-container");
  breakContainer.appendChild(pauseContainer);

  const pauseLogo: HTMLImageElement = document.createElement("img");
  pauseLogo.src = pause;
  pauseLogo.setAttribute("class", "pause-logo");
  pauseContainer.appendChild(pauseLogo);

  const breakText: HTMLParagraphElement = document.createElement("p");
  breakText.setAttribute("class", "break-text");
  breakText.innerText = "Pause & breath";
  breakContainer.appendChild(breakText);

  const pauseTimer: HTMLButtonElement = document.createElement("button");
  pauseTimer.textContent = "NO PAUSE, GO NOW!";
  pauseTimer.setAttribute("class", "pause-timer");
  breakContainer.appendChild(pauseTimer);

  if (outerWrapper) {
    timer.start({ countdown: true, startValues: { minutes: 5 } });

    outerWrapper.style.display = "block";
    outerWrapper.classList.add("full-screen");

    const timerElement = document.createElement("div");
    timerElement.setAttribute("class", "timer");

    breakContainer.appendChild(timerElement);

    // Uppdatera timerelementet varje sekund
    timer.addEventListener("secondsUpdated", function () {
      const timeValues = timer.getTimeValues();
      timerElement.innerHTML = timeValues.toString();
    });

    // Hantera händelse när nedräkningen når noll
    timer.addEventListener("targetAchieved", function () {
      // Gå tillbaka till föregående timer när tiden står når 0
      outerWrapper.style.display = "none";
      outerWrapper.remove();
    });

    pauseTimer.addEventListener("click", () => {
      // Avbryt pausen och återgå till föregående timer här
      timer.stop();
      outerWrapper.style.display = "none";
      outerWrapper.remove();
    });
  }
}
