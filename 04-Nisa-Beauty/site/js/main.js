/**
 * NISA BEAUTY — Client Script
 * Accessible Service Tabs, Mobile Nav, Vanilla Lightbox & Local Demo Form
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

  // 2. Service Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.setAttribute('aria-selected', 'false'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.setAttribute('aria-selected', 'true');
      const targetId = btn.getAttribute('aria-controls');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 3. Accessible Gallery Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = lightboxModal?.querySelector('.lightbox-img');
  const lightboxCaption = lightboxModal?.querySelector('.lightbox-caption');
  const lightboxClose = lightboxModal?.querySelector('.lightbox-close');
  const lightboxPrev = lightboxModal?.querySelector('.lightbox-prev');
  const lightboxNext = lightboxModal?.querySelector('.lightbox-next');
  const galleryLinks = Array.from(document.querySelectorAll('.nisa-gallery-item'));

  let currentIndex = 0;
  let lastActiveElement = null;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lastActiveElement = document.activeElement;
    lightboxModal.setAttribute('aria-hidden', 'false');
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function updateLightbox() {
    const item = galleryLinks[currentIndex];
    if (!item) return;
    const img = item.querySelector('.nisa-gallery-img');
    const caption = item.getAttribute('data-caption') || img?.alt || '';

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = caption;
    }
  }

  function closeLightbox() {
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxModal.style.display = 'none';
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
    updateLightbox();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryLinks.length;
    updateLightbox();
  }

  galleryLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'ArrowRight') nextImage();
    }
  });

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // 4. Contact Form Demo Mode
  const contactForm = document.getElementById('demoContactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        contactForm.reset();
      } else {
        contactForm.reportValidity();
      }
    });
  }
});
