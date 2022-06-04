let creator = document.querySelector('.creator__wrapper');
let creator__button = document.querySelector('.creator__button');
let creators__close = document.querySelectorAll('.creator__close');
let task__add = document.querySelector('.task__add_inner');
dateValidateProject();
dateValidate();
task__add.onclick = function () {
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
      back.classList.remove('locked');
   }
}

