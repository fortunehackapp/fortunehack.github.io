var hrs = document.getElementById("hrs")
var min = document.getElementById("min")

var currentTime = new Date()

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();