document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to each "Toggle Details" button
    var toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle visibility of the next sibling element with class "details"
            var details = this.nextElementSibling;
            details.classList.toggle('visible');
        });
    });
});
