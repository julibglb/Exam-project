// change theme dark/light
function toggleTheme() {
    const button = document.querySelector('.header-theme');
    const body = document.querySelector('body');

    if (!button && !body) return;

    button.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

toggleTheme();

// Copy text 
const copyEmailBtn = document.getElementById("copyButton");
const copyPhoneBtn = document.getElementById("btnCopy");

function copyEmail() {
    const email = "julia.bogolub@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => alert("Email скопійовано!"))
        .catch(err => console.error("Помилка копіювання email:", err));
}

function copyPhone() {
    const phone = "+380979715860";
    navigator.clipboard.writeText(phone)
        .then(() => alert("Номер телефону скопійовано!"))
        .catch(err => console.error("Помилка копіювання телефону:", err));
}

copyEmailBtn.addEventListener("click", copyEmail);
copyPhoneBtn.addEventListener("click", copyPhone);


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

    buttonCertificates.textContent = isVisible ? 'Show less' : 'View all';

    if (isVisible) {
        const lastBlock = certificatesBlock2[certificatesBlock2.length - 1];
        lastBlock.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
})
