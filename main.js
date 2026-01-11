// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
  });

  // Close mobile nav on click
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => (mobileNav.style.display = "none"));
  });
}
