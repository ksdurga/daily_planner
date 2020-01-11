/*PSEUDO CODE
******************
Banner that tells the user this is a calendar
display the date

create barebones html, figure out how to display planner for each day, different dates displayed

create daily calender for 9-5am
   should loop through everyday to create new array of 9-5 events

every hour has a space to write in en event and add it/save

loop through every hour to create space and button for each

-hours that have already passed are gray
-current hour is red or something
-future hours are another color

save user input and time to local storage

browser has to track current date and time

.onclick add event button saves entered text to area and saves to local storage
******************
*/

// var hourBlock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// $("#hour-block");

// var createHour = function() {
//    for (i=0; i<hourBlock.length; i++) {
//       document.createElement()
//    }
// }


//GLOBAL VARIABLES

var eventInput = $("#user-event-input");
var saveBtn = $("#save-event");
var time = $("#hour-block");
var dateDisplay = $("#date");
