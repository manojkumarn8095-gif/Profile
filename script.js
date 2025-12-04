// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Change the background color based on scroll position (window.scrollY > 50)
    // This uses a ternary operator: (condition) ? value_if_true : value_if_false
    navbar.style.backgroundColor = window.scrollY > 50 ?
        'rgba(10, 10, 10, 0.98)' : // Slightly less transparent when scrolled
        'rgba(10, 10, 10, 0.95)'; // Default transparency at the top
});