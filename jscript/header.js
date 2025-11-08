(function() {
  const header = document.querySelector('.main-header');
  const spacer = document.querySelector('.spacer');
  let ticking = false;
  let lastState = false;

  function update() {
    const y = window.scrollY;

    if (!lastState && y > 80) {
      // al bajar: transición normal
      header.classList.add('scrolled');
      spacer.style.backgroundColor = '#331814';
      lastState = true;
    } 
    else if (lastState && y < 20) {
      // al subir: transición casi instantánea
      header.classList.remove('scrolled');
      spacer.style.backgroundColor = '#482420';
      lastState = false;
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });
})();
