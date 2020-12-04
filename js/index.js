$(document).ready( function () {
  $('#mytable').DataTable();
} );

document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();

        // $('#mytable').DataTable();
      });

// let element = document.querySelector(".chat-height");
// let elementHeight = element.offsetHeight;
// console.log(elementHeight);  