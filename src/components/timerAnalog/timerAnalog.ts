import Timer from "easytimer.js";

//Exxport för att kunna expnportera från min ts till main.ts. Void= funktionen skall inte returnera något.
export function analogWatch() {
  let timer: Timer = new Timer();
  console.log(timer);

  //Hämta divven med id = app från index.html för att sedan kunna skapa nya html-element till den analoga klockan
  const appDiv: HTMLElement | null = document.querySelector(".allInfo");
  //Skapar en ny div
  const watchDiv: HTMLDivElement = document.createElement("div");
  //Lägger till en klass till watchDiv
  watchDiv.classList.add("watch");
  //lägger in watchDiv i divven app
  appDiv?.appendChild(watchDiv);

  //Lägger till alla divvar med klockvisare samt siffror till watch

  //Alla hand-divvar
  const minuteDiv: HTMLDivElement = document.createElement("div");
  minuteDiv.classList.add("hand", "minute");
  watchDiv.appendChild(minuteDiv);

  const secondDiv: HTMLDivElement = document.createElement("div");
  secondDiv.classList.add("hand", "second");
  watchDiv.appendChild(secondDiv);

  //Alla sekundstreck i en loop. Gör även att du kan döpa alla divar till samma namn, det hade inte gått om du skapade dem  var för sig utan loopen

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
    }
  }

  return function stop() {
    timer.stop();

    watchDiv!.remove();
  };
}

/************************************************************/

//Funktion för att klockan skall fungera
export function setTime(): void {}
