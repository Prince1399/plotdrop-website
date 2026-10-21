// PlotDrop site - carousel + footer year. No tracking, no forms, no backend.
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var dotsWrap = document.querySelector('.dots');
  var idx = 0;

  if (slides.length && dotsWrap) {
    slides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'dot-btn';
      d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      d.addEventListener('click', function () { show(i); });
      dotsWrap.appendChild(d);
    });
    var dots = dotsWrap.querySelectorAll('.dot-btn');

    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    }

    var prev = document.querySelector('[data-car-prev]');
    var next = document.querySelector('[data-car-next]');
    if (prev) prev.addEventListener('click', function () { show(idx - 1); });
    if (next) next.addEventListener('click', function () { show(idx + 1); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });

    show(0);
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
