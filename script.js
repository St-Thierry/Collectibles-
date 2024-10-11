
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', function() {
        // Toggle the active class to show/hide the dropdown
        dropdownMenu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});