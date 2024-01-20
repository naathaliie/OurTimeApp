export const createCheckboxes = () => {
  let checkBoxContainer = document.createElement("div");
  checkBoxContainer.className = "checkBoxContainer";

  let checkBoxWrapper = document.createElement("div");
  checkBoxWrapper.className = "checkBoxWrapper";

  checkBoxContainer.appendChild(checkBoxWrapper);

  let checkBoxInterval = document.createElement("input");
  checkBoxInterval.type = "checkbox";
  checkBoxInterval.id = "checkBoxInterval";
  let intervalLabel = document.createElement("label");
  intervalLabel.htmlFor = "checkBoxInterval";
  intervalLabel.textContent = "Interval";
  checkBoxWrapper.appendChild(checkBoxInterval);
  checkBoxWrapper.appendChild(intervalLabel);

  let checkBoxWrapperSleep = document.createElement("div");
  checkBoxWrapperSleep.className = "checkBoxWrapper";
  checkBoxContainer.appendChild(checkBoxWrapperSleep);

  let checkBoxSleep = document.createElement("input");
  checkBoxSleep.type = "checkbox";
  checkBoxSleep.id = "checkBoxSleep";
  let sleepLabel = document.createElement("label");
  sleepLabel.htmlFor = "checkBoxSleep";
  sleepLabel.textContent = "Sleep 5 min";
  checkBoxWrapperSleep.appendChild(checkBoxSleep);
  checkBoxWrapperSleep.appendChild(sleepLabel);

  checkBoxInterval.addEventListener("click", function () {
    if (checkBoxInterval.checked) {
      checkBoxInterval.checked = true;
    }
  });

  checkBoxSleep.addEventListener("click", function () {
    if (checkBoxSleep.checked) {
      checkBoxSleep.checked = true;
    }
  });
  return { checkBoxContainer, checkBoxInterval, checkBoxSleep };
};
