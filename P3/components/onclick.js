document.addEventListener('DOMContentLoaded', function() {
    // Get the Nonstop logo
    var logo = document.querySelector('img[alt="Nonstop FK Logo"]');

    if (logo) {
        // Add click event to the logo
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});


