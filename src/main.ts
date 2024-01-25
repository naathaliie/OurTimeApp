import "./scss/styles.scss";
import "./components/hamburgerMenu/hamburger";
import { loadingScreen } from "./components/loadingscreen/loadingscreen";

// Start the loading screen
// Start the loading screen
let stopLoadingScreen = loadingScreen();
// Stop the loading screen after 3 seconds and then set the timer
setTimeout(() => {
  stopLoadingScreen();
}, 3000);
