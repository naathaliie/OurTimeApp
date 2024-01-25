export function loadingScreen() {
  const app: HTMLDivElement =
    document.querySelector<HTMLDivElement>(".mainBox")!;

  // Save the current content of the mainBox
  const currentContent = app.innerHTML;

  // Set the innerHTML of the mainBox to the loading screen HTML
  app.innerHTML = `<section class="loading-screen"><div id='loading-screen-loggo'><img src="./src/components/loadingscreen/poster.png" alt="logo" />
  </div></section>`;

  // Return a function that restores the original content
  return function stopLoadingScreen() {
    app.innerHTML = currentContent;
  };
}
