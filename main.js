// KVKK Çerez Bildirimi
(function () {
  if (localStorage.getItem('kvkk') === '1') return;
  var bar = document.createElement('div');
  bar.className = 'kvkk-bar';
  bar.innerHTML = '<p>Bu web sitesi deneyiminizi geliştirmek ve Google Ads / Analytics hizmetleri için çerez kullanmaktadır. Devam ederek <a href="gizlilik-politikasi.html">Gizlilik Politikamızı</a> kabul etmiş olursunuz.</p><div class="kvkk-bar-btns"><button class="kvkk-decline" id="kvkkDecline">Reddet</button><button class="kvkk-accept" id="kvkkAccept">Kabul Et</button></div>';
  document.body.appendChild(bar);
  document.getElementById('kvkkAccept').addEventListener('click', function () {
    localStorage.setItem('kvkk', '1');
    bar.remove();
  });
  document.getElementById('kvkkDecline').addEventListener('click', function () {
    localStorage.setItem('kvkk', '0');
    bar.remove();
  });
})();

// Nav Toggle & FAQ
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(function (a) { a.classList.remove('open'); });
      document.querySelectorAll('.faq-question').forEach(function (b) { b.classList.remove('active'); });
      if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('active');
      }
    });
  });
})();
