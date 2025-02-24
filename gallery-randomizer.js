document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-images2');
    const images = [
        './assets/insidegallery/rzgallery(1).webp',
        './assets/insidegallery/rzgallery(2).webp',
        './assets/insidegallery/rzgallery(3).webp',
        './assets/insidegallery/rzgallery(4).webp',
        './assets/insidegallery/rzgallery(5).webp',
        './assets/insidegallery/rzgallery(6).webp',
        './assets/insidegallery/rzgallery(7).webp',
        './assets/insidegallery/rzgallery(8).webp',
        './assets/insidegallery/rzgallery(9).webp',
        './assets/insidegallery/rzgallery(10).webp',
        './assets/insidegallery/rzgallery(11).webp',
        './assets/insidegallery/rzgallery(12).webp',
        './assets/insidegallery/rzgallery(13).webp',
        './assets/insidegallery/rzgallery(14).webp',
        './assets/insidegallery/rzgallery(15).webp',
        './assets/insidegallery/rzgallery(16).webp',
        './assets/insidegallery/rzgallery(17).webp',
        './assets/insidegallery/rzgallery(18).webp',
        './assets/insidegallery/rzgallery(19).webp',
        './assets/insidegallery/rzgallery(20).webp',
        './assets/insidegallery/rzgallery(21).webp',
        './assets/insidegallery/rzgallery(22).webp',
        './assets/insidegallery/rzgallery(23).webp',
        './assets/insidegallery/rzgallery(24).webp',
        './assets/insidegallery/rzgallery(25).webp',
        './assets/insidegallery/rzgallery(26).webp',
        './assets/insidegallery/rzgallery(27).webp',
        './assets/insidegallery/rzgallery(28).webp',
        './assets/insidegallery/rzgallery(29).webp'
    ];

    // Añadir las imágenes al contenedor de la galería
    images.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'Image in grid';
        galleryContainer.appendChild(imgElement);
    });

    // Función para cambiar la imagen aleatoriamente
    let currentIndex = 0;
    const imageElements = galleryContainer.querySelectorAll('img');
    
    function changeImage() {
        // Ocultar la imagen actual
        imageElements[currentIndex].classList.remove('active');
        
        // Cambiar a una nueva imagen aleatoria
        currentIndex = Math.floor(Math.random() * imageElements.length);

        // Mostrar la nueva imagen
        imageElements[currentIndex].classList.add('active');
    }

    // Inicializa la primera imagen
    imageElements[currentIndex].classList.add('active');
    
    // Cambiar imagen cada 4 segundos
    setInterval(changeImage, 4000);
});
