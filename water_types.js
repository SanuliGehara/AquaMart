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

// Initialize slide index
var slideIndex = 1;

// Display slides
showSlides(slideIndex);

// Automatically advance slides
autoSlides();

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Reset slide index if out of bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and activate the corresponding dot
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

// Function to automatically advance slides at an interval
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 6000); // Change slide every 6 seconds
}
