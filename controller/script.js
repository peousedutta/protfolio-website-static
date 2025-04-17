document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        const spans = this.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    }
    
    // Handle scroll events
    const header = document.getElementById('header');
    
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    // Typing effect
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
      const words = [
        "I ensure software quality through automation", 
        "I drive successful project delivery from start to finish", 
        "I manage stakeholder expectations with clarity and consistency"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;
      
      function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          typingElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50;
        } else {
          typingElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 1500; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500; // Pause before starting new word
        }
        
        setTimeout(type, typeSpeed);
      }
      
      setTimeout(type, 1000);
    }
    
    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    
    // Animate elements on scroll (simple implementation)
    const animateElements = document.querySelectorAll('[data-aos]');
    
    function checkVisible() {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.9) {
          element.classList.add('animated');
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    if (animateElements.length) {
      animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        const delay = element.getAttribute('data-aos-delay');
        if (delay) {
          element.style.transitionDelay = `${parseInt(delay)}ms`;
        }
      });
      
      window.addEventListener('scroll', checkVisible);
      checkVisible(); // Check on load
    }
  });