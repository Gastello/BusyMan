let creator__select = document.getElementById('creator__select');
let input__owner = document.getElementById('input__owner');
let input__owner_text = document.getElementById('input__owner_text');
let input__dates = document.querySelectorAll('.dates__invisible');

function callFun() {
   if (creator__select.value == "waiting-for") {
      input__owner.classList.remove('creator__input_owner');
      input__owner_text.classList.remove('creator__input_owner');
      for (let input__date of input__dates) {
         input__date.classList.remove('creator__input_dates');
      }

   }
   else if (creator__select.value == "simple" || creator__select.value == "project") {
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
callFun();
creator__select.onchange = function () {
   callFun();
}