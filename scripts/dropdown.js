document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  if (!dropdown || !dropdownToggle) return;

  // Открытие/закрытие dropdown при клике на кнопку
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Закрытие dropdown при клике вне его области
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Закрытие dropdown при клике на элемент меню
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
      // Небольшая задержка перед закрытием, чтобы ссылка успела открыться
      setTimeout(() => {
        dropdown.classList.remove('active');
      }, 100);
    });
  });

  // Закрытие dropdown при нажатии Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    }
  });
});

