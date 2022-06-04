let newNote = document.querySelector('.notes__new');
let creator = document.querySelector('.creator__wrapper');
let creator__button = document.querySelector('.creator__button');
let creator__close = document.querySelector('.creator__close');

newNote.onclick = function () {
   creator.classList.add('active');
   back.classList.add('locked');
}

creator__button.onclick = function () {
   creator.classList.remove('active');
   back.classList.remove('locked');
}
creator__close.onclick = function () {
   creator.classList.remove('active');
   back.classList.remove('locked');
}