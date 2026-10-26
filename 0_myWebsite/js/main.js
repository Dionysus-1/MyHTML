"use strict";
// ANPASSEN: Dieses Skript steuert nur Navigation, Filter und dezente Animationen.
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Menü schließen" : "Menü öffnen",
  );
  nav.classList.toggle("is-open", open);
});
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }),
);
function installFilters(attribute, itemSelector, itemAttribute) {
  document.querySelectorAll("[" + attribute + "]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute(attribute);
      document.querySelectorAll("[" + attribute + "]").forEach((b) => {
        const active = b === button;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(itemSelector).forEach((item) => {
        item.hidden =
          value !== "all" && item.getAttribute(itemAttribute) !== value;
      });
    });
  });
}
installFilters("data-skill-filter", ".skill[data-category]", "data-category");
installFilters(
  "data-project-filter",
  "[data-project-category]",
  "data-project-category",
);
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else
  document
    .querySelectorAll(".reveal")
    .forEach((el) => el.classList.add("is-visible"));
