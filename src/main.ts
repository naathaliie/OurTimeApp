import "./scss/styles.scss";
import "./components/hamburgerMenu/hamburger";

const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
document.getElementById("app")?.appendChild(hamburger);
