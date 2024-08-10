const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg'
];

let currentIndex = 0;
let interval = 3000;  // Default 3 seconds
let playing = true;
let slideshowInterval = setInterval(nextSlide, interval);

function showSlide(index) {
    document.getElementById('slide').src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function togglePlayPause() {
    if (playing) {
        clearInterval(slideshowInterval);
        document.getElementById('playPauseButton').textContent = 'Play';
    } else {
        slideshowInterval = setInterval(nextSlide, interval);
        document.getElementById('playPauseButton').textContent = 'Pause';
    }
    playing = !playing;
}

function changeInterval() {
    interval = parseInt(document.getElementById('timingSelect').value);
    if (playing) {
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, interval);
    }
}
