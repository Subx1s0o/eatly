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

(() => {
  const mobileMenu = document.querySelector(".burger-overlay ");
  const openMenuBtn = document.querySelector(".burger_menu");
  const closeMenuBtn = document.querySelector(".burg-close");
  const closeMenuLink = document.querySelectorAll(".nav-li-burg");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

function RegisterLocate() {
  window.location.href = "sign-up.html";
}

function LoginLocate() {
  window.location.href = "sign-in.html";
}
