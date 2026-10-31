"use client";

import { useEffect } from "react";

const scripts = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/owl.carousel.min.js",
  "/assets/js/parallax.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/jquery.meanmenu.js",
  "/assets/js/progresscircle.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/jquery.ajaxchimp.min.js",
  "/assets/js/form-validator.min.js",
  "/assets/js/contact-form-script.js",
  "/assets/js/main.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-sperious-src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.speriousSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function SiteScripts() {
  useEffect(() => {
    let cancelled = false;

    async function boot() {
      for (const src of scripts) {
        if (cancelled) {
          return;
        }
        await loadScript(src);
      }
    }

    boot().catch(() => {
      // Keep the page usable if a vendor script fails to load.
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
