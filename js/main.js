/* ================================================
   DAVIDOV ISRAEL INVESTMENTS - Main JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // -------------------- Navigation -------------------- //
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect for navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // -------------------- Smooth Scroll -------------------- //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // -------------------- Intersection Observer for Animations -------------------- //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    document.querySelectorAll('.service-card, .process-step, .area-card, .testimonial-card, .blog-card, .why-us-list li').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
    
    // -------------------- Form Validation -------------------- //
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
                
                // Email validation
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = '<p>Thank you! We\'ll be in touch shortly.</p>';
                successMessage.style.cssText = 'background-color: #48bb78; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; text-align: center;';
                
                form.appendChild(successMessage);
                form.reset();
                
                setTimeout(() => successMessage.remove(), 5000);
            }
        });
        
        // Remove error on input
        form.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', () => field.classList.remove('error'));
        });
    });
    
    // -------------------- Active Navigation Link -------------------- //
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a:not(.nav-cta)');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (currentPath.includes(href) || (currentPath.endsWith('/') && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();
});
