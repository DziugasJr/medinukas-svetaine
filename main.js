document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scroll-to-products");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault(); // ← Svarbu, jei <a> su href
      const section = document.getElementById("products-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      burger.classList.toggle("open");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scroll-to-products");
  console.log("scrollBtn in DOMContentLoaded:", scrollBtn);

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      console.log("Clicked. Section:", document.getElementById("products-section"));
      document.getElementById("products-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scroll-to-products");
  console.log("scrollBtn in DOMContentLoaded:", scrollBtn);

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const section = document.getElementById("products-section");
      console.log("Clicked. Section:", section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!email && !phone) {
        e.preventDefault();
        alert("Prašome nurodyti bent el. paštą arba telefono numerį.");
        return;
      }

      alert("Užsakymas pateiktas sėkmingai!");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product');
  if (product) {
    const prodField = document.getElementById('product');
    if (prodField) {
      prodField.value = decodeURIComponent(product);
    }
  }

  // ... tavo esamas kontaktų kodas
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product');
  if (product) {
    document.getElementById("product").value = decodeURIComponent(product);
  }

  const form = document.getElementById("order-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // sustabdo įprastą siuntimą

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!email && !phone) {
      alert("Prašome nurodyti bent el. paštą arba telefono numerį.");
      return;
    }

    const subject = encodeURIComponent("Užsakymas: " + product);
    const body = encodeURIComponent(
      `Vardas: ${name}\n` +
      `El. paštas: ${email || "Nenurodytas"}\n` +
      `Telefonas: ${phone || "Nenurodytas"}\n\n` +
      `Gaminys: ${product}\n` +
      `Adresas: ${address}`
    );

    window.location.href = `mailto:medinukaslazdijai@gmail.com?subject=${subject}&body=${body}`;
  });
});
