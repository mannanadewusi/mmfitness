/**
 * MM Fitness - Responsive Site Navigation & Dynamic Interactivity Script
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu & Backdrop Handling
  const menuBtn = document.querySelector('button[aria-controls="mobileMenu"]');
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let backdrop = document.getElementById("mobileMenuBackdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "mobileMenuBackdrop";
    backdrop.className =
      "fixed inset-0 bg-black/70 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden";
    document.body.appendChild(backdrop);
  }

  function openDrawer() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("-translate-x-full");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100", "pointer-events-auto");
    document.body.classList.add("overflow-hidden");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("-translate-x-full");
    backdrop.classList.remove("opacity-100", "pointer-events-auto");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("-translate-x-full");
      if (isOpen) closeDrawer();
      else openDrawer();
    });
  }

  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      mobileMenu &&
      !mobileMenu.classList.contains("-translate-x-full")
    ) {
      closeDrawer();
    }
  });

  // 2. Intersection Observer for Scroll Animations
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animationTargets = document.querySelectorAll(
    ".fade-in-section, .fade-up, .reveal, .reveal-up, .animate-fade-in-up, .timeline-line"
  );

  if (prefersReducedMotion) {
    animationTargets.forEach((el) => {
      el.classList.add("is-visible", "visible", "active");
    });
  } else if (animationTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "visible", "active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    animationTargets.forEach((el) => observer.observe(el));
  }

  // 3. Gallery Lightbox Handler (if present)
  const gallerySection = document.querySelector(
    'section[aria-labelledby="gallery-heading"]'
  );
  const lightbox = document.getElementById("gallery-lightbox");

  if (gallerySection && lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector("[data-caption]");

    const closeLightbox = () => {
      lightbox.classList.add("opacity-0", "pointer-events-none");
      lightbox.classList.remove("opacity-100");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("overflow-hidden");
    };

    gallerySection.querySelectorAll("img").forEach((image) => {
      image.classList.add("cursor-zoom-in");
      image.setAttribute("tabindex", "0");
      image.setAttribute("role", "button");

      const openLightbox = () => {
        if (lightboxImage) {
          lightboxImage.src = image.src;
          lightboxImage.alt = image.alt || "Gallery image";
        }
        if (lightboxCaption) {
          lightboxCaption.textContent = image.alt || "";
        }
        lightbox.classList.remove("opacity-0", "pointer-events-none");
        lightbox.classList.add("opacity-100");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("overflow-hidden");
      };

      image.addEventListener("click", openLightbox);
      image.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox();
        }
      });
    });

    lightbox.addEventListener("click", (e) => {
      if (
        e.target === lightbox ||
        e.target.hasAttribute("data-close-lightbox") ||
        e.target.closest("[data-close-lightbox]")
      ) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // 4. Booking modal. Links still work normally when JavaScript is unavailable.
  function initBookingModal() {
    let modal = document.getElementById("bookingModal");

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "bookingModal";
      modal.className =
        "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-label", "Book a session");
      Object.assign(modal.style, {
        position: "fixed",
        inset: "0",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0, 0, 0, 0.8)",
        opacity: "0",
        visibility: "hidden",
        pointerEvents: "none",
        transition: "opacity 200ms ease",
      });
      modal.innerHTML = `
        <div style="position: relative; width: min(100%, 1024px); height: min(92vh, 760px); background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,.45);">
          <button type="button" data-close-booking-modal aria-label="Close booking popup" style="position: absolute; z-index: 1; top: 12px; right: 12px; width: 40px; height: 40px; border: 0; border-radius: 999px; background: #101417; color: #fff; cursor: pointer;">
            <span class="material-symbols-outlined">close</span>
          </button>
          <iframe title="Book a session with MM Fitness" style="display: block; width: 100%; height: 100%; border: 0;" allow="payment" loading="lazy"></iframe>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const frame = modal.querySelector("iframe");
    const closeButton = modal.querySelector("[data-close-booking-modal]");

    function closeBookingModal() {
      modal.classList.remove("opacity-100", "pointer-events-auto");
      modal.classList.add("opacity-0", "pointer-events-none");
      modal.style.opacity = "0";
      modal.style.visibility = "hidden";
      modal.style.pointerEvents = "none";
      document.body.classList.remove("overflow-hidden");
      if (frame) frame.removeAttribute("src");
    }

    function openBookingModal(url) {
      if (frame) frame.src = url;
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100", "pointer-events-auto");
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
      modal.style.pointerEvents = "auto";
      document.body.classList.add("overflow-hidden");
      if (closeButton) closeButton.focus();
    }

    if (closeButton) closeButton.addEventListener("click", closeBookingModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeBookingModal();
    });

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(
        'a[href*="cal.com/mannanx"], [data-cal-link], [data-booking-embed]'
      );
      if (!trigger) return;

      const embeddedBookingUrl = trigger.getAttribute("data-booking-embed");
      const calLink = trigger.getAttribute("data-cal-link");
      const url = embeddedBookingUrl || (calLink
        ? `https://cal.com/${calLink.replace(/^\/+/, "")}`
        : trigger.href);

      event.preventDefault();
      openBookingModal(url);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("opacity-100")) {
        closeBookingModal();
      }
    });
  }

  initBookingModal();
});
