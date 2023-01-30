import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const body = document.querySelector('body');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');

//функция для открытия
function openForm () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('.modal-open');
}

//функция для закрытия
function closeForm () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('.modal-open');
  form.reset();
}

//обработчик открытия
uploadFile.addEventListener('change', () => {
  openForm ();
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeForm ();
    }
  });
});

//обработчик закрытия
uploadCancel.addEventListener('click', () => {
  closeForm();
});

export {form, closeForm};
