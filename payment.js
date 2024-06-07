function backToCart() {
    document.getElementById('shopSection').classList.add('active');
    document.getElementById('paymentSection').classList.remove('active');
}

// You can add JavaScript for form submission and processing here
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add code to handle payment processing here
    alert('Payment successful!');
});


