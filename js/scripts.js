function toggleTheme() {
    const button = document.querySelector('.header-theme');
    const body = document.querySelector('body');

    if (!button && !body) return;

    button.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

toggleTheme();


document.getElementById('copyButton').addEventListener('click', function() {
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

  document.getElementById('btnCopy').addEventListener('click', function() {
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
  