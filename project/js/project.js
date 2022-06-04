let element__list = document.querySelectorAll('.element__list')
let elements__triangle = document.querySelectorAll('.element__triangle')

for (let item of element__list) {
   if (item.childElementCount >= 2) {
      item.classList.add('has-children');
   }
}
let parentOfTriangle;

for (let element__triangle of elements__triangle) {
   element__triangle.onclick = function () {
      element__triangle.classList.toggle('active');
      parentOfTriangle = element__triangle.parentElement.parentElement.classList.toggle('active');
   }
}