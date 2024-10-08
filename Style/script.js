// Toggle visibility for FAQ answers or any collapsible content
document.querySelectorAll('.btnbox').forEach(btn => {
    btn.addEventListener('click', () => {
        const contentDiv = btn.nextElementSibling;
        contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block';
    });
});

// Validate the email form (basic example)
const emailInput = document.querySelector('.emailbox input');
const emailForm = document.querySelector('.newsletter button');

emailForm.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        // Perform the subscription logic (e.g., send to server)
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Handling hover effects for buttons (if needed additional effects)
document.querySelectorAll('.signinbtn button, .newsletter button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgb(163, 0, 8)';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'rgb(229, 9, 20)';
    });
});

// Responsive behavior adjustments (for any special cases)
window.addEventListener('resize', () => {
    // You can adjust styles or functionality here if needed on window resize
});

// Handling the play/pause of videos on hover
document.querySelectorAll('.con2image video, .con4image video').forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });
    video.addEventListener('mouseout', () => {
        video.pause();
    });
});

// Sticky header effect (if needed to enhance the user experience)
window.addEventListener('scroll', () => {
    const header = document.querySelector('#a');
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = 'rgba(33, 33, 33, 0.9)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Dynamic content loading or animation start (if using scroll-based animations)
window.addEventListener('scroll', () => {
    // Example: Reveal content on scroll
    document.querySelectorAll('.container').forEach(container => {
        const containerPosition = container.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (containerPosition < screenPosition) {
            container.classList.add('active');
        }
    });
});

// Example: Toggling a class to initiate CSS animations or transitions
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetElement = document.querySelector(button.getAttribute('data-target'));
        targetElement.classList.toggle('active');
    });
});
