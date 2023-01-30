import {form, closeForm} from './form.js';
import {image, controlValue} from './image.js';

//функция сообщения о успешной отправке формы + обработчик закрытия
function messageSuccess () {
  const tempSuccess = document.querySelector('#success').content;
  const success = tempSuccess.querySelector('.success');
  const cloneSuccess = success.cloneNode(true);
  document.body.append(cloneSuccess);

  const buttonSuccess = document.querySelector('.success__button');

  buttonSuccess.addEventListener('click', () => {
    document.body.removeChild(cloneSuccess);
  });
}

function messageError () {
  const tempSuccess = document.querySelector('#error').content;
  const error = tempSuccess.querySelector('.error');
  const cloneError = error.cloneNode(true);
  document.body.append(cloneError);

  const buttonError = document.querySelector('.error__button');

  buttonError.addEventListener('click', () => {
    document.body.removeChild(cloneError);
  });
}

//Валидация
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'setup-wizard-form__error-text',
});

// Обработчик отправки формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);

    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
      })
      .then((response) => {
        if (response.ok) {
          console.log(controlValue);
          controlValue.value = '99%';
          console.log(controlValue);
          image.style = 'transform: scale(1)';
          //сброс класса
          image.className = '';
          image.classList.add('effects__preview--none');
        }
      })
      .then(() => closeForm())
      .then(() => messageSuccess())
      .catch(() => messageError());
  }
});

