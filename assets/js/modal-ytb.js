// Video Modal Functions
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    videoFrame.src = videoUrl;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');

    videoFrame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when pressing ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeVideoModal();
    }
});