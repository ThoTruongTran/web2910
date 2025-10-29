const ttt_form = document.getElementById("ttt_registrationForm");
const ttt_emailInput = document.getElementById("ttt_email");
const ttt_passwordInput = document.getElementById("ttt_password");
const ttt_addressInput = document.getElementById("ttt_address");
const ttt_cityInput = document.getElementById("ttt_city");
const ttt_stateInput = document.getElementById("ttt_state");
const ttt_zipInput = document.getElementById("ttt_zip");

function ttt_validateEmail(email) {
  const ttt_emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return ttt_emailRegex.test(email);
}

function ttt_validatePassword(password) {
  return password.length >= 6;
}

function ttt_validateRequired(value) {
  return value.trim() !== "";
}

function ttt_showError(inputId, errorId) {
  const ttt_input = document.getElementById(inputId);
  const ttt_error = document.getElementById(errorId);
  ttt_input.classList.add("ttt_error");
  ttt_error.classList.add("ttt_show");
}

function ttt_hideError(inputId, errorId) {
  const ttt_input = document.getElementById(inputId);
  const ttt_error = document.getElementById(errorId);
  ttt_input.classList.remove("ttt_error");
  ttt_error.classList.remove("ttt_show");
}

ttt_emailInput.addEventListener("blur", function () {
  if (!ttt_validateEmail(this.value)) {
    ttt_showError("ttt_email", "ttt_emailError");
  } else {
    ttt_hideError("ttt_email", "ttt_emailError");
  }
});

ttt_passwordInput.addEventListener("blur", function () {
  if (!ttt_validatePassword(this.value)) {
    ttt_showError("ttt_password", "ttt_passwordError");
  } else {
    ttt_hideError("ttt_password", "ttt_passwordError");
  }
});

ttt_addressInput.addEventListener("blur", function () {
  if (!ttt_validateRequired(this.value)) {
    ttt_showError("ttt_address", "ttt_addressError");
  } else {
    ttt_hideError("ttt_address", "ttt_addressError");
  }
});

ttt_cityInput.addEventListener("blur", function () {
  if (!ttt_validateRequired(this.value)) {
    ttt_showError("ttt_city", "ttt_cityError");
  } else {
    ttt_hideError("ttt_city", "ttt_cityError");
  }
});

ttt_stateInput.addEventListener("change", function () {
  if (!ttt_validateRequired(this.value)) {
    ttt_showError("ttt_state", "ttt_stateError");
  } else {
    ttt_hideError("ttt_state", "ttt_stateError");
  }
});

ttt_zipInput.addEventListener("blur", function () {
  if (!ttt_validateRequired(this.value)) {
    ttt_showError("ttt_zip", "ttt_zipError");
  } else {
    ttt_hideError("ttt_zip", "ttt_zipError");
  }
});

ttt_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let ttt_isValid = true;

  if (!ttt_validateEmail(ttt_emailInput.value)) {
    ttt_showError("ttt_email", "ttt_emailError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_email", "ttt_emailError");
  }

  if (!ttt_validatePassword(ttt_passwordInput.value)) {
    ttt_showError("ttt_password", "ttt_passwordError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_password", "ttt_passwordError");
  }

  if (!ttt_validateRequired(ttt_addressInput.value)) {
    ttt_showError("ttt_address", "ttt_addressError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_address", "ttt_addressError");
  }

  if (!ttt_validateRequired(ttt_cityInput.value)) {
    ttt_showError("ttt_city", "ttt_cityError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_city", "ttt_cityError");
  }

  if (!ttt_validateRequired(ttt_stateInput.value)) {
    ttt_showError("ttt_state", "ttt_stateError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_state", "ttt_stateError");
  }

  if (!ttt_validateRequired(ttt_zipInput.value)) {
    ttt_showError("ttt_zip", "ttt_zipError");
    ttt_isValid = false;
  } else {
    ttt_hideError("ttt_zip", "ttt_zipError");
  }

  if (ttt_isValid) {
    alert("Form submitted successfully!\nEmail: " + ttt_emailInput.value);
  }
});
