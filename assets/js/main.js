'use strict'

$(function () {
  const clockWrap = $('#clock-wrap');
  
  const yyyymmddhhmiss = function() {
    let date = new Date();

    let yyyy = date.getFullYear();
    let mm = toDoubleDigits(date.getMonth() + 1);
    let dd = toDoubleDigits(date.getDate());
    let hh = toDoubleDigits(date.getHours());
    let mi = toDoubleDigits(date.getMinutes());
    let ss = toDoubleDigits(date.getSeconds());

    return '<span class="yyyy">' + yyyy + '</span>' +
    '<span class="date_sep--yyyy">.</span>' +
    '<span class="mm">' + mm + '</span>' + 
    '<span class="date_sep--mm">.</span>' +
    '<span class="dd">' + dd + '</span>' +
    '<br>' +
    '<span class="hh">' + hh + '</span>' + 
    '<span class="time_sep--hh">:</span>' +
    '<span class="mi">' + mi + '</span>' +
    '<span class="time_sep--mi">:</span>' +
    '<span class="ss">' + ss + '</span>';
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
