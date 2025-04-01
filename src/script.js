document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1200);

  // Animaciones de scroll
  const faders = document.querySelectorAll('.fade-in');
  const aparecer = () => {
    faders.forEach(section => {
      const pos = section.getBoundingClientRect().top;
      const screen = window.innerHeight;
      if (pos < screen - 100) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', aparecer);
  window.addEventListener('load', aparecer);

  // Envío del formulario
  document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos!');
    this.reset();
  });
});