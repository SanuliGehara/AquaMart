/* 
   Function to toggle the responsive class on the navbar when the user clicks on the icon. 
   This class makes the navbar look good on small screens.
*/
function myFunction() {
    var x = document.getElementById("mynavbar");
    
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
