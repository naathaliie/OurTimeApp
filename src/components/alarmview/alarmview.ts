function timesUp() {
    const app: HTMLDivElement | null = document.querySelector(".allInfo");
    
    const alarmView = document.createElement("div");
    alarmView.setAttribute('class', 'alarm-view');
    app?.appendChild(alarmView);


    const clockContainer: HTMLDivElement = document.createElement("div");
    clockContainer.setAttribute("class", "clock-container");
    alarmView.appendChild(clockContainer);

    const clockLogo: HTMLImageElement = document.createElement("img");
    clockLogo.src = "./img/clock.svg";
    clockLogo.setAttribute("class", "clock-logo");
    clockContainer.appendChild(clockLogo);

    const clockText: HTMLParagraphElement = document.createElement("p");
    clockText.setAttribute("class", "clock-text");
    clockText.innerText = "Times up!"
    alarmView.appendChild(clockText);

    const newTimer: HTMLButtonElement = document.createElement("button");
    newTimer.textContent = "SET NEW TIMER";
    newTimer.setAttribute("class", "new-timer");
    alarmView.appendChild(newTimer);

    newTimer.addEventListener("click", () => {
        console.log("knappen trycktes");
        // återgå till setTimer här
    });
};



timesUp();