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

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('feedback-form');

    form.onsubmit = function (e) {
        // Validation checks
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; // Simple email pattern for validation

        // Clear previous error messages
        var errorMessages = document.querySelectorAll('.error-message');
        for (var message of errorMessages) {
            message.remove();
        }

        var hasError = false;

        // Check if name is entered
        if (!name) {
            showError('name', 'Please enter your name');
            hasError = true;
            e.preventDefault();  // Prevents the default form submission action
        }

        // Check if email is valid
        if (!email.match(emailPattern)) {
            showError('email', 'Please enter a valid email address');
            hasError = true;
            e.preventDefault();  // Prevents the default form submission action
        }

        // If there are no errors, submit the form
        if (!hasError) {
            // Show confirmation message
            var confirmationMessage = document.createElement('p');
            confirmationMessage.textContent = 'Thank you for your feedback! We have received your comments.';
            confirmationMessage.id = 'confirmation-message'; // Assigning an ID to the <p> element
            
            form.appendChild(confirmationMessage);

            // After a few seconds, hide the message
            setTimeout(function () {
                confirmationMessage.style.display = 'none';
                form.innerHTML = '';  // Clears the form 
            }, 9000);

            form.submit();        //submit the form   
        }

    };

    //Show preview content
    document.getElementById('preview-btn').onclick = function (e) {
        e.preventDefault();
        var preview = document.getElementById('preview');
        preview.innerHTML = '<h3>Preview Your Feedback</h3>';
        preview.innerHTML += '<p>Name : ' + document.getElementById('name').value + '</p>';
        preview.innerHTML += '<p>Email : ' + document.getElementById('email').value + '</p>';

        // Get the value of the "first visiting" radio button
        var visitingRadio = document.querySelector('input[name="first_visit"]:checked');
        var visitingValue = visitingRadio ? visitingRadio.value : "Not selected";
        preview.innerHTML += '<p>First time visiting : ' + visitingValue + '</p>';

        // Get the value of the "informative" radio button
        var informativeRadio = document.querySelector('input[name="informative"]:checked');
        var informativeValue = informativeRadio ? informativeRadio.value : "Not selected";
        preview.innerHTML += '<p>Informative and easy to navigate : ' + informativeValue + '</p>';

        // Get the value of the "suggestions " text
        var suggestionsText = document.getElementById("suggestions");
        var suggestionsTextValue = suggestionsText ? suggestionsText.value : "None";
        preview.innerHTML += '<p>Suggestions : ' + suggestionsTextValue + '</p>';

        // Get the value of the "satisfication" radio button
        var satisfactionRadio = document.querySelector('input[name="satisfaction"]:checked');
        var satisfactionValue = satisfactionRadio ? satisfactionRadio.value : "not selected";  
        preview.innerHTML += '<p>Satisfaction : ' + satisfactionValue + '</p>';

        // Get the value of the "recommend" radio button
        var recommendRadio = document.querySelector('input[name="recommend"]:checked');
        var recommendValue = recommendRadio ? recommendRadio.value : "Not selected";
        preview.innerHTML += '<p>Recommend to others : ' + recommendValue + '</p>';
        
        // Show a Edit button to allow the user to edit the form
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function () {
            preview.innerHTML = '';
        };
        preview.appendChild(editBtn);
        
    };

    //This function display the error message
    function showError(fieldId, message) {
        var inputField = document.getElementById(fieldId);
        inputField.classList.add('error');

        // Create error message element
        var errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;

        // Insert error message after the input field
        inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

        // Focus on the input field with the error
        inputField.focus();

        // Add event listener to remove error when the user corrects it
        inputField.addEventListener('input', function () {
            inputField.classList.remove('error');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    }

});