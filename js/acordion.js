var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Se encarga de modificar la clase "active",
    Para cambiar el aspecto del botón al exapndirlo */
    this.classList.toggle("active");

    /* Encargado de mostrar y ocultar el contenido del bloque */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}