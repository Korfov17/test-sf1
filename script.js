
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".progress-bar");
  const loader = document.getElementById("loader-screen");
  const mainContent = document.getElementById("main-content");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 1;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      loader.style.display = "none";
      mainContent.style.display = "block";
    }
  }, 50);
});
