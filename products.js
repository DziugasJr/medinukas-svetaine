const products = [
  {
    title: "Uosio masyvo kavos staliukas",
    price: "€150",
    images: [
      "products/uosio-stalas.jpg",
      "products/uosio-stalas1.jpg",
      "products/uosio-stalas2.jpg",
      "products/uosio-stalas3.jpg"
    ]
  },
  {
    title: "Stalas pagal Jūsų norus!",
    price: "Nuo €270",
    images: [
      "products/stalas1.jpg",
      "products/stalas2.jpg",
      "products/stalas3.jpg",
      "products/stalas4.jpg",
      "products/stalas5.jpg",
      "products/stalas6.jpg"
    ]
  },
  {
    title: "Medinis stovas augintinio bliūdeliams su vardu",
    price: "Nuo €20",
    images: [
      "products/bliudam1.jpg",
      "products/bliudam2.jpg",
      "products/bliudam3.jpg"
    ]
  },

  {title: "Rankų darbo degintas vazonas",
    price: "Nuo €25",
      images: [
      "products/vazonas-degintas.jpg",
      "products/vazonas-degintas1.jpg",
      "products/vazonas-degintas2.jpg"
    ]
  },
    {
      title: "Žvakidė iš natūralaus medžio",
      price: "JAU GREITAI!",
      images: ["products/zvakides.jpg"]
    },
  {
    title:"Vyno laikikliai",
    price: "Nuo €15",
    images: ["products/laikiliai.jpg"]
  },
]
  


const grid = document.getElementById("product-grid");

if (grid) {
  products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Pagrindinis paveikslėlis
    let galleryHtml = `
      <a href="${prod.images[0]}" class="glightbox" data-gallery="${prod.title}">
        <img src="${prod.images[0]}" alt="${prod.title}">
      </a>
    `;

    // Kiti paveikslėliai (nematomi, bet įtraukti į galeriją)
    for (let i = 1; i < prod.images.length; i++) {
      galleryHtml += `
        <a href="${prod.images[i]}" class="glightbox" data-gallery="${prod.title}" style="display: none;"></a>
      `;
    }

    // Galutinis HTML
    card.innerHTML = `
      ${galleryHtml}
      <h3>${prod.title}</h3>
      <p>${prod.price}</p>
      <a href="contact.html?product=${encodeURIComponent(prod.title)}" class="btn-primary">Užsakyti</a>

    `;

    grid.appendChild(card);
  });

  // Paleidžiam GLightbox TIK vieną kartą
  const lightbox = GLightbox({
    selector: '.glightbox'
  });
}

// Įėjimo animacija (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".product-card").forEach(el => {
  observer.observe(el);
});
