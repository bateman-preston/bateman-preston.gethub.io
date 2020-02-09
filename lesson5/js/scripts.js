function toggleMenu() {
    document.querySelector(".activenav").classList.toggle("responding")
}

let d = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = "Last updated: " + d.toLocaleString();


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
let month = date.toLocaleString('default', { month: 'long' });
console.log(month);
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[today.getDay()];

today = n + ',' + dd + " " + month + " " + yyyy;
document.getElementById('today').innerHTML = today
