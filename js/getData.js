import {renderingMiniatute} from './miniature.js';
import {showAlert} from './util.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((images) => {renderingMiniatute(images);})
  .catch (() => {showAlert('данные не полученны');});
