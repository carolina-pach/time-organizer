// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var Msg9 = $('#messageHour9');
var Msg10 = $('#messageHour10');
var Msg11 = $('#messageHour11');
var Msg12 = $('#messageHour12');
var Msg13 = $('#messageHour13');
var Msg14 = $('#messageHour14');
var Msg15 = $('#messageHour15');
var Msg16 = $('#messageHour16');
var Msg17 = $('#messageHour17');


var DayEl = $('#currentDay');
var SaveBtn = $('#btnSave');


//TO DISPLAY CURRENT TIME
var today = dayjs();
$(DayEl).text(today.format('MMM D, YYYY'));


//TO SAVE THE TEXT OF THE MESSAGE IN LOCAL STORAGE
function saveTimetable() {
  var timetableMsg = {
    Msg9: $(Msg9).val(), //or .text()??
    Msg10: $(Msg10).val(),
    Msg11: $(Msg11).val(),
    Msg12: $(Msg12).val(),
    Msg13: $(Msg13).val(),
    Msg14: $(Msg14).val(),
    Msg15: $(Msg15).val(),
    Msg16: $(Msg16).val(),
    Msg17: $(Msg17).val(),
  };
  localStorage.setItem('timetableMsg', JSON.stringify(timetableMsg));
}




//FOR LOOP TO DEFINE THE CLASS ADDED TO TIME BLOCK PAST FUTURE PRESENT
//ARRAY WITH TIME ID?
//COMPARE HOUR WITH DAYJS

for (i = 0, i < 8, i++) {

  if 


letterBtn.addClass('future');
}





Savebutton.on('click', function () {
  event.preventDefault();
  messageSaved(); //LOCAL SOTRAGE FUNCTION WHERE IT SAVES EVERY MESSAGE 
  //
  renderMessage();

});

function maessageSave() {
  //FOR LOOP??
  localStorage.setItem("key", "value");

}


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

