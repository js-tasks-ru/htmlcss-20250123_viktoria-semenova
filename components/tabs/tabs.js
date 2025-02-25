// Находим все радиокнопки
const radios = document.querySelectorAll('.tabs__radio');

// Добавляем обработчик события для каждой радиокнопки
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Удаляем класс 'active' у всех меток
    document.querySelectorAll('.tabs__label').forEach((label) => {
      label.classList.remove('tabs__label_active');
    });

    // Находим метку, связанную с выбранной радиокнопкой, и добавляем класс 'active'
    const activeLabel = document.querySelector(`label[for="${radio.id}"]`);
    if (activeLabel) {
      activeLabel.classList.add('tabs__label_active');
    }
  });
});

// При загрузке страницы добавляем класс 'active' для начального состояния
document
  .querySelector('.tabs__radio:checked')
  .closest('.tabs')
  .querySelector(
    `label[for="${document.querySelector('.tabs__radio:checked').id}"]`,
  )
  .classList.add('tabs__label_active');
