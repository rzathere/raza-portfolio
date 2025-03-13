function toggleSidebar() {
    const body = document.body;
    const openBtn = document.querySelector(".open-btn");

    body.classList.toggle("sidebar-open");
    if (body.classList.contains("sidebar-open")) {
        openBtn.style.display = "none"; // Hide the button when sidebar is open
    } else {
        openBtn.style.display = "block"; // Show the button when sidebar is closed
    }
}


// Contact Form Submission Alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh
    alert("Thank you for contacting me! I'll get back to you soon.");
    this.reset(); // Clears the form after submission
});
