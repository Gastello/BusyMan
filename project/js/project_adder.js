let element__add = document.querySelectorAll('.element__add');

let add = document.querySelector('.add__wrapper');
let add__button = document.querySelector('.add__button');
let add__close = document.querySelector('.add__close');

for (let element of element__add) {
   element.onclick = function () {
      add.classList.add('active');
      back.classList.add('locked');
   }
}

add__button.onclick = function () {
   add.classList.remove('active');
   back.classList.remove('locked');
}

add__close.onclick = function () {
   add.classList.remove('active');
}