document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.textContent.toLowerCase(); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const hireMeButton = document.querySelector('.home-hireme');
hireMeButton.addEventListener('click', () => {
    alert('Thank you for your interest! Please feel free to contact me for further discussion.');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'black';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    }, options);

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});

const navbar = document.querySelector('.navbar-2');
const hamburgerIcon = document.querySelector('.hambarger-icon');
const cancelIcon = document.querySelector('.cancel-icon');
const navbarLinks = document.querySelectorAll('.navbar-2 ul li a');

window.onload = () => {
    navbar.style.display = 'none';
};

hamburgerIcon.addEventListener('click', () => {
    navbar.style.display = 'flex';
});

cancelIcon.addEventListener('click', () => {
    navbar.style.display = 'none';
});

navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(`#${targetId}`);

        window.scrollTo({
            top: targetSection.offsetTop, 
            behavior: 'smooth'
        });

        navbar.style.display = 'none';
    });
});
