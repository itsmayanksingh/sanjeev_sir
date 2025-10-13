
// Mobile nav and mega menu toggle script
      document.addEventListener('DOMContentLoaded', function () {
        const nav = document.querySelector('.navbar001');
        const navToggle = nav.querySelector('.nav-toggle001');
        const navMenu = nav.querySelector('.nav-menu001');
        const megaParent = nav.querySelector('.mega-parent');
        const megaDropdown = nav.querySelector('.mega-dropdown');
        const servicesLink = megaParent ? megaParent.querySelector('.services-link') : null;
        const cta = nav.querySelector('.nav-btn001');

        // Hamburger toggle - works on mobile widths
        navToggle.addEventListener('click', function (e) {
          e.stopPropagation();
          const open = navMenu.classList.toggle('active');
          navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');

          // when closing menu also close mega dropdown
          if (!open && megaParent && megaParent.classList.contains('open')) {
            megaParent.classList.remove('open');
          }
        });

        // Services (mega) toggle behavior on mobile
        if (servicesLink && megaParent && megaDropdown) {
          servicesLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 992) {
              e.preventDefault();
              e.stopPropagation();
              const opened = megaParent.classList.toggle('open');
              // ensure mobile nav is visible so user can see the mega content
              if (!navMenu.classList.contains('active')) navMenu.classList.add('active');
              // set aria and display handled by CSS (.open)
              servicesLink.setAttribute('aria-expanded', opened ? 'true' : 'false');
            }
          });
        }

        // Close button functionality for mega menu on mobile
        const megaCloseBtn = document.querySelector('.mega-close-btn');
        if (megaCloseBtn) {
          megaCloseBtn.addEventListener('click', e => {
            e.stopPropagation();
            if (megaParent.classList.contains('open')) {
              megaParent.classList.remove('open');
              // Optionally close entire mobile nav menu as well:
              if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
              }
              // Update aria attribute
              if (servicesLink) servicesLink.setAttribute('aria-expanded', 'false');
            }
          });
        }

        // Close menus when clicking outside nav
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.navbar001')) {
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            if (megaParent && megaParent.classList.contains('open')) megaParent.classList.remove('open');
          }
        });

        // Reset inline/mobile classes on resize -> bigger screens
        window.addEventListener('resize', function () {
          if (window.innerWidth > 992) {
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            if (megaParent && megaParent.classList.contains('open')) megaParent.classList.remove('open');
          }
        });

        // Accessibility: close on Escape
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            if (megaParent && megaParent.classList.contains('open')) megaParent.classList.remove('open');
          }
        });
      });

    // mega drop down end here 
 
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const counter = setInterval(() => {
      start++;
      el.textContent = start + "+";
      if (start >= target) {
        clearInterval(counter);
      }
    }, stepTime);
  }

  // Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statCircles = entry.target.querySelectorAll(".stat-circle .number");
        
        animateCounter(statCircles[0], 100);
        animateCounter(statCircles[1], 17);
        animateCounter(statCircles[2], 100);

        observer.unobserve(entry.target); // run only once
      }
    });
  }, {
    threshold: 0.4,
  });

  // Observe the section
  const projectSection = document.querySelector(".project-section");
  if (projectSection) {
    observer.observe(projectSection);
  }


    



 