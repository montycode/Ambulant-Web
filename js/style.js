function openTab(evt, tabName) {
    // Declaramos variables
    var i, tabcontent, tablinks;
  
    // Seleccionamos los elementos con class="tabcontent" y los ocultamos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Seleccionamos los elementos con class="tablinks" y les quitamos la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" this", "");
    }
  
    // Mostramos la tab seleccionada, y añadimos la clase "this" al boton que abre la tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " this";
    
    document.getElementById("defaultOpen").click();
  }


