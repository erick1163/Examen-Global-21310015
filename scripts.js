// Menú desplegable para navegación en pantallas pequeñas
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

// Slider de la página de inicio
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos

// Validación de formulario en la página de contacto
document.querySelector('form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Mensaje enviado correctamente.');
    }
});
