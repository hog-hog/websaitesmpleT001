/* script.js */

window.onload = function() {
    var images = [
        "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(1).jpg",
        "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(2).jpg",
        "https://meek-cactus-94d5bb.netlify.app/Dunkleosteus(3).jpg"
    ];
    var currentIndex = 0;

    function updateImages() {
        document.getElementById('img1').src = images[currentIndex % images.length];
        document.getElementById('img2').src = images[(currentIndex + 1) % images.length];
        document.getElementById('img3').src = images[(currentIndex + 2) % images.length];
    }

    document.getElementById('shift-left').addEventListener('click', function() {
        currentIndex--;
        updateImages();
    });

    document.getElementById('shift-right').addEventListener('click', function() {
        currentIndex++;
        updateImages();
    });

    var modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.maxWidth = '90%';
    modal.style.maxHeight = '90%';
    document.body.appendChild(modal);

    function showModal(imgSrc) {
        var img = document.createElement('img');
        img.src = imgSrc;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        modal.appendChild(img);
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.innerHTML = '';
        modal.style.display = 'none';
    }

    modal.addEventListener('click', hideModal);

    document.getElementById('img1').addEventListener('click', function() {
        showModal(this.src);
    });

    document.getElementById('img2').addEventListener('click', function() {
        showModal(this.src);
    });

    document.getElementById('img3').addEventListener('click', function() {
        showModal(this.src);
    });
}

