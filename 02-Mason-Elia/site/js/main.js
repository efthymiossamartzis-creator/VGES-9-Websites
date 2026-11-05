/* ==========================================================================
   MASON ELIA — main.js
   Vanilla JavaScript only. Zero dependencies, zero external network calls.
   Clean demo interactions & accessible navigation.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------- sticky header state */
  function initStickyHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------- mobile nav */
  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("primaryNav");
    var backdrop = document.getElementById("navBackdrop");
    if (!toggle || !nav) return;

    var open = function () {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Κλείσιμο μενού");
      if (backdrop) {
        backdrop.hidden = false;
        requestAnimationFrame(function () { backdrop.classList.add("is-open"); });
      }
    };
    var close = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Άνοιγμα μενού");
      if (backdrop) {
        backdrop.classList.remove("is-open");
        window.setTimeout(function () { backdrop.hidden = true; }, 320);
      }
    };

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) { close(); } else { open(); }
    });
    if (backdrop) backdrop.addEventListener("click", close);
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------- smooth anchors */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    if (!links.length) return;
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 74;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ---------------------------------------------- scroll reveal (IO) */
  function initScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------- scrollspy nav */
  function initScrollSpy() {
    var sections = document.querySelectorAll("main section[id]");
    var links = document.querySelectorAll('.primary-nav a[href^="#"]');
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          var active = map[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------------------------------------------------- gallery lightbox */
  function initLightbox() {
    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightboxImg");
    var closeBtn = document.getElementById("lightboxClose");
    var items = document.querySelectorAll(".gallery-item[data-full]");
    if (!box || !img || !items.length) return;

    var lastFocus = null;
    var open = function (src, alt) {
      lastFocus = document.activeElement;
      img.setAttribute("src", src);
      img.setAttribute("alt", alt || "Φωτογραφία Mason Elia");
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    };
    var close = function () {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      img.removeAttribute("src");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    items.forEach(function (item) {
      var trigger = function () {
        var full = item.getAttribute("data-full");
        var inner = item.querySelector("img");
        open(full, inner ? inner.getAttribute("alt") : "");
      };
      item.addEventListener("click", trigger);
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      });
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) {
      if (e.target === box) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
  }

  /* -------------------------------------------- reservation validation */
  function initReserveForm() {
    var form = document.getElementById("reserveForm");
    var status = document.getElementById("formStatus");
    if (!form) return;

    // Set minimum date to today
    var dateInput = form.querySelector("#rf-date");
    if (dateInput) {
      var now = new Date();
      var iso = now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0");
      dateInput.setAttribute("min", iso);
    }

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var setError = function (field, on) {
      if (!field) return;
      field.classList.toggle("has-error", on);
    };

    var validate = function () {
      var ok = true;
      var check = function (sel, testFn) {
        var input = form.querySelector(sel);
        if (!input) return;
        var field = input.closest(".field");
        var valid = testFn(input.value.trim(), input);
        setError(field, !valid);
        if (!valid) ok = false;
        return valid;
      };

      check("#rf-name", function (v) { return v.length >= 2; });
      check("#rf-email", function (v) { return emailRe.test(v); });

      return ok;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.classList.remove("is-visible"); }
      if (!validate()) {
        var firstErr = form.querySelector(".field.has-error input, .field.has-error select");
        if (firstErr) firstErr.focus();
        return;
      }

      // Local demo mode: no network request, no data stored
      if (status) {
        status.classList.add("is-visible");
        status.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
      }
      form.reset();
      if (dateInput) dateInput.setAttribute("min", dateInput.getAttribute("min"));
    });

    // Clear error state on input
    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        var field = el.closest(".field");
        if (field && field.classList.contains("has-error")) field.classList.remove("has-error");
      });
      el.addEventListener("change", function () {
        var field = el.closest(".field");
        if (field && field.classList.contains("has-error")) field.classList.remove("has-error");
      });
    });
  }

  /* --------------------------------------------------- back to top */
  function initBackToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle("is-visible", window.scrollY > 450);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* --------------------------------------------------------- boot */
  document.addEventListener("DOMContentLoaded", function () {
    initStickyHeader();
    initMobileNav();
    initSmoothScroll();
    initScrollReveal();
    initScrollSpy();
    initLightbox();
    initReserveForm();
    initBackToTop();
  });
})();
