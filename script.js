/*
Application: Schoology Enhancer
Author: X-Developer-Studios
Version: 1.0
*/

// Schoology Blue Theme Script
var theme = document.createElement("BUTTON");
theme.innerHTML = "Blue Theme";
document.body.appendChild(theme);
theme.onclick = function dark() {

	document.body.style.background = "#69c3ff";

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
