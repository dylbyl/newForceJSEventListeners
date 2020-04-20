const jordanModeButton = document.querySelector("#jordan-mode-button");

jordanModeButton.addEventListener("click", function () {
  console.log("button clicked");
  document.querySelector("form").classList.toggle("jordan-mode");
});

// Mirror Mirror in the Code

const messageInputField = document.querySelector("#message");

messageInputField.addEventListener("keyup", function () {
  messageInput = messageInputField.value;

  document.querySelector("#article-1").textContent = messageInput;
  document.querySelector("#article-2").textContent = messageInput;
});
// End of practice

// const flightHandlerFunction = () => {
//   const flightSection = document.querySelector("#flight");
//   console.log(flightSection);
//   if (flightSection.classList.contains("disabled")) {
//     flightSection.classList.add("enabled");
//     flightSection.classList.remove("disabled");
//   } else {
//     flightSection.classList.remove("enabled");
//     flightSection.classList.add("disabled");
//   }
// };

// const mindreadingHandlerFunction = () => {
//   const mindreadingSection = document.querySelector("#mindreading");
//   console.log(mindreadingSection);
//   if (mindreadingSection.classList.contains("disabled")) {
//     mindreadingSection.classList.add("enabled");
//     mindreadingSection.classList.remove("disabled");
//   } else {
//     mindreadingSection.classList.remove("enabled");
//     mindreadingSection.classList.add("disabled");
//   }
// };

// const xrayHandlerFunction = () => {
//   const xraySection = document.querySelector("#xray");
//   console.log(xraySection);
//   if (xraySection.classList.contains("disabled")) {
//     xraySection.classList.add("enabled");
//     xraySection.classList.remove("disabled");
//   } else {
//     xraySection.classList.remove("enabled");
//     xraySection.classList.add("disabled");
//   }
// };

const enableAllPowers = () => {
  const powers = document.querySelectorAll(".power");
  for (let i = 0; i < powers.length; i++) {
    powers[i].classList.add("enabled");
    powers[i].classList.remove("disabled");
  }
};

const disableAllPowers = () => {
  const powers = document.querySelectorAll(".power");
  for (let i = 0; i < powers.length; i++) {
    powers[i].classList.add("disabled");
    powers[i].classList.remove("enabled");
  }
};

const enableOnePower = () => {
  const buttonName = event.target.id.split("-");
  for (let i = 0; i < buttonName.length; i++) {
    if (
      buttonName[i] == "flight" ||
      buttonName[i] == "mindreading" ||
      buttonName[i] == "xray"
    ) {
      const powerSection = document.querySelector(`#${buttonName[i]}`);
      console.log(powerSection);
      if (powerSection.classList.contains("disabled")) {
        powerSection.classList.add("enabled");
        powerSection.classList.remove("disabled");
      } else {
        powerSection.classList.remove("enabled");
        powerSection.classList.add("disabled");
      }
    }
  }
};

document
  .querySelector("#activate-flight")
  .addEventListener("click", enableOnePower);
document
  .querySelector("#activate-mindreading")
  .addEventListener("click", enableOnePower);
document
  .querySelector("#activate-xray")
  .addEventListener("click", enableOnePower);
document
  .querySelector("#activate-all")
  .addEventListener("click", enableAllPowers);
document
  .querySelector("#deactivate-all")
  .addEventListener("click", disableAllPowers);
