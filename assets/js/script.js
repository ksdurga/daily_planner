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
$(document).ready(function() {

   var currentTime = moment().format('H');
   var currentTimeNum = parseInt(currentTime);
   console.log(currentTime);
   var currentDate = moment().format('MMMM Do YYYY');

   var allTimes = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
   var milTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

   console.log(typeof currentTimeNum);
   console.log(currentTimeNum);
   

   


   //STORAGE
   
   var saveEvent = function (timeSave) {
      var hour = timeSave;
      var event = $("#"+hour).val();
      localStorage.setItem(hour, event);
   };
   
   function createBlocks () {
      for(i=0; i<allTimes.length; i++) {
         var lsInput = localStorage.getItem(allTimes[i]);

         var maindiv = $(".planner");
         //create form
         var form = $("<form>");

         //create divs
         var saveDiv = $("<div>");
         var timeDiv = $("<div>");
         var textDiv = $("<div>");

         //create items to put in divs
         var saveBtn = $("<button>");
         var textArea = $("<textarea>");
         var timeText = $("<p>");

         //setting attributes
         // maindiv.attr("data-time", "times");

         timeDiv
            .attr("data-class", milTimes[i])
            .attr("class", "form-group mb-2 col-2")
            .attr("value", milTimes[i]);

         textDiv
            .attr("data-class", milTimes[i])
            .attr("class", "form-group col-9");

         saveDiv.attr("data-class", allTimes[i]);


         timeText
            .text(allTimes[i])
            .attr("data-id", milTimes[i]);

         saveBtn
            .attr("class", "btn btn-primary mb-2")
            .attr("data-id", allTimes[i])
            .text("Save");

         textArea
            .attr("placeholder", "Enter an event and click save.")
            .attr("class", "form-control text-display")
            .attr("id", allTimes[i])
            .attr("data-id", allTimes[i]);

         if (lsInput) {
            var event = localStorage.getItem(allTimes[i]);
            textArea.text(event);
         };

         form
            .attr("class", "row")
            .attr("data-time", milTimes[i])

         //save button on click
         saveBtn.on("click", function(e){
            e.preventDefault();
            var timeSave = $(this).attr("data-id");
            saveEvent(timeSave);
         });

         //appending
         timeDiv.append(timeText);
         textDiv.append(textArea);
         saveDiv.append(saveBtn);

         
         form.append(timeDiv);
         form.append(textDiv);
         form.append(saveDiv);

         maindiv.append(form);

      }
   }

   //Makes page (except jumbotron)
   createBlocks();

   //Display date
   $("#date").text(currentDate);

   var eventColor = function() {
      var timeblocks = document.getElementsByClassName("row");
      console.log(timeblocks);
      for(i=0; i<timeblocks.length; i++) {
         var allData = timeblocks[i].getAttribute("data-time");
         console.log(allData);
         if (allData > currentTimeNum) {
            timeblocks[i].style.backgroundColor ="rgb(129, 202, 236)";
         };
         if (allData < currentTimeNum) {
            timeblocks[i].style.backgroundColor ="rgb(167, 167, 167)";
         };
         if (allData == currentTimeNum) {
            timeblocks[i].style.backgroundColor ="rgb(106, 248, 153)";
         };
      };
   };
   eventColor();

});