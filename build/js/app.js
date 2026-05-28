const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.dataset.theme = savedTheme;

toggle.addEventListener('click', () => {
    const current = html.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
});
