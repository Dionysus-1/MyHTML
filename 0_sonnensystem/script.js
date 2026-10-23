const current = decodeURIComponent(
  location.pathname.split("/").pop() || "index.html",
);
document.querySelectorAll("nav a").forEach((a) => {
  if (a.getAttribute("href") === current) {
    a.setAttribute("aria-current", "page");
    if (matchMedia("(max-width:650px)").matches)
      a.scrollIntoView({ block: "nearest", inline: "center" });
  }
});
const progress = document.querySelector(".progress");
function update() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
}
addEventListener("scroll", update, { passive: true });
addEventListener("resize", update);
update();
document.querySelectorAll(".hero-visual img").forEach((img) => {
  img.addEventListener(
    "error",
    () => {
      img.hidden = true;
      img.parentElement.classList.add("image-missing");
      const note = document.createElement("p");
      note.className = "image-note";
      note.textContent = "Bild: " + img.getAttribute("src");
      img.parentElement.append(note);
    },
    { once: true },
  );
});
