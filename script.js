// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Popup flyer logic – SHOW EVERY TIME THE SITE OPENS
const promoOverlay = document.getElementById("promoOverlay");
const promoClose = document.getElementById("promoClose");

function openPromo() {
  if (promoOverlay) {
    promoOverlay.classList.add("active");
  }
}

function closePromo() {
  if (promoOverlay) {
    promoOverlay.classList.remove("active");
  }
}

if (promoOverlay) {
  window.addEventListener("load", () => {
    openPromo();
  });

  promoOverlay.addEventListener("click", (e) => {
    // click on dark background closes
    if (e.target === promoOverlay) {
      closePromo();
    }
  });
}

if (promoClose) {
  promoClose.addEventListener("click", (e) => {
    e.stopPropagation();
    closePromo();
  });
}


// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear.toString();
}

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Image fade-in effect
const fadeImages = document.querySelectorAll(".img-fade");
if (fadeImages.length) {
  fadeImages.forEach((img) => {
    const addLoaded = () => img.classList.add("loaded");

    if (img.complete) {
      // already loaded (from cache)
      addLoaded();
    } else {
      img.addEventListener("load", addLoaded);
    }
  });
}
