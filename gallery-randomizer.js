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

    let currentIndex = 0; // Variable para hacer el seguimiento de la imagen actual

    // Función para cargar las imágenes en el contenedor
    function loadImages() {
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            img.classList.add('gallery-image');
            galleryContainer.appendChild(img);
        });
    }

    // Función para cambiar la imagen en orden
    function changeImageInOrder() {
        const allImages = galleryContainer.querySelectorAll('img');

        // Eliminar la clase 'active' de todas las imágenes
        allImages.forEach(img => {
            img.classList.remove('active');
        });

        // Hacer visible la imagen en el índice actual
        const currentImage = allImages[currentIndex];
        currentImage.classList.add('active');

        // Avanzar al siguiente índice de la imagen, reiniciando si llega al final
        currentIndex = (currentIndex + 1) % allImages.length;
    }

    // Inicializar
    loadImages(); // Cargar las imágenes en el contenedor
    changeImageInOrder(); // Mostrar la primera imagen

    // Cambiar la imagen cada 2 segundos
    setInterval(changeImageInOrder, 2000);
});
