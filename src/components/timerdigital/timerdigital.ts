import Timer from "easytimer.js"

export function timerDigital() {
  let timer: Timer = new Timer()

  const app: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".allInfo")!
  app.innerHTML = `<section id="timer-digital-section"></section>`
  const section: HTMLDivElement | null = document.querySelector<HTMLDivElement>(
    "#timer-digital-section"
  )

  timer.addEventListener("secondsUpdated", function () {
    let secondCounter: string = timer.getTimeValues().seconds.toString()
    let minuteCounter: string = timer.getTimeValues().minutes.toString()

    if (section) {
      section.innerHTML = `<header id="timer-digital-header"><h1>interval</h1></header>`
      section.innerHTML += `<div id="timer-digital-numbers">${minuteCounter} : ${secondCounter}</div>`

      // Abort button
      const resetButton: HTMLButtonElement = document.createElement("button")
      resetButton.textContent = "RESET TIMER"
      resetButton.setAttribute("class", "abort-button")
      section.appendChild(resetButton)

      resetButton.addEventListener("click", () => {
        timer.reset()
      })
    }
  })
  timer.start()

  return function stop() {
    timer.stop()

    section!.remove()
  }
}
