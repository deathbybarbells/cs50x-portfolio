// Online Training Form Submission Chat GPT Helped Me WIth The Java
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('#online-training-form');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            const formData = new FormData(signUpForm);

            // Example: Log form data to console (for development)
            console.log('Form submitted:', {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone')
            });

            // Replace with actual form handling, e.g., API call
            alert('Thank you for signing up! We will contact you shortly.');
        });
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add Dynamic Scroll Effect to Scroll Container
const scrollText = document.querySelector('.scroll-text');
if (scrollText) {
    scrollText.style.animationDuration = `${scrollText.offsetWidth / 100}s`;
}

