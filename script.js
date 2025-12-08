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

// Popup flyer logic
const promoOverlay = document.getElementById("promoOverlay");
const promoClose = document.getElementById("promoClose");

// Show popup only if not closed before in this browser
function shouldShowPromo() {
  return !localStorage.getItem("lions_tkd_promo_closed");
}

function openPromo() {
  if (promoOverlay) {
    promoOverlay.classList.add("active");
  }
}

function closePromo() {
  if (promoOverlay) {
    promoOverlay.classList.remove("active");
  }
  localStorage.setItem("lions_tkd_promo_closed", "1");
}

if (promoOverlay && promoClose) {
  window.addEventListener("load", () => {
    if (shouldShowPromo()) {
      openPromo();
    }
  });

  promoClose.addEventListener("click", closePromo);

  // Click outside modal to close
  promoOverlay.addEventListener("click", (e) => {
    if (e.target === promoOverlay) {
      closePromo();
    }
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear.toString();
}
