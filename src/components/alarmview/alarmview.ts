import alarm from "./img/alarm.svg";

export function timesUp() {
  const app: HTMLDivElement | null = document.querySelector(".allInfo");

  const alarmViewWrapper = document.createElement("div");
  alarmViewWrapper.setAttribute("class", "alarm-view-wrapper");
  app?.appendChild(alarmViewWrapper);

  const alarmViewInnerWrapper = document.createElement("div");
  alarmViewInnerWrapper.setAttribute("class", "alarm-view-inner-wrapper");
  alarmViewWrapper.appendChild(alarmViewInnerWrapper);

  const alarmView = document.createElement("div");
  alarmView.setAttribute("class", "alarm-view");
  alarmViewInnerWrapper.appendChild(alarmView);

  const clockContainer: HTMLDivElement = document.createElement("div");
  clockContainer.setAttribute("class", "clock-container");
  alarmView.appendChild(clockContainer);

  const clockLogo: HTMLImageElement = document.createElement("img");
  clockLogo.setAttribute("class", "clock-logo");
  clockLogo.src = alarm;
  clockContainer.appendChild(clockLogo);

  const newTimer: HTMLButtonElement = document.createElement("button");
  newTimer.textContent = "SET NEW TIMER";
  newTimer.setAttribute("class", "new-timer");
  alarmView.appendChild(newTimer);

  if (alarmViewWrapper) {
    alarmViewWrapper.style.display = "block";
    alarmViewWrapper.classList.add("full-screen");

    newTimer.addEventListener("click", () => {
      console.log("knappen trycktes");
      // återgå till setTimer här

      alarmViewWrapper.style.display = "none";
      alarmViewWrapper.remove();
    });
  }
}
