function toggleMenu() {
    document.querySelector(".activenav").classList.toggle("responding")
}

let d = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = "Last updated: " + d.toLocaleString();


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('today').innerHTML = today
