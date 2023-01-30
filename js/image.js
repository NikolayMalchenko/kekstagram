const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const controlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
const image = (document.querySelector('.img-upload__preview')).querySelector('img');
let num = parseInt(controlValue.value, 10 );


buttonBigger.addEventListener('click', () => {
  if (num >= 100){num += 0;} else {num += 25;}
  controlValue.value = `${num }%`;
  image.style.transform = `scale(${num / 100 })`;
});


buttonSmaller.addEventListener('click', () => {
  if (num <= 25){num -= 0;} else {num -= 25;}
  controlValue.value = `${num }%`;
  image.style.transform = `scale(${num / 100 })`;
});


const effRadio = document.querySelectorAll('.effects__radio');

effRadio.forEach((element) => {
  element.addEventListener('click', () => {
    image.className = '';
    image.classList.add(`effects__preview--${element.value}`);
  });
});


export {imgPreview,image,controlValue};
