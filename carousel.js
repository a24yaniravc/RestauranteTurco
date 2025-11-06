(() => {
  const track = document.getElementById('track');
  const slides = Array.from(track.children);
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dotsWrap = document.getElementById('dots');
  const carousel = document.getElementById('carousel');

  let index = 0;
  const total = slides.length;

  // Crear los indicadores (dots)
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ir al slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  // Función de actualización
  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  // Navegación básica
  const prevSlide = () => { index = (index - 1 + total) % total; update(); };
  const nextSlide = () => { index = (index + 1) % total; update(); };
  const goTo = (i) => { index = (i + total) % total; update(); };

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);

  // 🚫 Evitar arrastrar imágenes
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) img.draggable = false;
  });

  // Inicializar
  update();

  // (Opcional) Autoplay
  // const autoplay = setInterval(nextSlide, 5000);
  // carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
  // carousel.addEventListener('mouseleave', () => autoplay = setInterval(nextSlide, 5000));
})();
