document.getElementById('goingtoup').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
});
document.getElementById('goingtodown').addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'}); // Scroll to the top of the page smoothly
});
