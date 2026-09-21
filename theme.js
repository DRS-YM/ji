// ====== تبديل الوضع ======
const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => { themeToggle.style.transform = ''; }, 150);
  });
}

if (!savedTheme) {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) {
    document.body.classList.add('light-mode');
  }
}