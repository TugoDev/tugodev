document.getElementById("clickBtn").addEventListener("click", function () {
  alert("¡Hola desde TuGoDev!");
});

// Mostrar animaciones al hacer scroll
const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// Validación simple de formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
  this.reset();
});
