let sliderElement = document.querySelector('.sider__element');
let sider = document.querySelector('.sider');

sliderElement.onclick = function () {
   sider.classList.toggle('active');
   sliderElement.classList.toggle('active');
}