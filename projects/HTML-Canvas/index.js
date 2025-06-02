//access to elements
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const button = document.querySelector('#button');
const form = document.querySelector('#size');
const eraserButton = document.querySelector('#eraser');

// змінні
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let isErasing = false;

// для пульсації
let minWidth = 5;
let maxWidth = 100;
let isDynamic = false;


// Функція зміни пера
function changePen(size) {
    isDynamic = false;

    if (size === 'small') {
        ctx.lineWidth = 5;
    } else if (size === 'middle') {
        ctx.lineWidth = 15;
    } else if (size === 'large') {
        ctx.lineWidth = 30;
    } else if (size === 'dynamic') {
        ctx.lineWidth = 20; // початкове значення
        minWidth = 5;
        maxWidth = 50;
        isDynamic = true;
    }
}

// Функція малювання
function draw(e) {
    if (!isDrawing) return;

    // Якщо гумка — малюємо "білим" (або фоновим кольором)
    ctx.strokeStyle = isErasing ? '#FFFFFF' : `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if (!isErasing) {
        hue++;
        if (hue >= 360) hue = 0;

        if (isDynamic) {
            if (ctx.lineWidth >= maxWidth || ctx.lineWidth <= minWidth) {
                direction = !direction;
            }
            ctx.lineWidth += direction ? 1 : -1;
        }
    }
}


// Слухачі подій
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

button.addEventListener('click', () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    form.value = 'small';         // Змінюємо обране значення в select
    changePen('small');           // Застосовуємо стиль пера
});

eraserButton.addEventListener('click', () => {
    isErasing = !isErasing;

    // Візуальний індикатор (не обов’язково)
    eraserButton.textContent = isErasing ? 'Draw Mode' : 'Eraser';
});

form.addEventListener('change', () => changePen(form.value));

canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const touch = e.touches[0];
    [lastX, lastY] = [touch.clientX, touch.clientY];
});

canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    e.preventDefault(); // Запобігає прокрутці сторінки під час малювання

    const touch = e.touches[0];
    draw({ offsetX: touch.clientX, offsetY: touch.clientY });
}, { passive: false });

canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);


changePen('small'); // ← встановлює початковий розмір пера
