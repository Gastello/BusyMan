
let users__icon = document.querySelector('.users__icon');
let creator = document.querySelector('.creator__wrapper');
let creator__button = document.querySelector('.creator__button');
let creators__close = document.querySelectorAll('.creator__close');



users__icon.onclick = function () {
   creator.classList.add('active');
   back.classList.add('locked');
}
creator__button.onclick = function () {
   creator.classList.remove('active');
   back.classList.remove('locked');
}

for (let creator__close of creators__close) {
   creator__close.onclick = function () {
      creator.classList.remove('active');
      changer.classList.remove('active');
      back.classList.remove('locked');
   }
}


