(() => {
  const heroTitle = document.querySelector('.hero__title');

  document.addEventListener('scroll', event => {
    if (window.scrollY > 0) {
      heroTitle.style.transform = `translateY(-${window.scrollY * 0.1}px)`;
    }
  });
})();
