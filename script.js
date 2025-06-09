


const carousel = document.getElementById('spotlights-carousel');
const leftBtn = document.getElementById('spotlight-left');
const rightBtn = document.getElementById('spotlight-right');

if (carousel && leftBtn && rightBtn) {
  
  const cards = Array.from(carousel.children);
  let startIdx = 0;
  const visibleCount = 3;
  const total = cards.length;

  function updateCarousel() {

    while (carousel.firstChild) {
      carousel.removeChild(carousel.firstChild);
    }

    for (let i = 0; i < visibleCount; i++) {
      const idx = (startIdx + i) % total;
      carousel.appendChild(cards[idx].cloneNode(true));
    }
  }

  leftBtn.addEventListener('click', () => {
    startIdx = (startIdx - 1 + total) % total;
    updateCarousel();
  });

  rightBtn.addEventListener('click', () => {
    startIdx = (startIdx + 1) % total;
    updateCarousel();
  });

  updateCarousel();
}
