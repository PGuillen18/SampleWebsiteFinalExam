document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    var popup = document.createElement('div');
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    popup.style.textAlign = 'center';
    popup.style.maxWidth = '80%';

    var message = document.createElement('p');
    message.textContent = 'Muchas gracias, se le contactará lo más pronto posible';
    message.style.fontSize = '20px'; 
    message.style.fontFamily = 'Jost, sans-serif'; 
    popup.appendChild(message);

    var button = document.createElement('button');
    button.textContent = 'Aceptar';
    button.style.fontSize = '20px'; 
    button.style.fontFamily = 'Jost, sans-serif';
    button.addEventListener('click', function() {
        document.body.removeChild(overlay); 
    });
    popup.appendChild(button);

    overlay.appendChild(popup);

    document.body.appendChild(overlay);
});

function showOverlay(container) {
    const overlay = container.querySelector('.image-overlay');
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
}

function hideOverlay(container) {
    const overlay = container.querySelector('.image-overlay');
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
}

var currentReview = 0;

function changeReview() {
    var reviews = document.querySelectorAll('.review');

    if (currentReview >= reviews.length - 1) {
        currentReview = 0;
    } else {
        currentReview++;
    }

    showReview(currentReview);
}

function showReview(index) {
    var reviews = document.querySelectorAll('.review');

    reviews.forEach(function (review, i) {
        if (i === index) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}

var currentSlide = 0;

function showSlides() {
    var slides = document.querySelectorAll('.screenshot-container');
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach(function (slide) {
        slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
}

function changeSlide(n, direction) {
    currentSlide += n;
    showSlides();

    var prevArrow = document.querySelector('.prev');
    var nextArrow = document.querySelector('.next');

    if (direction === 'left') {
        prevArrow.style.left = '10px';
        nextArrow.style.right = 'auto';
    } else if (direction === 'right') {
        nextArrow.style.right = '10px';
        prevArrow.style.left = 'auto';
    }
}

showSlides();

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
        box.classList.remove('aparecer-con-animacion');
    });

    boxes.forEach(function(box) {
        if (isElementInViewport(box)) {
            box.classList.add('aparecer-con-animacion');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var dropdownMenu = document.querySelector('.dropdown-menu');

    if (!navbar.classList.contains("hidden")) {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    }
}

// Script para ocultar/mostrar la barra de navegación al hacer scroll
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("hidden");
    } else {
        document.getElementById("navbar").classList.add("hidden");
        document.querySelector('.dropdown-menu').style.display = 'none';
    }

    prevScrollpos = currentScrollPos;
};
