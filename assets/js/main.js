'use strict'

$(function () {
  const clockWrap = $('#clock-wrap');
  
  const yyyymmddhhmiss = function() {
    let date = new Date();
    let clockString = '';

    let yyyy = date.getFullYear();
    let mm = toDoubleDigits(date.getMonth() + 1);
    let dd = toDoubleDigits(date.getDate());
    let hh = toDoubleDigits(date.getHours());
    let mi = toDoubleDigits(date.getMinutes());
    let ss = toDoubleDigits(date.getSeconds());

    clockString += '<div class="yyyymmdd">';
    clockString += '<span class="yyyy">' + yyyy + '</span>';
    clockString += '<span class="date_sep--yyyy">.</span>';
    clockString += '<span class="mm">' + mm + '</span>';
    clockString += '<span class="date_sep--mm">.</span>';
    clockString += '<span class="dd">' + dd + '</span>';
    clockString += '</div>'
    clockString += '<div class="hhmiss">';
    clockString += '<span class="hh">' + hh + '</span>';
    clockString += '<span class="time_sep--hh">:</span>';
    clockString += '<span class="mi">' + mi + '</span>';
    clockString += '<span class="time_sep--mi">:</span>';
    clockString += '<span class="ss">' + ss + '</span>';
    clockString += '</div>'

    return clockString;
  };

  const toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
    return num;
  };

  const redrawTime = function() {
    clockWrap.html(yyyymmddhhmiss);
  }
  
  setInterval(redrawTime, 1000);
});
