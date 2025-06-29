 // Initialize AOS
        AOS.init();

        // Navbar scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav'); 
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
        });
        // Mega menu toggle
        const servicesItem = document.getElementById('services-item');
        servicesItem.addEventListener('click', (e) => {
            e.preventDefault();
            servicesItem.classList.toggle('open');
        });
        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
