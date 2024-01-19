import Timer from "easytimer.js"

export function timerDigital(): void {
  console.log("timerDigital funkar")

  let timer: Timer = new Timer()

  timer.addEventListener("secondsUpdated", function () {
    let secondCounter: string = timer.getTimeValues().seconds.toString()
    let minuteCounter: string = timer.getTimeValues().minutes.toString()

    const app: HTMLDivElement = document.querySelector<HTMLDivElement>("#app")!
    app.innerHTML = `<header id="timer-digital-header"><div>ham</div><h1>interval</h1></header>`
    app.innerHTML += `<div id="timer-digital-numbers">${minuteCounter} : ${secondCounter}</div>`

    // Abort button
    const abortButton: HTMLButtonElement = document.createElement("button")
    abortButton.textContent = "ABORT TIMER"
    abortButton.setAttribute("id", "abort-button")
    app.appendChild(abortButton)

    abortButton.addEventListener("click", () => {
      console.log("aborted")
      timer.reset()
    })
  })

  timer.start()
}
