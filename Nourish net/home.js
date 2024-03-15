document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropdownContent = document.querySelector(".dropdown-content");

    // Toggle dropdown menu on button click
    dropdown.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});
