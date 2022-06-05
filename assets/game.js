// today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// save button to save text
var saveBtnE1 = document.createElement ("button");
saveBtnE1.className = "saveBtn"

var saveBtnIcon = document.createElement("i");
saveBtnIcon.className = "fa-solid fa-floppy-disk";

saveBtnE1.appendChild(saveBtnIcon);