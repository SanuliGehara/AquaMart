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


const galleryImages = document.querySelectorAll('.gallery-container img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupDetails = document.getElementById('popup-details');
const closePopupButton = document.getElementById('close-popup');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.src;
        popupDetails.textContent = image.dataset.details;
        popup.classList.remove('hidden');
    });
});

closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    popupImage.src = '';
    popupDetails.textContent = '';
});
