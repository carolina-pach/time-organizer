$('.saveBtn').on('click', function () {
  const task = $(this).siblings('.description').val();
  const hour = $(this).parent().attr('id');
  localStorage.setItem(hour, task);
})

for (let i = 9; i < 18; i++) {
  const hour = 'hour-' + i;
  const task = localStorage.getItem(hour) || '';
  $('#' + hour).children('.description').val(task);
}


var DayEl = $('#currentDay');

//TO DISPLAY CURRENT TIME
var today = dayjs();
$(DayEl).text(today.format('MMM D, YYYY'));

const hourNow = 10;
//19
console.log(hourNow);

for (let i = 9; i < 18; i++) {
  if (hourNow > i) {
    $('#hour-' + i).addClass('past');
  } else if (hourNow === i) {
    $('#hour-' + i).addClass('present');
  } else {
    $('#hour-' + i).addClass('future');
  }
}
