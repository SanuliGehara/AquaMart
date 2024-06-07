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

/* Slideshow functionality */
var slideIndex = 1;       // Initialize slide index
showSlides(slideIndex);   // Display initial slide
autoSlides();             // Start automatic slideshow

// Function to navigate to next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Reset slide index if it exceeds the number of slides
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display current slide and mark corresponding dot as active
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

// Function to automatically change slides every 6 seconds
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 6000); // Change image every 6 seconds
}
