const BurgerButtonOpen = document.getElementById("burger-button-open");

const BurgerButtonClose = document.getElementById("burger-button-close");

const BurgerOverlay = document.getElementById("burger-menu");

const BodyFlow = document.querySelector("body");

BurgerButtonOpen.addEventListener("click", () => {
  BurgerOverlay.classList.toggle("is-open");
  BodyFlow.classList.toggle("unscroll");
});

BurgerButtonClose.addEventListener("click", () => {
  BurgerOverlay.classList.toggle("is-open");
  BodyFlow.classList.toggle("unscroll");
});
