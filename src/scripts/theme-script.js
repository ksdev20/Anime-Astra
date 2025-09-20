const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const activeTheme = saved ?? (prefersDark ? 'dark' : 'light');
document.documentElement.classList.add(activeTheme);