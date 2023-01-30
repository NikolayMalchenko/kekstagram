// import {generateRandomInt} from './util.js';

// Создание массива описания фото (НИ КУДА НЕ ИДЕТ)

// const DESCRIPTIONS = [
//   'Наше фото',
//   'Мое фото',
//   'Общее фото',
//   'Неудачное фото',
//   'Лучшее фото',
//   'Фото',
//   'Главное фото'
// ];


// const createPhoto = (_elem, id) => {
//   const idNumber = ++id;
//   const randomDescriptionNumber = generateRandomInt(0, DESCRIPTIONS.length - 1);
//   const randomIikesNumber = generateRandomInt(15,200);
//   const randomCommentsNumber = generateRandomInt(0,200);

//   return {
//     id: idNumber,

//     url: `photos/${ idNumber}.jpg`,

//     description: DESCRIPTIONS[randomDescriptionNumber],

//     likes: randomIikesNumber,

//     comments: randomCommentsNumber
//   };
// };

// const listPhoto = Array.from({length: 25}, createPhoto);

