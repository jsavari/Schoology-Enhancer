/***********************************************************************
Application    : Schoology Enhancer
Edition        : School Edition
Author         : X-Developer-Studios 
Lisence        : MIT
Version        : 6.0
Updated        : 06/07/2021
***********************************************************************/

// User Form
var f_filled = localStorage.getItem("form_filled");

if (f_filled === null) {
  
  var fname, lname, role, age, form;
    
  alert("Schoology Enhancer v6.0 User Form");
  alert("Please insert authentic information and data will NOT be used in any other way than comparing data analytics");

  var fname = prompt("First Name");
  var lname = prompt("Last Name");
  var age = prompt("Age:");
  var role = prompt("Professtion (ex. student, teacher, etc.)");

  var data, u_fname, u_lname, u_age, u_role;
  data = { first_name: fname, last_name: lname, user_age: age, user_role: role };
  u_fname = data['first_name'];
  u_lname = data['last_name'];
  u_age = data['user_age'];
  u_role = data['user_role'];

  localStorage.setItem("usr_fname", u_fname);
  localStorage.setItem("usr_lname", u_lname);
  localStorage.setItem("usr_age", u_age);
  localStorage.setItem("usr_role", u_role);
  localStorage.setItem("form_filled", form);
  f_filled = true;
  
} else if (f_filled === true) {
  
  document.body.style.background = "#36393F";
  
}

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

// Raider Hub 
var rh = document.createElement("BUTTON");
rh.innerHTML = "Raider Home";
document.body.appendChild(rh);
rh.onclick = function dark() {

	window.open("https://sites.google.com/henrico.k12.va.us/raiderreadydashboard/home");

};

// PowerTeacher 
var grade = document.createElement("BUTTON");
grade.innerHTML = "Power Teacher";
document.body.appendChild(grade);
grade.onclick = function dark() {

	window.open("https://sis.henrico.k12.va.us/teachers/pw.html");

};

// PowerSchool 
var p_grade = document.createElement("BUTTON");
p_grade.innerHTML = "Power School";
document.body.appendChild(p_grade);
p_grade.onclick = function dark() {

	window.open("https://sis.henrico.k12.va.us/public/home.html");

};

// Gmail
var mail = document.createElement("BUTTON");
mail.innerHTML = "Google Email";
document.body.appendChild(mail);
mail.onclick = function dark() {

	window.open("https://mail.google.com/mail/u/0/#inbox");

};

// Google Drive 
var drive = document.createElement("BUTTON");
drive.innerHTML = "Google Drive";
document.body.appendChild(drive);
drive.onclick = function dark() {

	window.open("https://drive.google.com/drive/u/0/priority");

};

// Google Calendar 
var cal = document.createElement("BUTTON");
cal.innerHTML = "Google Calendar";
document.body.appendChild(cal);
cal.onclick = function dark() {

	window.open("https://calendar.google.com/calendar/u/0/r/month");

};

// Clever Portal 
var portal = document.createElement("BUTTON");
portal.innerHTML = "Clever Portal";
document.body.appendChild(portal);
portal.onclick = function dark() {

	window.open("https://clever.com/in/henrico/student/portal");

};

// Cmd Exec Script
var exec = document.createElement("BUTTON");
exec.innerHTML = "Command Exec";
document.body.appendChild(exec);
exec.onclick = function exec_cmd() {

	var cmd = prompt("Command: ");
	
	if (cmd == "crash") {
	    
	    document.body.innerHTML = "henrico.schoology.com crashed!";
	    
	} else if (cmd == "edit") {
	    
	    document.body.contentEditable = true;
	    
	} else if (cmd == "redit") {
	    
	    document.body.contentEditable = false;
	    
	} else if (cmd == "rr") {
	    
	    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	    
	} else if (cmd == "src") {
	    
	    window.open("https://github.com/X-Developer-Studios/Schoology-Enhancer");
	    
	} else if (cmd == "cver") {
	    
	    alert("Schoology Enhancer v6.0");
	    
	} else if (cmd == "fd") {
	    
	    var userf = localStorage.getItem("usr_fname");
	    var userl = localStorage.getItem("usr_lname");
	    var user_age = localStorage.getItem("usr_age");
	    var user_role = localStorage.getItem("usr_role");
	    
	    alert("First Name: " + userf);
	    alert("Last Name: " + userl);
	    alert("Age: " + user_age);
	    alert("Profession: " + user_role);
	    
	} else if (cmd == "upd") {
	    
	    window.open("https://updates-checker.jaydensavarinat.repl.co/");
	    
	} else if (cmd == "calc") {
	    
	    window.open("https://calculator.jaydensavarinat.repl.co/");
	    
	}

};

// Styling Script
el_list = [rem, rem1, rem2, clear, clear1, clear2, clear3, grade, rh, p_grade, mail, drive, cal, portal, exec];
for (i = 0; i < el_list.length ; i++) {
    
  el = el_list[i];
  el.style.width = '75px';
  el.style.height = '50px';
  el.style.background = '#2F3136';
  el.style.color = 'White';
  el.style.fontSize = '12px';
  
}
