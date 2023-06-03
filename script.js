let images = [
    "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(1).jpg",
    "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(2).jpg",
    "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(3).jpg",
];

let imageIndex1 = [0, 1, 2];
let imageIndex2 = [0, 2, 1];

let currentImageIndex = 0;

let image1 = document.getElementById('image1');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

button1.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image1.src = images[imageIndex1[currentImageIndex]];
});

button2.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image1.src = images[imageIndex2[currentImageIndex]];
});

image1.addEventListener('click', function() {
    image1.classList.toggle('enlarged');
});



