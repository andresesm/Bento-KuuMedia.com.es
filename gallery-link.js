if (window.innerWidth > 768) {
  // Solo ejecuta el JS si el ancho es mayor que 768px
  // Esto asegura que el JS solo se ejecute en pantallas grandes (desktops/tablets)
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("galleryClick")
      .addEventListener("click", function () {
        window.open(
          "https://drive.google.com/drive/folders/1OPHCBHYtgFTd7uuETCy5FNEFxg291lKj?usp=drive_link",
          "_blank"
        ); // Cambia esto por tu enlace
      });
  });
}

/*document.getElementById('galleryClick').addEventListener('click', function() {
    window.open('https://drive.google.com/drive/folders/1OPHCBHYtgFTd7uuETCy5FNEFxg291lKj?usp=drive_link', '_blank'); // Cambia esto por tu enlace
});*/
