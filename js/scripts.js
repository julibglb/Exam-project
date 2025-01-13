function toggleTheme() {
    const button = document.querySelector('.header-theme');
    const body = document.querySelector('body');

    if (!button && !body) return;

    button.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

toggleTheme();
