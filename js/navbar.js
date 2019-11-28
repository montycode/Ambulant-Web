// Cuando el usuario se desplaza por la página, ejecute myFunction
window.onscroll = function() {myFunction()};

// Obtiene el elemento "Navbar"
var navbar = document.getElementById("navbar");

// Obtener la posición de desplazamiento de la barra de navegación
var sticky = navbar.offsetTop;

// Añade la clase sticky a la navbar cuando hacemos scroll. Remueve la clase cuando salimos de la zona de scroll
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
