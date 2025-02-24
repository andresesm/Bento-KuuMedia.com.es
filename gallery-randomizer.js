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

    // Función para seleccionar una imagen aleatoria y agregarle la clase 'active'
    function changeImageRandomly() {
        const allImages = galleryContainer.querySelectorAll('img');
        
        // Ocultar todas las imágenes
        allImages.forEach(img => {
            img.classList.remove('active');
        });

        // Seleccionar una imagen aleatoria
        const randomIndex = Math.floor(Math.random() * allImages.length);
        const randomImage = allImages[randomIndex];
        
        // Mostrar la imagen seleccionada
        randomImage.classList.add('active');
    }

    // Inicializar
    loadImages();
    changeImageRandomly(); // Mostrar imagen inicial aleatoria
    setInterval(changeImageRandomly, 2000); // Cambia la imagen cada 2 segundos
});