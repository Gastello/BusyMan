let creator = document.querySelector('.creator__wrapper');
let creator__button = document.querySelector('.creator__button');
let creators__close = document.querySelectorAll('.creator__close');
let task__add = document.querySelector('.task__add_inner');
// dateValidate();
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


let creator__select = document.getElementById('creator__select');
let input__owner = document.getElementById('input__owner');
let input__owner_text = document.getElementById('input__owner_text');
let input__dates = document.querySelectorAll('.dates__invisible');
function callFun() {
   if (creator__select.value == "waiting-for" || creator__select.value == "project") {
      input__owner.classList.remove('creator__input_owner');
      input__owner_text.classList.remove('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.remove('creator__input_dates');
      }

   }
   else if (creator__select.value == "simple") {
      input__owner.classList.add('creator__input_owner');
      input__owner_text.classList.add('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.remove('creator__input_dates');
      }
   }
   else {
      input__owner.classList.add('creator__input_owner');
      input__owner_text.classList.add('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.add('creator__input_dates');
      }
   }
}
if (creator__select != null) creator__select.onchange = function () {
   callFun();
}
if (creator__select != null) callFun();