document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.');
    // Reiniciar el formulario
    this.reset();
  });