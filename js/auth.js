const button = document.querySelector(".seepass");
const icon = button.querySelector("use");
const passwordInput = document.getElementById("passwordInput");

button.addEventListener("click", function () {
  const currentIcon = icon.getAttribute("href");
  if (currentIcon === "./images/icon.svg#icon-eye-blocked") {
    icon.setAttribute("href", "./images/icon.svg#icon-eye");
    passwordInput.type = "text";
  } else {
    icon.setAttribute("href", "./images/icon.svg#icon-eye-blocked");
    passwordInput.type = "password";
  }
});
