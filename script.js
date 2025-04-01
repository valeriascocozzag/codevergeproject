document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.');
    // Reiniciar el formulario
    this.reset();
  });

  // Mostrar elementos al hacer scroll 
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
window.addEventListener('load', aparecer); //