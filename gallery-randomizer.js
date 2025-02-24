const images = [
    "./assets/insidegallery/rzgallery  (1).webp",
    "./assets/insidegallery/rzgallery  (2).webp",
    "./assets/insidegallery/rzgallery  (3).webp",
    "./assets/insidegallery/rzgallery  (4).webp",
    "./assets/insidegallery/rzgallery  (5).webp",
    "./assets/insidegallery/rzgallery  (6).webp",
    "./assets/insidegallery/rzgallery  (7).webp",
    "./assets/insidegallery/rzgallery  (8).webp",
    "./assets/insidegallery/rzgallery  (9).webp",
    "./assets/insidegallery/rzgallery  (10).webp",
    "./assets/insidegallery/rzgallery  (11).webp",
    "./assets/insidegallery/rzgallery  (12).webp",
    "./assets/insidegallery/rzgallery  (13).webp",
    "./assets/insidegallery/rzgallery  (14).webp",
    "./assets/insidegallery/rzgallery  (15).webp",
    "./assets/insidegallery/rzgallery  (16).webp",
    "./assets/insidegallery/rzgallery  (17).webp",
    "./assets/insidegallery/rzgallery  (18).webp",
    "./assets/insidegallery/rzgallery  (19).webp",
    "./assets/insidegallery/rzgallery  (20).webp",
    "./assets/insidegallery/rzgallery  (21).webp",
    "./assets/insidegallery/rzgallery  (22).webp",
    "./assets/insidegallery/rzgallery  (23).webp",
    "./assets/insidegallery/rzgallery  (24).webp",
    "./assets/insidegallery/rzgallery  (25).webp",
    "./assets/insidegallery/rzgallery  (26).webp",
    "./assets/insidegallery/rzgallery  (27).webp",
    "./assets/insidegallery/rzgallery  (28).webp",
    "./assets/insidegallery/rzgallery  (29).webp"
  ];
  
  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }
  
  let currentImageIndex = 0;
  
  // Selecciona todas las imágenes dentro de la galería
  const galleryImages = document.querySelectorAll('.gallery-images2 img');
  
  // Función para cambiar la imagen aleatoria
  function changeImage() {
    galleryImages.forEach((img, index) => {
      img.classList.remove('active');
    });
  
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Cambia la fuente de la imagen
    galleryImages[currentImageIndex].src = getRandomImage();
    galleryImages[currentImageIndex].classList.add('active');
  }
  
  // Cambiar imagen cada 2 segundos
  setInterval(changeImage, 2000);
  
  // Inicializa la galería con la primera imagen activa
  changeImage();  