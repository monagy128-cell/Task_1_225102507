// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", function () {
            // Toggle the 'dark' class on the body element
            document.body.classList.toggle("dark");
        });
    }
});