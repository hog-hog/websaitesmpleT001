let imgIndex = 0;
const imgUrls = [
  "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(1).jpg",
  "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(2).jpg",
  "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(3).jpg"
];

function nextImage() {
  imgIndex = (imgIndex + 1) % imgUrls.length;
  document.getElementById('main-img').src = imgUrls[imgIndex];
}

function prevImage() {
  imgIndex = (imgIndex - 1 + imgUrls.length) % imgUrls.length;
  document.getElementById('main-img').src = imgUrls[imgIndex];
}
