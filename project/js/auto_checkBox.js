let hasChildrenItems = document.querySelectorAll('.has-children');

function executedParent() {
   for (let item of hasChildrenItems) {
      let parentElement = item.querySelector('.project__parent');
      let parentCheckBox = parentElement.querySelector('.checkbox');
      parentCheckBox.onchange = function () {
         if (parentCheckBox.checked == true) {
            ;
            let childrenOfItem = item.getElementsByTagName('li');
            for (let childrOfItem of childrenOfItem) {
               let childCheckBox = childrOfItem.querySelector('.checkbox');
               childCheckBox.checked = true;
            }
         }
         else {
            let childrenOfItem = item.getElementsByTagName('li');
            for (let childrOfItem of childrenOfItem) {
               let childCheckBox = childrOfItem.querySelector('.checkbox');
               childCheckBox.checked = false;
            }
         }
      }
   }
}
executedParent();

function executedChildren() {
   for (let item of hasChildrenItems) {
      let parentElement = item.querySelector('.project__parent');
      let childrenOfItem = item.getElementsByTagName('li');
      let parentCheckBox = parentElement.querySelector('.checkbox');
      let isExecuted = true;
      for (let childrOfItem of childrenOfItem) {
         let childCheckBox = childrOfItem.querySelector('.checkbox');
         if (childCheckBox.checked == false) {
            isExecuted = false;
         }
      }
      if (isExecuted) {
         parentCheckBox.checked = true;
      }
      else {
         parentCheckBox.checked = false;
      }
   }
}
executedChildren();

for (let item of hasChildrenItems) {
   let childrenOfItem = item.getElementsByTagName('li');
   for (let childrOfItem of childrenOfItem) {
      let childCheckBox = childrOfItem.querySelector('.checkbox');
      childCheckBox.onchange = function () {
         executedChildren();
      }
   }
}