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
var saveBtn1 = $("#save-event1");
var saveBtn2 = $("#save-event2");
var saveBtn3 = $("#save-event3");
var saveBtn4 = $("#save-event4");
var saveBtn5 = $("#save-event5");
var saveBtn6 = $("#save-event6");
var saveBtn7 = $("#save-event7");
var saveBtn8 = $("#save-event8");
var saveBtn9 = $("#save-event9");
var time = $("#hour-block");
var dateDisplay = $("#date");

var allInputs = [];
var currentTime = moment().format('H');
console.log(currentTime);
var saveBtns = [saveBtn1, saveBtn2, saveBtn3, saveBtn4, saveBtn5, saveBtn6, saveBtn7, saveBtn8, saveBtn9];
var currentDate = moment().format('MMMM Do YYYY');

var time9 = $("#event9").val();
var time10 = $("#event10").val();
var time11 = $("#event11").val();
var time12 = $("#event12").val();
var time13 = $("#event13").val();
var time14 = $("#event14").val();
var time15 = $("#event15").val();
var time16 = $("#event16").val();
var time17 = $("#event17").val();

var allTimes = [time9, time10, time11, time12, time13, time14, time15, time16, time17];
console.log(allTimes);

// $("#user-event-input").style.backgroundColor = "rgb(129, 202, 236)";

var eventColor = function() {
   for (i=0; i<allTimes.length; i++) {
      if (allTimes[i] > currentTime) {
         eventInput.css("background-color", "rgb(129, 202, 236)");
         console.log(eventInput.css);
      }
      
      if (allTimes[i] < currentTime) {
         eventInput.css("background-color", "rgb(167, 167, 167)");
      }
      if (allTimes[i] = currentTime) {
         eventInput.css("background-color", "rgb(106, 248, 153)");
      }
   }
}
eventColor();
//storage
var lsInput = localStorage.getItem("usereventinput").valueOf();
var updateLocalStorage = function () {
   localStorage.setItem("usereventinput", JSON.stringify(allInputs));
};
if (lsInput) {
   allInputs=JSON.parse(lsInput);
}

//push user input to array
saveBtns.forEach(function(item){
   item.on("click", function(e){
      var userInput = document.getElementById("user-event-input").value;
      allInputs.push(document.getElementById("user-event-input").value);
      console.log(allInputs);
      e.preventDefault();
      console.log("click");
      $("#user-event-input").text(userInput);
      updateLocalStorage();
      return allInputs;
   // for (i=0; i<saveBtns.length; i++) {
   //    saveBtns[i].on("click", function(event){
   //       event.stopPropagation();
   //       event.preventDefault();
   //       console.log("click");
   //       $("#user-event-input").text(userInput);
   //       updateLocalStorage();
   //    })
   })
});


//write user input into text box


//Display date
$("#date").text(currentDate);