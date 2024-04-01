// const BurgerButtonOpen = document.getElementById("burger-button-open");

// const BurgerButtonClose = document.getElementById("burger-button-close");

// const BurgerOverlay = document.getElementById("burger-menu");

// const BodyFlow = document.querySelector("body");

// BurgerButtonOpen.addEventListener("click", () => {
//   BurgerOverlay.classList.toggle("is-open");
//   BodyFlow.classList.toggle("unscroll");
// });

// BurgerButtonClose.addEventListener("click", () => {
//   BurgerOverlay.classList.toggle("is-open");
//   BodyFlow.classList.toggle("unscroll");
// });
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

    const scrollLockMethod = isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll"; // Переключение метода в зависимости от состояния меню
    bodyScrollLock[scrollLockMethod](document.body);
  };

  closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закрыть мобильное меню на более широких экранах при изменении ориентации устройства
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
