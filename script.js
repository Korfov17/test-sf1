window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 4500); // Tiempo total de la animación
});
