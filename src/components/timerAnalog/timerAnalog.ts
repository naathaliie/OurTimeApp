//Imports the easytimer so we can use it
import Timer from "easytimer.js";
import { countdownTime } from "../set-timer/setTimer";

//export is needed so you can export the function to main.ts
export function analogWatch() {
  //A new instance of Timer
  let timer: Timer = new Timer({
    countdown: false,
    target: { seconds: countdownTime.seconds },
  });

  // Starts the timer when page is loaded.
  timer.start();

  /* Create all the HTML-elements for the watch -> Collect the div with id "allinfo" from index.html. 
    Create a wrapper to make it responsiv?. 
    Create a nev div "watchWrapper", add a class to it "watchWrapper" 
    and then append the watchWrapper as a child to "allInfo". */
  const appDiv: HTMLElement | null = document.querySelector(".allInfo");
  const watchWrapper: HTMLElement = document.createElement("div");
  watchWrapper.classList.add("watchWrapper");
  appDiv?.appendChild(watchWrapper);

  //Create a new div for the watch "watchDiv".
  const watchDiv: HTMLDivElement = document.createElement("div");
  watchDiv.classList.add("watch");
  watchWrapper.appendChild(watchDiv);

  //The button
  const analogButton: HTMLButtonElement = document.createElement("button");
  analogButton.innerHTML = "ABORT TIMER";
  analogButton.classList.add("analogButton");
  watchWrapper.appendChild(analogButton);

  //When button get´s clicked...
  analogButton.addEventListener("click", () => {
    timer.reset();
    //Is needed to put the secondHand back in place, otherwise it gets off set
    secondDiv.style.transform = `rotate(-0deg)`;
    secondDiv.style.transform = `translate(-50%)`;
  });
  //Create the minute-hand and the second-hand. Add class and append as child to the watchDiv created above.
  const minuteDiv: HTMLDivElement = document.createElement("div");
  minuteDiv.classList.add("hand", "minute");
  watchDiv.appendChild(minuteDiv);

  const secondDiv: HTMLDivElement = document.createElement("div");
  secondDiv.classList.add("hand", "second");
  watchDiv.appendChild(secondDiv);

  //Create a patch to cover up the ends of the hands
  const handPatch: HTMLDivElement = document.createElement("div");
  handPatch.classList.add("handPatch");
  watchDiv.appendChild(handPatch);

  /*Create the lines for each second on the watch. If we create them all with a loop, we can name the div-element we want to create one time. It´s also much less code to write:)
   Fisrt create a new div "secondLine", add a line as the innerHTML, add two classes "secondLines" and "secondLine(it´s own number)",
   append as a child to the watchDiv and add it´s rotation style (increses with every loop). So they all line upp correctly.
   Also we want to make every 10 secondLine bigger and more bold, therfore we have the if-statement*/
  for (let i = 1; i < 61; i++) {
    const secondLine: HTMLDivElement = document.createElement("div");
    secondLine.innerHTML = "|";
    secondLine.classList.add("secondLines", `secondLine${i}`);
    watchDiv.appendChild(secondLine);
    //Transform : rotate(); Gör att vi kan välja hur respektive secondLine skall rotera
    secondLine.style.transform = `rotate(${6 * i}deg)`;

    if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || i == 60) {
      secondLine.style.fontSize = `2em`;
      secondLine.style.fontWeight = `bold`;
      secondLine.style.color = `pink`;
    }
  }

  // Makes the second-hand (secondDiv) move every second
  timer.addEventListener("secondsUpdated", function () {
    const time = timer.getTimeValues();
    const seconds = time.seconds;

    //Hämta divven med id = app från index.html för att sedan kunna skapa nya html-element till den analoga klockan

    //Every second the hand will rotate
    secondDiv.style.transform = `rotate(${6 * seconds}deg)`;
  });

  // Makes the minute-hand (minuteDiv) move every second
  timer.addEventListener("minutesUpdated", function () {
    const time = timer.getTimeValues();
    const minutes = time.minutes;

    //Every minute the hand will rotate
    minuteDiv.style.transform = `rotate(${6 * minutes}deg)`;
  });

  return function stop() {
    timer.stop();

    watchWrapper!.remove();
  };
}
