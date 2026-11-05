/**
 * FOS PHOTOGRAPHY — Main Client Script
 * Accessible Gallery Filters, Vanilla Lightbox, Mobile Navigation & Local Demo Form
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

  // 2. Gallery Filtering & Dynamic Counts
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  function updateCounts() {
    const totalCount = galleryItems.length;
    const portraitsCount = galleryItems.filter(el => el.dataset.category === 'portraits').length;
    const landscapesCount = galleryItems.filter(el => el.dataset.category === 'landscapes').length;
    const detailsCount = galleryItems.filter(el => el.dataset.category === 'details').length;

    const badgeAll = document.querySelector('[data-badge="all"]');
    const badgePortraits = document.querySelector('[data-badge="portraits"]');
    const badgeLandscapes = document.querySelector('[data-badge="landscapes"]');
    const badgeDetails = document.querySelector('[data-badge="details"]');

    if (badgeAll) badgeAll.textContent = `(${totalCount})`;
    if (badgePortraits) badgePortraits.textContent = `(${portraitsCount})`;
    if (badgeLandscapes) badgeLandscapes.textContent = `(${landscapesCount})`;
    if (badgeDetails) badgeDetails.textContent = `(${detailsCount})`;
  }
  updateCounts();

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'flex';
          item.removeAttribute('aria-hidden');
        } else {
          item.style.display = 'none';
          item.setAttribute('aria-hidden', 'true');
        }
      });
    });
  });

  // 3. Accessible Vanilla Lightbox (Cycles ONLY visible items)
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = lightboxModal?.querySelector('.lightbox-img');
  const lightboxCaption = lightboxModal?.querySelector('.lightbox-caption');
  const lightboxDesc = lightboxModal?.querySelector('.lightbox-desc');
  const lightboxClose = lightboxModal?.querySelector('.lightbox-close');
  const lightboxPrev = lightboxModal?.querySelector('.lightbox-prev');
  const lightboxNext = lightboxModal?.querySelector('.lightbox-next');

  let currentVisibleItems = [];
  let currentIndex = 0;
  let lastActiveElement = null;

  function openLightbox(index) {
    currentVisibleItems = galleryItems.filter(item => item.style.display !== 'none');
    if (currentVisibleItems.length === 0) return;

    currentIndex = index;
    updateLightboxContent();

    lastActiveElement = document.activeElement;
    lightboxModal.setAttribute('aria-hidden', 'false');
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function updateLightboxContent() {
    const item = currentVisibleItems[currentIndex];
    if (!item) return;

    const img = item.querySelector('.gallery-img');
    const title = item.querySelector('.gallery-title')?.textContent || '';
    const desc = item.querySelector('.mono-caption')?.textContent || '';

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    if (lightboxCaption) lightboxCaption.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
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
    currentIndex = (currentIndex - 1 + currentVisibleItems.length) % currentVisibleItems.length;
    updateLightboxContent();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentVisibleItems.length;
    updateLightboxContent();
  }

  // Attach click to gallery item links
  galleryItems.forEach(item => {
    const link = item.querySelector('.gallery-thumb-link');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        currentVisibleItems = galleryItems.filter(it => it.style.display !== 'none');
        const visibleIdx = currentVisibleItems.indexOf(item);
        if (visibleIdx !== -1) {
          openLightbox(visibleIdx);
        }
      });
    }
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  // Keyboard navigation & Focus trap for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.getAttribute('aria-hidden') === 'false') {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Tab') {
        // Focus trap
        const focusable = lightboxModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
  });

  // Click outside content to close lightbox
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
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
