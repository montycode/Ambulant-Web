  //Obtenemos el botón:
  mybutton = document.getElementById("myBtn");

  // Cuando el usuario baja 20px mostramos el botón
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // CUando el usuario da click sobre el botón volvemos al inicio de la página
  function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
  }