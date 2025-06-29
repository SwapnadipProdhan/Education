// ====================
// Mobile Menu Handling
// ====================
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

// Open mobile menu
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenuOverlay.classList.remove("hidden");
});

// Close mobile menu
function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenuOverlay.classList.add("hidden");
}
closeMenuButton.addEventListener("click", closeMobileMenu);
mobileMenuOverlay.addEventListener("click", closeMobileMenu);

// ====================
// Mobile Dropdowns
// ====================
const mobileMadhyamikButton = document.getElementById(
  "mobile-madhyamik-button"
);
const mobileMadhyamikMenu = document.getElementById("mobile-madhyamik-menu");
const mobileOtherClassesButton = document.getElementById(
  "mobile-other-classes-button"
);
const mobileOtherClassesMenu = document.getElementById(
  "mobile-other-classes-menu"
);
const mobileCoursesButton = document.getElementById("mobile-courses-button");
const mobileCoursesMenu = document.getElementById("mobile-courses-menu");

// Toggle Madhyamik menu
mobileMadhyamikButton.addEventListener("click", () => {
  mobileMadhyamikMenu.classList.toggle("hidden");
  mobileOtherClassesMenu.classList.add("hidden");
  mobileCoursesMenu.classList.add("hidden");
  const arrow = mobileMadhyamikButton.querySelector("svg");
  arrow.classList.toggle("rotate-180");
});

// Toggle Other Classes menu
mobileOtherClassesButton.addEventListener("click", () => {
  mobileOtherClassesMenu.classList.toggle("hidden");
  mobileMadhyamikMenu.classList.add("hidden");
  mobileCoursesMenu.classList.add("hidden");
  const arrow = mobileOtherClassesButton.querySelector("svg");
  arrow.classList.toggle("rotate-180");
});

// Toggle Class 6-9 menu in mobile
const mobileClass69Button = document.getElementById("mobile-class-6-9-button");
const mobileClass69Menu = document.getElementById("mobile-class-6-9-menu");

mobileClass69Button.addEventListener("click", () => {
  mobileClass69Menu.classList.toggle("hidden");
  const arrow = mobileClass69Button.querySelector("svg");
  arrow.classList.toggle("rotate-180");
});

// Toggle Courses menu
mobileCoursesButton.addEventListener("click", () => {
  mobileCoursesMenu.classList.toggle("hidden");
  mobileMadhyamikMenu.classList.add("hidden");
  mobileOtherClassesMenu.classList.add("hidden");
});

// ====================
// Swiper Carousel
// ====================
new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// ====================
// Mobile Courses Dropdown
// ====================
const coursesDropdownButton = document.getElementById(
  "courses-dropdown-button"
);
const coursesList = document.getElementById("courses-list");
const dropdownIcon = coursesDropdownButton.querySelector("svg");

coursesDropdownButton.addEventListener("click", () => {
  coursesList.classList.toggle("hidden");
  dropdownIcon.classList.toggle("rotate-180");
});

// ====================
// Dark Mode Toggle
// ====================

const druck = document.querySelector(".druck");
const navbar = document.querySelector(".nav-bar");
// const mobileMenu = document.getElementById("mobile-menu");
// const aside = document.querySelector("aside.hero-aside");

// SVG icons
const sunIcon = `<img src="./src/assets/img/sun.svg" alt="Sun" class="w-6 h-6" />`;

const moonIcon = `<img src="./src/assets/img/moon.svg" alt="Moon" class="w-6 h-6" />`;

// Use localStorage to persist user preference
let darkMode =
  localStorage.getItem("darkMode") === "true" ||
  (localStorage.getItem("darkMode") === null &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

function applyTheme() {
  document.body.classList.toggle("dark-mode", darkMode);
  druck.innerHTML = darkMode ? sunIcon : moonIcon;
  localStorage.setItem("darkMode", darkMode);
}

druck.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme();
});

// Initial call
applyTheme();

const input = document.getElementById("searchInput");
const resetBtn = document.getElementById("resetBtn");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    resetBtn.classList.remove("hidden");
  } else {
    resetBtn.classList.add("hidden");
  }
});

resetBtn.addEventListener("click", () => {
  resetBtn.classList.add("hidden");
});

// ====================
// Mobile Search Handling
// ====================
const mobileSearchButton = document.getElementById("mobile-search-button");
const mobileSearchContainer = document.getElementById(
  "mobile-search-container"
);
const closeMobileSearch = document.getElementById("close-mobile-search");
const mobileSearchInput = document.getElementById("mobile-search-input");

// Open mobile search
mobileSearchButton.addEventListener("click", () => {
  mobileSearchContainer.classList.remove("scale-0");
  mobileSearchContainer.classList.add("scale-100");
  mobileSearchInput.focus();
});

// Close mobile search
function closeSearch() {
  mobileSearchContainer.classList.remove("scale-100");
  mobileSearchContainer.classList.add("scale-0");
  mobileSearchInput.value = ""; // Clear input
}

closeMobileSearch.addEventListener("click", closeSearch);

// Close search on escape key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !mobileSearchContainer.classList.contains("-translate-y-full")
  ) {
    closeSearch();
  }
});

// Handle search input
mobileSearchInput.addEventListener("input", (e) => {
  // Add your search logic here
  console.log("Searching for:", e.target.value);
});

// Close mobile menu on window resize if screen width is larger than 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMobileMenu();
  }
});

// Mcq Quiz Page Script
function showAnswer(answerId) {
  const answerElement = document.getElementById(answerId);
  answerElement.classList.toggle("hidden");
}
