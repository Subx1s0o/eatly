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

const goTopBtn = document.querySelector(".btn-up");

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.scrollY;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords / 2) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
}

function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -25); //другий аргумент - це швидкість скролу
    setTimeout(goTop, 0);
  }
}
