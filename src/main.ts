import "./scss/styles.scss";
import "./components/hamburgerMenu/hamburger";
import { timerDigital } from "./timerdigital";

timerDigital();
const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
document.getElementById("app")?.appendChild(hamburger);
