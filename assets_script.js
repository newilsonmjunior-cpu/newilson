// Alterna tema (dark / light) e salva no localStorage
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  const apply = (theme) => {
    if(theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
  };

  // Default: manter escuro (por causa do cartão) — mas respeita armazenamento ou preferência do usuário
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  apply(stored || (prefersLight ? 'light' : 'dark'));

  toggle.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Add current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold: 0.08});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();