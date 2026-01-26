/* ================================================
   DY ISRAELI REAL ESTATE - Main JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {

    // -------------------- Language Management -------------------- //
    const langToggle = document.getElementById('langToggle');
    const langFlag = document.querySelector('.lang-flag');
    const htmlElement = document.documentElement;

    // Get saved language or default to English
    let currentLang = localStorage.getItem('siteLanguage') || 'en';

    // Set initial language on page load
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('siteLanguage', lang);

        // Update HTML attributes
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

        // Update flag
        if (langFlag) {
            langFlag.textContent = lang === 'en' ? '🇺🇸' : '🇮🇱';
        }

        // Update all text elements
        const textElements = document.querySelectorAll('.lang-text');
        textElements.forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (text) {
                // Check if element has HTML content in data attribute
                if (text.includes('<')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        });
    }

    // Initialize language
    setLanguage(currentLang);

    // Language toggle button
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'he' : 'en';
            setLanguage(newLang);
        });
    }

    // -------------------- Popup Modal Management -------------------- //
    const modal = document.getElementById('scheduleModal');
    const modalClose = document.querySelector('.modal-close');

    // Check if modal should be shown (not shown in last 24 hours)
    function shouldShowModal() {
        const lastShown = localStorage.getItem('modalLastShown');
        if (!lastShown) return true;

        const daysSinceLastShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
        return daysSinceLastShown >= 1;
    }

    // Show modal with delay
    if (modal && shouldShowModal()) {
        setTimeout(function() {
            modal.classList.add('active');
            localStorage.setItem('modalLastShown', Date.now().toString());
        }, 2000); // 2 second delay
    }

    // Close modal when clicking X
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

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

    if (navbar) {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
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
            if (navMenu.classList.contains('active') &&
                !navbar.contains(e.target)) {
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
    const animatedElements = document.querySelectorAll(
        '.service-card, .process-step, .area-card, .testimonial-card, ' +
        '.blog-card, .why-us-list li, .reason-card, .team-member'
    );

    animatedElements.forEach((el, index) => {
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

                const successText = currentLang === 'en'
                    ? "Thank you! We'll be in touch shortly."
                    : "תודה! ניצור איתך קשר בקרוב.";

                successMessage.innerHTML = `<p>${successText}</p>`;
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

            // Check if current page matches link
            if (href && (
                currentPath.includes(href) ||
                (currentPath.endsWith('/') && href.includes('index')) ||
                (currentPath === '/' && href.includes('index'))
            )) {
                link.classList.add('active');
            }
        });
    }

    setActiveNavLink();

    // -------------------- URL Parameter Language Detection -------------------- //
    // Check for ?lang= parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam && (langParam === 'en' || langParam === 'he')) {
        // Only set language from URL if no preference is stored
        if (!localStorage.getItem('siteLanguage')) {
            setLanguage(langParam);
        }
    }

    // -------------------- Lazy Loading for Images -------------------- //
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
