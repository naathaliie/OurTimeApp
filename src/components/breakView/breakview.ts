import Timer from "easytimer.js";

export function breakView() {

    const timer = new Timer();

    const allInfo = document.querySelector('.allInfo');

    const breakContainer = document.createElement('div');
    breakContainer.setAttribute('class', 'breakContainer');
    allInfo?.appendChild(breakContainer);

    const pauseContainer: HTMLDivElement = document.createElement("div");
    pauseContainer.setAttribute("class", "pause-container");
    breakContainer.appendChild(pauseContainer);

    const pauseLogo: HTMLImageElement = document.createElement("img");
    pauseLogo.src = "../components/breakview/img/pause.svg"
    pauseLogo.setAttribute("class", "pause-logo");
    pauseContainer.appendChild(pauseLogo);

    const breakText: HTMLParagraphElement = document.createElement("p");
    breakText.setAttribute("class", "break-text");
    breakText.innerText = "Pause & breath"
    breakContainer.appendChild(breakText);

    timer.start({ countdown: true, startValues: { minutes: 1 } });

    if (breakContainer) {
        const timerElement = document.createElement('div');
        timerElement.setAttribute('class', 'timer');

        breakContainer.appendChild(timerElement);

        // Uppdatera timerelementet varje sekund
        timer.addEventListener('secondsUpdated', function () {
            const timeValues = timer.getTimeValues();
            timerElement.innerHTML = timeValues.toString();
        });

        // Hantera händelse när nedräkningen når noll
        timer.addEventListener('targetAchieved', function () {
            // Gå tillbaka till föregående timer när tiden står når 0
            timerElement.innerHTML = 'Nedräkningen är klar!';
        });
    }

    const pauseTimer: HTMLButtonElement = document.createElement("button");
    pauseTimer.textContent = "NO PAUSE, GO NOW!";
    pauseTimer.setAttribute("class", "pause-timer");
    breakContainer.appendChild(pauseTimer);

    pauseTimer.addEventListener("click", () => {
        console.log("knappen trycktes");
        // Avbryt pausen och återgå till föregående timer här
        timer.stop();

    });
};