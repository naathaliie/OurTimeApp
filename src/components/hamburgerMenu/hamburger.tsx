// Step 1: Create a button for the hamburger menu
let hamburgerButton = document.createElement("button");
hamburgerButton.id = "hamburgerButton";
hamburgerButton.innerHTML = "☰"; // Unicode character for hamburger menu

// Step 2: Create a div for the menu options
let menuOptions = document.createElement("div");
menuOptions.id = "menuOptions";
menuOptions.style.display = "none"; // Initially hidden
menuOptions.innerHTML = `
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
`;

// Add the elements to the body
document.body.appendChild(hamburgerButton);
document.body.appendChild(menuOptions);

// Step 3: Add event listener to the hamburger button
hamburgerButton.addEventListener("click", () => {
  // Step 4: In the event handler, toggle the visibility of the menu options
  if (menuOptions.style.display === "none") {
    menuOptions.style.display = "block";
  } else {
    menuOptions.style.display = "none";
  }
});
