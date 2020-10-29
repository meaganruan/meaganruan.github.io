"use strict";

/*
create calendar for fall semester
*/


//setting display date
var thisDay = new Date("August 26, 2020");

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//generate table for calendar
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}


//calendar caption
function calCaption(calDate) {
    //list of month names 
    var monthName = ["January", "February", "March", "April", "May", "June" , "July", "August", "September", "October", "November", "December"];

    //current month
    var thisMonth = calDate.getMonth();

    //current year
    var thisYear = calDate.getFullYear();

    //return caption 
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}




//create th for days of week
function calWeekdayRow() {
    //list days of week
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var rowHTML = "<tr>";
    
    //loop through array
    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='weekdays'>" + dayName[i] +"</th>";
    }

    //close row tag
    rowHTML += "</tr>";
    return rowHTML;
}



//calculate the number of days in the month
function daysInMonth(calDate) {
    //amount of days in each month
    var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    //get year and month
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();
    
    //february leap years
    if (thisYear % 4 === 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    }

    //return number of days for the month
    return dayCount[thisMonth];
}




//table rows for each day of the month
function calDays(calDate) {
    //starting day
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay(); 
    //create html code for easy access to <tr>
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }
    //input each day
    var totalDays = daysInMonth(calDate);

    //create variable for highlight day
    var highlightDay = calDate.getDate();
    for (var i = 1; i < totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay === 0){
        	htmlCode += "<tr>";
        }

        if(i === highlightDay){
        	htmlCode += "<td class='dates' id='today'>" + i + dayEvent[i] + "</td>";
        }
        else{
        	htmlCode += "<td class='dates'>" + i + dayEvent[i] + "</td>";
        }

        if (weekDay === 6){
        	htmlCode += "</tr>";
        }
    }
    //return days to calendar
    return htmlCode;
}