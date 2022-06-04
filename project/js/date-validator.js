function dateValidate() {
   var startDateObj = document.getElementById("startDate");
   var endDateObj = document.getElementById("endDate");

   startDateObj.onblur = startDateObj.onchange = function () {
      endDateObj.min = startDateObj.value;
      if (startDateObj.value > endDateObj.value && endDateObj.value != '') {
         endDateObj.value = startDateObj.value;
      }
   };
   endDateObj.onblur = endDateObj.onchange = function () {
      if (startDateObj.value > endDateObj.value) {
         endDateObj.value = startDateObj.value;
      }
   };
}

function dateValidateProject() {
   var startDateObj = document.getElementById("startDate-pj");
   var endDateObj = document.getElementById("endDate-pj");

   startDateObj.onblur = startDateObj.onchange = function () {
      endDateObj.min = startDateObj.value;
      if (startDateObj.value > endDateObj.value && endDateObj.value != '') {
         endDateObj.value = startDateObj.value;
      }
   };
   endDateObj.onblur = endDateObj.onchange = function () {
      if (startDateObj.value > endDateObj.value) {
         endDateObj.value = startDateObj.value;
      }
   };
}