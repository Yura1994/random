'use strict'
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


elem.onclick = function(event) {
     var nam = getRandomInt(1,100); 

     document.getElementById("n").innerHTML = nam;



  }
  

  