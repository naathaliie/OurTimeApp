export function loadingScreen(): void {
  const app: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".mainBox")!
  app.innerHTML = `<section class="loading-screen"><div id='loading-screen-loggo'><img src="../../dist/logo.svg" alt="logo" />
  <h1>For all your timing needs</h1>
  </div></section>`
}
