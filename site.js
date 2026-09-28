(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  if (!button || !menu) return;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
    button.textContent = open ? 'Menu' : 'Fechar';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    button.textContent = 'Menu';
  }));
})();
