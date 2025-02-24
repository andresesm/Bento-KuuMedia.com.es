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
