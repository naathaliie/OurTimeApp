import Timer from "easytimer.js"

export function timerDigital(): (() => void) | undefined {
  let timer: Timer = new Timer()
  let secondCounter: string = "0"
  let minuteCounter: string = "0"

  timer.addEventListener("secondsUpdated", function (): void {
    secondCounter = timer.getTimeValues().seconds.toString()
    minuteCounter = timer.getTimeValues().minutes.toString()
    const timerDigitalNumber: HTMLDivElement | null = document.querySelector(
      "#timer-digital-numbers"
    )
    if (timerDigitalNumber) {
      timerDigitalNumber.innerHTML = `${minuteCounter} : ${secondCounter}`
    }
  })

  const app: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".allInfo")!
  app.innerHTML = `<section id="timer-digital-section"></section>`
  const section: HTMLDivElement | null = document.querySelector<HTMLDivElement>(
    "#timer-digital-section"
  )

  if (section) {
    section.innerHTML = `<header id="timer-digital-header"><h1>interval</h1></header><div id="timer-digital-numbers">0 : 0</div><div id="timer-digital-button-div"></div>`

    const timerButtonDiv: HTMLDivElement | null = document.querySelector(
      "#timer-digital-button-div"
    )

    if (timerButtonDiv) {
      // Start button
      const startButton: HTMLButtonElement = document.createElement("button")
      startButton.textContent = "START"
      startButton.setAttribute("class", "start-button")
      timerButtonDiv.appendChild(startButton)

      startButton.addEventListener("click", () => {
        timer.start()
      })
      // Pause button
      const stopButton: HTMLButtonElement = document.createElement("button")
      stopButton.textContent = "PAUSE"
      stopButton.setAttribute("class", "pause-button")
      timerButtonDiv.appendChild(stopButton)

      stopButton.addEventListener("click", () => {
        timer.pause()
      })
      // Reset button
      const resetButton: HTMLButtonElement = document.createElement("button")
      resetButton.textContent = "RESET"
      resetButton.setAttribute("class", "reset-button")
      timerButtonDiv.appendChild(resetButton)

      resetButton.addEventListener("click", () => {
        timer.reset()

        if (laptimerUl) {
          laptimerUl.innerHTML = ""
          lapTimerNumber = 0
        }
        timer.stop()
        const timerDigitalNumber: Element | null = document.querySelector(
          "#timer-digital-numbers"
        )
        if (timerDigitalNumber) {
          timerDigitalNumber.innerHTML = `0 : 0`
        }
      })
    }
    // lap timer button
    const laptimerUl: HTMLUListElement = document.createElement("ul")
    laptimerUl.setAttribute("class", "laptimerUl")
    section.appendChild(laptimerUl)
    const lapButton: HTMLButtonElement = document.createElement("button")
    lapButton.textContent = "LAP TIMER"
    lapButton.setAttribute("class", "lap-button")

    section.appendChild(lapButton)
    let lapTimerNumber: number = 0
    lapButton.addEventListener("click", () => {
      lapTimerNumber++
      const laptimerLi: HTMLElement = document.createElement("li")

      laptimerLi.innerHTML = `Lap ${lapTimerNumber} --- ${minuteCounter} : ${secondCounter}`
      laptimerUl.appendChild(laptimerLi)
    })

    return function stop(): void {
      timer.stop()
      section!.remove()
    }
  }
}
