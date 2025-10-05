document.addEventListener("DOMContentLoaded", () => {
  // Scroll to products
  const scrollBtn = document.getElementById("scroll-to-products");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.getElementById("products-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Header shrink on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  // Burger menu toggle
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      burger.classList.toggle("open");
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Autopopulate product field in contact
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get("product");
  if (product) {
    const prodField = document.getElementById("product");
    if (prodField) {
      prodField.value = decodeURIComponent(product);
    }
  }
});
