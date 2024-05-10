// const navbar = document.getElementById("navbar");
const overlay = document.getElementById("navOverlay");

const menuBtn = document.getElementById("menuBtn");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");

const logo = document.getElementById("logo");
const logoWhite = document.getElementById("logoWhite");

menuBtn.addEventListener("click", (e) => {
  overlay.classList.toggle("not-visible");

  logo.classList.toggle("not-visible");
  logoWhite.classList.toggle("not-visible");

  hamburgerBtn.classList.toggle("not-visible");
  closeBtn.classList.toggle("not-visible");
});
