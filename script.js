// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Image Slider functionality (only on home page)
    const slider = document.querySelector('.slider');
    if (slider) {
        let currentSlide = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        const sliderButtons = document.querySelectorAll('.slider-button');
        
        // Function to show a specific slide
        function showSlide(n) {
            currentSlide = n;
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update active button
            sliderButtons.forEach((button, index) => {
                if (index === currentSlide) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
        
        // Add click events to slider buttons
        sliderButtons.forEach(button => {
            button.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                showSlide(slideIndex);
            });
        });
        
        // Auto-advance slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // Form Validation (only on contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
            
            // Validate subject
            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                document.getElementById('subjectError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('subjectError').style.display = 'none';
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('messageError').style.display = 'none';
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
    }
});