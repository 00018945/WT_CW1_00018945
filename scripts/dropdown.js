
const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelector('.nav-links');

dropdown.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // open or hide menu
});

// Top Button Functionality
const backToTop = document.getElementById('topbtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block'; // show button after 200
    } else {
        backToTop.style.display = 'none'; // hide btn near to nav
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // smmoothly scrolling
});
