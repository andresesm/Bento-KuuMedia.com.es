document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-images2');
    const images = [
        './assets/insidegallery/rzgallery  (1).webp',
        './assets/insidegallery/rzgallery  (2).webp',
        './assets/insidegallery/rzgallery  (3).webp',
        // ...continúa hasta la imagen 29
    ];

    // Función para mezclar las imágenes
    function shuffleImages(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambia los elementos
        }
        return arr;
    }

    // Aleatorizar las imágenes
    const shuffledImages = shuffleImages(images);

    // Crear y agregar las imágenes al contenedor
    shuffledImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Randomized image';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        galleryContainer.appendChild(img);
    });
});
