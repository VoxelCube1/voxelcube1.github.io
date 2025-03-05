let currentIndex = 0;

function adjustCarouselAlignment() {
  const teamContainer = document.querySelector('.team-container');
  const items = document.querySelectorAll('.team-member');
  
  // Get the width of the carousel container
  const carouselWidth = document.querySelector('.carousel-container').offsetWidth;

  // Calculate the total width of the images in the current row
  const totalImagesWidth = items[0].offsetWidth * items.length;

  // Dynamically set justify-content to 'center' or 'flex-start' based on if images fit
  if (totalImagesWidth <= carouselWidth) {
    teamContainer.style.justifyContent = 'center'; // Center if they fit
  } else {
    teamContainer.style.justifyContent = 'flex-start'; // Left-align if they don't fit
  }
}

// JavaScript for moving the carousel
function moveCarousel(direction) {
  const teamContainer = document.querySelector('.team-container');
  const items = document.querySelectorAll('.team-member');
  const itemsPerRow = 4; // Limit to 4 items per row
  const totalItems = items.length;

  // Calculate how many "pages" of images exist
  const totalPages = Math.ceil(totalItems / itemsPerRow);

  // Adjust the currentIndex based on the direction
  if (direction === 'right') {
    // Move to the next page, wrapping around to the start if necessary
    currentIndex = (currentIndex + 1) % totalPages;
  } else {
    // Move to the previous page, wrapping around to the end if necessary
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
  }

  // Adjust the container's transform to move the carousel
  teamContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // After moving the carousel, adjust alignment
  adjustCarouselAlignment();
}

// Call adjustCarouselAlignment on page load to determine alignment
window.addEventListener('load', adjustCarouselAlignment);
