function lineThrough() {
   let checkbox = document.querySelectorAll('.checkbox');
   for (let check of checkbox) {
      let checkboxParent = check.parentElement;
      let checkboxParentOfParent = checkboxParent.parentElement;
      if (check.checked == true) checkboxParentOfParent.classList.add('line-through');
      else checkboxParentOfParent.classList.remove('line-through');
   }
}

let checkbox = document.querySelectorAll('.checkbox');
for (let check of checkbox) {
   check.addEventListener('change', (event) => {
      lineThrough();
   })
}

lineThrough();