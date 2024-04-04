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
    window.scrollBy(0, -30); //другий аргумент - це швидкість скролу
    setTimeout(goTop, 0);
  }
}

gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({ defaults: { duration: 0.2 } });
const tl2 = gsap.timeline({ defaults: { duration: 0.3 } });

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  tl1
    .from(".logotype", { opacity: 0, x: -100 })
    .from(".nav-li", { opacity: 0, y: -40, stagger: 0.05 })
    .from(".header__buttons", { opacity: 0, x: 50 })
    .from(".hero-text-first", { opacity: 0, y: 30 })
    .from(".hero-title", { opacity: 0, x: -30 })
    .from(".hero__image", { opacity: 0, x: 40 })
    .from(".hero-text-second", { opacity: 0, x: -30 })
    .from(".hero__buttons", { opacity: 0, y: 40 })
    .from(".rating__content", { opacity: 0, y: 40 });

  tl1.from(".third-main-img", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".border-third",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl1.from(".third-text", {
    x: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".border-third",

      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl1.from(".restoraunts-h", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".restoraunts__container",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl1.from(".res_block_ul li:nth-child(1)", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".restoraunts__container",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl1.from(".res_block_ul li:nth-child(2)", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".restoraunts__container",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl1.from(".res_block_ul li:nth-child(3)", {
    x: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".restoraunts__container",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });
} else {
  tl2
    .from(".logotype", { opacity: 0, x: -100 })
    .from(".header__buttons", { opacity: 0, y: -50 })
    .from(".burger_menu", { opacity: 0, x: 30 })
    .from(".hero-text-first", { opacity: 0, y: -40 })
    .from(".hero-title", { opacity: 0, y: 30 })
    .from(".hero-text-second", { opacity: 0, y: 30 })
    .from(".hero__buttons", { opacity: 0, y: 40 })
    .from(".rating__content", { opacity: 0, y: 40 })
    .from(".hero__image", { opacity: 0, y: 40 });

  tl2.from(".third-main-img", {
    y: 50,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".border-third",

      start: "15% center ",
      end: "45% 40% ",
      scrub: true,
    },
  });

  tl2.from(".third-text", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".border-third",

      start: "-15% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl2.from(".restoraunts-h", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".restoraunts__container",
      start: "-50% center ",
      end: "15% 40% ",
      scrub: true,
    },
  });

  tl2.from(
    [
      ".res_block_ul li:nth-child(1)",
      ".res_block_ul li:nth-child(2)",
      ".res_block_ul li:nth-child(3)",
    ],
    {
      y: 150,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".restoraunts__container",
        start: "-10% center ",
        end: "15% 40% ",
        scrub: true,
      },
    }
  );
}
