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
        './assets/insidegallery/rzgallery(29).webp',
    ];

    let currentIndex = -1; // Para asegurar que empieza con un índice válido

    // Crea las imágenes y las coloca en el contenedor
    function loadImages() {
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            img.classList.add('inactive'); // Inicialmente no visible
            galleryContainer.appendChild(img);
        });
    }

    // Randomiza las imágenes
    function changeImageRandomly() {
        // Obtener todas las imágenes
        const allImages = galleryContainer.querySelectorAll('img');
        
        // Asegurarnos de que la clase active se elimine de la imagen anterior
        const currentActiveImage = allImages[currentIndex];
        if (currentActiveImage) {
            currentActiveImage.classList.remove('active');
        }

        // Escoge una imagen aleatoria distinta a la actual
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * allImages.length);
        } while (randomIndex === currentIndex); // Evitar mostrar la misma imagen

        // Establecer el nuevo índice
        currentIndex = randomIndex;

        // Mostrar la nueva imagen aleatoria
        const newActiveImage = allImages[currentIndex];
        newActiveImage.classList.add('active');
    }

    // Iniciar la galería
    loadImages();
    changeImageRandomly(); // Muestra la primera imagen aleatoria

    // Cambiar la imagen cada 2 segundos
    setInterval(changeImageRandomly, 2000); // Cambia cada 2 segundos
});