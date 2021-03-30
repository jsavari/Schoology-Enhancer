/***********************************************************************
Application    : Schoology Enhancer
Author         : X-Developer-Studios 
Version        : 2.0
***********************************************************************/

// Schoology Blue Theme Script
var theme = document.createElement("BUTTON");
theme.innerHTML = "Blue Theme";
document.body.appendChild(theme);
theme.onclick = function dark() {

	document.body.style.background = "#69c3ff";

};

// Schoology Red Theme Script
var r_theme = document.createElement("BUTTON");
r_theme.innerHTML = "Red Theme";
document.body.appendChild(r_theme);
r_theme.onclick = function r_dark() {

	document.body.style.background = "#ff6b6b";

};

// Schoology Custom Theme Script
var c_theme = document.createElement("BUTTON");
c_theme.innerHTML = "Custom Theme";
document.body.appendChild(c_theme);
c_theme.onclick = function c_bg() {

    var color = prompt("Background Color");
    document.body.style.background = color;

};

// Schoology Clear Theme Script
var w_theme = document.createElement("BUTTON");
w_theme.innerHTML = "Clear Theme";
document.body.appendChild(w_theme);
w_theme.onclick = function w_dark() {

	document.body.style.background = "white";

};


// Schoology Reminder Script
var rem = document.createElement("BUTTON");
rem.innerHTML = "Add Reminder";
document.body.appendChild(rem);
rem.onclick = function add_rem() {
    var rmd = prompt("Reminder:");
    var d = new Date();
    var date = d.getDate();
    localStorage.setItem("rem", rmd);
    localStorage.setItem("date", date);
    alert(rmd);
};

var local_reminder = localStorage.getItem("rem");
var local_date = localStorage.getItem("date");
var d = new Date();
var date = d.getDate();

if (date == local_date && local_reminder !== null) {
    
    alert(local_reminder);
    
}

var rem1 = document.createElement("BUTTON");
rem1.innerHTML = "Add Reminder2";
document.body.appendChild(rem1);
rem1.onclick = function add_rem() {
    var rmd = prompt("Reminder:");
    var d = new Date();
    var date = d.getDate();
    localStorage.setItem("rem1", rmd);
    localStorage.setItem("date1", date);
    alert(rmd);
};

var local_reminder1 = localStorage.getItem("rem1");
var local_date1 = localStorage.getItem("date1");
var d1 = new Date();
var date1 = d.getDate();

if (date1 == local_date1 && local_reminder1 !== null) {
    
    alert(local_reminder1);
    
}

var rem2 = document.createElement("BUTTON");
rem2.innerHTML = "Add Reminder3";
document.body.appendChild(rem2);
rem2.onclick = function add_rem() {
    var rmd = prompt("Reminder:");
    var d = new Date();
    var date = d.getDate();
    localStorage.setItem("rem2", rmd);
    localStorage.setItem("date2", date);
    alert(rmd);
};

var local_reminder1 = localStorage.getItem("rem2");
var local_date1 = localStorage.getItem("date2");
var d1 = new Date();
var date1 = d.getDate();

if (date1 == local_date1 && local_reminder1 !== null) {
    
    alert(local_reminder1);
    
}

var clear1 = document.createElement("BUTTON");
clear1.innerHTML = "Clear Reminder1";
document.body.appendChild(clear1);
clear1.onclick = function clear1() {

	localStorage.removeItem("rem");
	alert("Reminder 1 Cleared!");

};

var clear2 = document.createElement("BUTTON");
clear2.innerHTML = "Clear Reminder2";
document.body.appendChild(clear2);
clear2.onclick = function clear2() {

	localStorage.removeItem("rem1");
	alert("Reminder 2 Cleared!");

};

var clear3 = document.createElement("BUTTON");
clear3.innerHTML = "Clear Reminder3";
document.body.appendChild(clear3);
clear3.onclick = function clear3() {

	localStorage.removeItem("rem2");
	alert("Reminder 3 Cleared!");

};

var clear = document.createElement("BUTTON");
clear.innerHTML = "Clear All Reminders";
document.body.appendChild(clear);
clear.onclick = function clear() {

	localStorage.removeItem("rem");
	localStorage.removeItem("rem1");
	localStorage.removeItem("rem2");
	alert("All Reminders Cleared!");

};

// Button Styling Script
theme.style.width = '50px'; 
theme.style.height = '50px'; 
theme.style.background = '#69c3ff'; 
theme.style.color = 'White'; 
theme.style.fontSize = '12px'; 

r_theme.style.width = '50px'; 
r_theme.style.height = '50px'; 
r_theme.style.background = '#ff6b6b'; 
r_theme.style.color = 'White'; 
r_theme.style.fontSize = '12px'; 

c_theme.style.width = '50px'; 
c_theme.style.height = '50px'; 
c_theme.style.background = '#778899'; 
c_theme.style.color = 'White'; 
c_theme.style.fontSize = '12px'; 

w_theme.style.width = '50px'; 
w_theme.style.height = '50px'; 
w_theme.style.background = '#778899'; 
w_theme.style.color = 'White'; 
w_theme.style.fontSize = '12px'; 

rem.style.width = '75px'; 
rem.style.height = '50px'; 
rem.style.background = '#778899'; 
rem.style.color = 'White'; 
rem.style.fontSize = '12px'; 

rem1.style.width = '75px'; 
rem1.style.height = '50px'; 
rem1.style.background = '#778899'; 
rem1.style.color = 'White'; 
rem1.style.fontSize = '12px'; 

rem2.style.width = '75px'; 
rem2.style.height = '50px'; 
rem2.style.background = '#778899'; 
rem2.style.color = 'White'; 
rem2.style.fontSize = '12px'; 

clear.style.width = '75px'; 
clear.style.height = '50px'; 
clear.style.background = '#778899'; 
clear.style.color = 'White'; 
clear.style.fontSize = '12px'; 

clear1.style.width = '75px'; 
clear1.style.height = '50px'; 
clear1.style.background = '#778899'; 
clear1.style.color = 'White'; 
clear1.style.fontSize = '12px'; 

clear2.style.width = '75px'; 
clear2.style.height = '50px'; 
clear2.style.background = '#778899'; 
clear2.style.color = 'White'; 
clear2.style.fontSize = '12px';

clear3.style.width = '75px'; 
clear3.style.height = '50px'; 
clear3.style.background = '#778899'; 
clear3.style.color = 'White'; 
clear3.style.fontSize = '12px'; 
