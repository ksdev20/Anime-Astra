export function checkDark(){
    return document.documentElement.classList.contains('dark');
}

export function toggleTheme() {
    const root = document.documentElement;
    const isDark = checkDark();
    root.classList.toggle('dark', !isDark);
    root.classList.toggle('light', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}
