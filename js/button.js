
    $(window).scroll(function(){
      if ($(this).scrollTop() >= 80) {        // Se activa al pasar 50px
          $('#return-to-top').fadeIn(200);    // Fade in de la flecha
      } else {
          $('#return-to-top').fadeOut(200);   // Fade out de la flecha
      }
    });
    $('#return-to-top').click(function() {      // Al dar click a la flecha
      $('body,html').animate({
          scrollTop : 0                       // Volver al inicio
      }, 500);
    });