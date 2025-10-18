const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll("[data-scroll]");
const sections = document.querySelectorAll("[data-section]");

const closeNav = () => {
  document.body.classList.remove("nav-open");
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
};

if (navToggle && nav) {ch
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

const observerOptions = {
  root: null,
  threshold: 0.4,
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const activeId = `#${entry.target.id}`;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === activeId) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    });
  });
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);

sections.forEach((section) => observer.observe(section));

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll(".skill-bar").forEach((bar) => {
  const progress = bar.dataset.progress || "0";
  bar.style.setProperty("--progress", `${progress}%`);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  if (window.scrollY > 12) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});
