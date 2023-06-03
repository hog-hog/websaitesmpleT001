/* script.js */

// ボタンをクリックしたときの画像のシフト動作を実装します
document.getElementById('button1').addEventListener('click', function() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.getElementsByClassName('gallery-image'));
    const firstImageSrc = images[0].src;

    // 左シフト
    for (let i =0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
    }

    images[images.length - 1].src = firstImageSrc;
});

document.getElementById('button2').addEventListener('click', function() {
    const gallery = document.getElementById('gallery');
    const images = Array.from(gallery.getElementsByClassName('gallery-image'));
    const lastImageSrc = images[images.length - 1].src;

    // 右シフト
    for (let i = images.length - 1; i > 0; i--) {
        images[i].src = images[i - 1].src;
    }

    images[0].src = lastImageSrc;
});

// 画像をクリックしたときの大きく表示と元に戻る動作を実装します
const galleryImages = Array.from(document.getElementsByClassName('gallery-image'));
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        if (this.className === 'gallery-image') {
            this.className = 'gallery-image enlarged';
        } else {
            this.className = 'gallery-image';
        }
    });
});
