let currentIndex = 0;

const teamContainer = document.querySelector('.team-container');
const totalCards = document.querySelectorAll('.card').length;

function moveCarousel(direction) {
  if (direction === 'left') {
    currentIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
  } else if (direction === 'right') {
    currentIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
  }

  // Adjust the transform property to shift the carousel
  teamContainer.style.transform = `translateX(-${currentIndex * (350 + 32)}px)`; // 350px is the width of each card + 32px (margin)
}

// Add swipe functionality (optional for mobile)
let touchStartX = 0;

teamContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

teamContainer.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;

  if (touchStartX - touchEndX > 50) {
    moveCarousel('right');
  } else if (touchEndX - touchStartX > 50) {
    moveCarousel('left');
  }
});
