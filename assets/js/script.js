document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Active sidebar link on scroll
  const sectionIds = [
    "welcome",
    "services",
    "my-work",
    "design-experiments",
    "graphics-projects",
    "artwork",
  ];

  const sectionElements = sectionIds.map(id => document.getElementById(id));
  const sidebarLinks = document.querySelectorAll(".page-nav a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sectionElements.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSectionId = section.id;
        }
      }
    });

    sidebarLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
