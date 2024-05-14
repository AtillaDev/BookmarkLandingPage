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

// Navbar sticky

const navbar = document.getElementById("nav");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBehavior() {
  // console.log(sticky);
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", navBehavior);

const tabElement = document.getElementById("tabs");
const tabs = tabElement.children;

// console.log(Array.from(tabs));

// console.log(tab);

tabElement.addEventListener("click", (e) => {
  // console.log("h");

  if (e.target != tabElement) {
    Array.from(tabs).forEach((child) => {
      // console.log(child);
      child.classList.remove("features__tabs-selected");
    });
    e.target.classList.add("features__tabs-selected");
  }
});
// tabs.childNodes.forEach((child) => console.log(child));
