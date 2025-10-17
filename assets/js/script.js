
// Mobile nav and mega menu toggle script
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar001');
  if (!nav) return;

  const navToggle = nav.querySelector('.nav-toggle001');
  const navMenu = nav.querySelector('.nav-menu001');
  if (!navToggle || !navMenu) return;

  const megaParent = nav.querySelector('.mega-parent');
  const megaDropdown = megaParent ? megaParent.querySelector('.mega-dropdown') : null;
  const servicesLink = megaParent ? megaParent.querySelector('.services-link') : null;
  const megaCloseBtn = nav.querySelector('.mega-close-btn') || document.querySelector('.mega-close-btn');
  const root = document.body;

  const toggleBodyLock = (isLocked) => {
    root.classList.toggle('mobile-nav-open', Boolean(isLocked));
  };

  const closeMega = () => {
    if (megaParent && megaParent.classList.contains('open')) {
      megaParent.classList.remove('open');
      if (servicesLink) servicesLink.setAttribute('aria-expanded', 'false');
    }
  };

  const closeMobileNav = () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    root.classList.remove('nav-menu-open');
    toggleBodyLock(false);
    applyScrollState();
  };

  const updateNavHeightVar = () => {
    const height = nav.offsetHeight;
    if (height) {
      nav.style.setProperty('--nav-height', `${height}px`);
    }
  };

  const applyScrollState = () => {
    if (window.scrollY > 40) {
      root.classList.add('nav-condensed');
    } else {
      root.classList.remove('nav-condensed');
    }
  };

  // Hamburger toggle - works on mobile widths
  navToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const willOpen = !navMenu.classList.contains('active');
    navMenu.classList.toggle('active', willOpen);
    navToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

    if (willOpen) {
      navMenu.scrollTop = 0;
      root.classList.add('nav-menu-open');
    } else {
      closeMega();
      root.classList.remove('nav-menu-open');
      applyScrollState();
    }

    toggleBodyLock(willOpen);
  });

  // Services (mega) toggle behavior on mobile
  if (servicesLink && megaParent && megaDropdown) {
    servicesLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.stopPropagation();
        const opened = megaParent.classList.toggle('open');
        servicesLink.setAttribute('aria-expanded', opened ? 'true' : 'false');
        if (opened && !navMenu.classList.contains('active')) {
          navMenu.classList.add('active');
          navToggle.setAttribute('aria-expanded', 'true');
          toggleBodyLock(true);
        }
      }
    });
  }

  // Close button functionality for mega menu on mobile
  if (megaCloseBtn) {
    megaCloseBtn.addEventListener('click', e => {
      e.stopPropagation();
      closeMega();
      closeMobileNav();
    });
  }

  // Close menus when clicking outside nav
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar001')) {
      closeMega();
      closeMobileNav();
    }
  });

  // Close mobile menu after selecting a link (except the services toggle)
  navMenu.addEventListener('click', function (e) {
    if (window.innerWidth > 992) return;
    const link = e.target.closest('a');
    if (!link) return;
    if (servicesLink && link === servicesLink) return;

    closeMega();
    closeMobileNav();
  });

  // Reset inline/mobile classes on resize -> bigger screens
  window.addEventListener('resize', function () {
    updateNavHeightVar();
    if (window.innerWidth > 992) {
      closeMobileNav();
      closeMega();
    }
  });

  // Accessibility: close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMega();
      closeMobileNav();
    }
  });

  window.addEventListener('scroll', applyScrollState, { passive: true });
  window.addEventListener('load', updateNavHeightVar);

  // Initial states
  updateNavHeightVar();
  applyScrollState();
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


    



 
