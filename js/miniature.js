// Модуль отрисовки миниатюр
const renderingMiniatute = (listPhotos) => {
  const templatePicture = document.querySelector('#picture').content;
  const pictureTemp = templatePicture.querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  //проход по массиву и занесение его обьектов в шаблон
  listPhotos.forEach((element) => {
    const pictureElement = pictureTemp.cloneNode(true);
    const {url, comments, likes} = element;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export {renderingMiniatute};
