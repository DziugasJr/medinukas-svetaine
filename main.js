document.addEventListener("DOMContentLoaded", () => {
  // Scroll mygtukas – „Žiūrėti kolekciją“ (tik index puslapyje)
  const scrollBtn = document.getElementById("scroll-to-products");
  const section = document.getElementById("products-section");

  if (scrollBtn && section) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Grįžimo mygtukas „Grįžti į pagrindinį“
  const backBtn = document.getElementById("back-to-home");
  const backHomeBtn = document.getElementById("backHomeBtn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      // Nereikia preventDefault, nes href jau nukreips
      // Bet galima papildomai:
      window.location.href = "index.html";
    });
  }
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", (e) => {
      // Nereikia preventDefault, nes href jau nukreips
      // Bet galima papildomai:
      window.location.href = "index.html";
    });
  }

  // Shrinking header on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  }

  // Burger menu navigacija
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      burger.classList.toggle("open");
    });
  }

  // Užpildo produktą formoje, jei perduotas per URL
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get("product");
  if (product) {
    const prodField = document.getElementById("product");
    if (prodField) {
      prodField.value = decodeURIComponent(product);
    }
  }

  // Scroll į viršų mygtukas (jei turi)
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
