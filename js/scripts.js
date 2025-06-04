function toggleTheme() {
    const button = document.querySelector('.header-theme');
    const body = document.querySelector('body');

    if (!button && !body) return;

    button.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

toggleTheme();


document.getElementById('copyButton').addEventListener('click', function () {
    const copyText = document.getElementById('copyText');
    copyText.select(); // Виділяємо текст
    copyText.setSelectionRange(0, 99999); // Для мобільних пристроїв
    navigator.clipboard.writeText(copyText.value) // Копіюємо текст у буфер
        .then(() => {
            alert('Текст скопійовано: ' + copyText.value);
        })
        .catch(err => {
            console.error('Помилка копіювання: ', err);
        });
});

document.getElementById('btnCopy').addEventListener('click', function () {
    const textInput = document.getElementById('textInput');
    textInput.select(); // Виділяємо текст
    textInput.setSelectionRange(0, 99999); // Для мобільних пристроїв
    navigator.clipboard.writeText(textInput.value) // Копіюємо текст у буфер
        .then(() => {
            alert('Текст скопійовано: ' + textInput.value);
        })
        .catch(err => {
            console.error('Помилка копіювання: ', err);
        });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.querySelector('.menu-navigation');
    const navLinks = menu.querySelectorAll('a');

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('lock-scroll');
            menu.setAttribute('tabindex', '-1'); // щоб можна було фокусуватись
            menu.focus();
        } else {
            document.body.classList.remove('lock-scroll');
            menu.removeAttribute('tabindex');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            toggle.checked = false; // знімає галочку з чекбокса
            document.body.classList.remove('lock-scroll');
            menu.removeAttribute('tabindex');
        });
    });
});

// certificate block view/hidden

const buttonCertificates = document.querySelector('#button-certificates');
const certificatesBlock2 = document.querySelectorAll('.certificates-block-2');


buttonCertificates.addEventListener('click', (e) => {
    certificatesBlock2.forEach(item => {
        item.classList.toggle('certicificate-hidden');
    });

    const isVisible = !certificatesBlock2[0].classList.contains('certicificate-hidden');

    // Зміна тексту кнопки
    buttonCertificates.textContent = isVisible ? 'Show less' : 'View all';

    // Скрол до останнього блоку, якщо він став видимим
    if (isVisible) {
        // Отримуємо останній блок
        const lastBlock = certificatesBlock2[certificatesBlock2.length - 1];
        lastBlock.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
})
