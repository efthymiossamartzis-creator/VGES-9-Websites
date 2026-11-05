/**
 * ARETI MEDICAL — Client Script
 * Accessible Mobile Navigation & Local Demo Inquiry Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('active')) {
        siteNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // 2. Demo Form Submission
  const demoForm = document.getElementById('demoInquiryForm');
  const formFeedback = document.getElementById('formFeedback');

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (demoForm.checkValidity()) {
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        demoForm.reset();
      } else {
        demoForm.reportValidity();
      }
    });
  }
});
