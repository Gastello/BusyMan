let themeButton = document.querySelector('.theme');
var firstColor = getComputedStyle(document.documentElement).getPropertyValue('--darker');
var secondColor = getComputedStyle(document.documentElement).getPropertyValue('--color-4');
themeButton.onclick = function () {

   let theme = document.getElementById('theme');

   if (theme.getAttribute("href") == "../project/css/theme-1.css") {
      theme.href = "../project/css/theme-2.css";
   }
   else if (theme.getAttribute("href") == "../project/css/theme-2.css") {
      theme.href = "../project/css/theme-3.css";
   }
   else if (theme.getAttribute("href") == "../project/css/theme-3.css") {
      theme.href = "../project/css/theme-4.css";
   }
   else if (theme.getAttribute("href") == "../project/css/theme-4.css") {
      theme.href = "../project/css/theme-5.css";
   }
   else {
      theme.href = "../project/css/theme-1.css";
   }

}