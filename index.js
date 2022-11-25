const cardholderName = document.getElementById("cardholderName");
const errorMessageInputName = document.getElementById("errorMessageInputName");
const cardNumber = document.getElementById("cardNumber");
const errorMessageInputNumber = document.getElementById(
  "errorMessageInputNumber"
);
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const errorMessageInputDate = document.getElementById("errorMessageInputDate");
const cvcInput = document.getElementById("cvcInput");
const errorMessageInputCvc = document.getElementById("errorMessageInputCvc");
const submitButton = document.getElementById("submitButton");
const errorMessageSubmitButton = document.getElementById(
  "errorMessageSubmitButton"
);

const nameInputValidation = (e) => {
  if (!isNaN(e.key)) {
    e.preventDefault();
    errorMessageInputName.innerHTML =
      "Only name, no space, no symbols, and no numbers";
  } else {
    errorMessageInputName.innerHTML = "";
  }
};

const cardNumberValidation = () => {
  if (cardNumber.value.length < 16 || cardNumber.value.length > 16) {
    errorMessageInputNumber.innerHTML = "Must be 16 numbers";
  } else {
    errorMessageInputNumber.innerHTML = "";
  }
};

const dateValidation = () => {
  if (
    (monthInput.value < 1 || monthInput.value > 12) &&
    yearInput.value < 2022
  ) {
    errorMessageInputDate.innerHTML = "Current or future date";
  } else {
    errorMessageInputDate.innerHTML = "";
  }
};

const cvcVlidation = () => {
  if (cvcInput.value.length < 3 || cvcInput.value.length > 4) {
    errorMessageInputCvc.innerHTML = "Must be 3 or 4 numbers";
  } else {
    errorMessageInputCvc.innerHTML = "";
  }
};

const submitButtonValidation = () => {
  const name = cardholderName.value;
  const number = cardNumber.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const cvc = cvcInput.value;

  if (
    name === "" ||
    number === "" ||
    month === "" ||
    year === "" ||
    cvc === ""
  ) {
    errorMessageSubmitButton.style.color = "red";
    errorMessageSubmitButton.style.alignSelf = "center";
    errorMessageSubmitButton.style.marginBottom = "20px";
    errorMessageSubmitButton.innerHTML = "Can not be empty fields";
  } else {
    errorMessageSubmitButton.style.color = "green";
    errorMessageSubmitButton.style.alignSelf = "center";
    errorMessageSubmitButton.style.marginBottom = "20px";
    errorMessageSubmitButton.innerHTML = "We recieved your information";
  }
};

cardholderName.addEventListener("keydown", nameInputValidation);
cardNumber.addEventListener("input", cardNumberValidation);
monthInput.addEventListener("input", dateValidation);
yearInput.addEventListener("input", dateValidation);
cvcInput.addEventListener("input", cvcVlidation);
submitButton.addEventListener("click", submitButtonValidation);
