/* Случайное число */
const generateRandomInt = (min,max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;}

  if (min > max) {
    const swap = max;
    max = min;
    min = swap;
  }

  return Math.floor (Math.random() * (max + 1 - min) + min);
};

// Длина строки
const checkLength = (line, maxlength) =>
  line.length <= maxlength;

checkLength('строка', 8);

// Нажатие Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey, generateRandomInt};

// функция вывода сообщения об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'blue';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};


export {showAlert};
