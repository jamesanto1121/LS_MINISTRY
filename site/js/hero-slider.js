// Hero Slider Logic with Progress Bar

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.hc-track');
  const dotsContainer = document.querySelector('.hc-dots');
  const progressBar = document.querySelector('.hc-progress-bar');
  const prevBtn = document.querySelector('.hc-prev');
  const nextBtn = document.querySelector('.hc-next');
  
  if (!track) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;
  let intervalId;
  let startTime;
  const SLIDE_DURATION = 5000; // 5 seconds

  // Initialize Dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-secondary-light w-4' : 'bg-white/50 hover:bg-white'}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateSlider() {
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
        slide.style.opacity = '1';
        slide.style.zIndex = '10';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.replace('bg-white/50', 'bg-secondary-light');
        dot.classList.replace('w-2', 'w-4');
      } else {
        dot.classList.replace('bg-secondary-light', 'bg-white/50');
        dot.classList.replace('w-4', 'w-2');
      }
    });
  }

  function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / SLIDE_DURATION, 1);
    
    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`;
    }

    if (progress < 1) {
      requestAnimationFrame(animateProgress);
    } else {
      nextSlide();
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetTimer();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetTimer();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetTimer();
  }

  function resetTimer() {
    cancelAnimationFrame(intervalId);
    startTime = null;
    if (progressBar) progressBar.style.width = '0%';
    intervalId = requestAnimationFrame(animateProgress);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); });

  // Start auto-play
  resetTimer();
});