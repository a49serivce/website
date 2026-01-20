// Data for developments (imported from application_data_json)
const developmentsData = {
  cables: {
    id: "cables",
    name: "High-Performance Cables",
    category: "Audio Cables",
    description:
      "Premium audio cables for audiophile-grade signal transmission.",
    features: [
      "TBD"
    ],
    specifications: {
      Conductor: "TBD",
      Shielding: "TBD",
      Impedance: "TBD",
      Capacitance: "TBD",
      Length: "TBD"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/db7e1ad503a2ac41eb663db448a720cc0deab747.jpg"
  },
  panels: {
    id: "panels",
    name: "Acoustic Panels",
    category: "Room Treatment",
    description:
      "Precision-engineered acoustic treatment solutions for optimal sound environments.",
    features: [
      "TBD"
    ],
    specifications: {
      NRC: "TBD",
      Thickness: "TBD",
      Dimensions: "TBD",
      Finish: "TBD",
      Mounting: "TBD"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/04f81b42d97f64f673409c062f700cf410fdf69c.jpg"
  },
  subwoofers: {
    id: "subwoofers",
    name: "Subwoofer Speaker",
    category: "Loudspeaker",
    description:
      "Reference-grade subwoofer for deep and accurate bass reproduction.",
    features: [
      "TBD"
    ],
    specifications: {
      "Frequency Response": "TBD",
      Power: "TBD",
      "Driver Size": "TBD",
      "Max SPL": "TBD",
      Dimensions: "TBD"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527760/pplx_project_search_images/052037da93f428e52485b521558912090b5d030d.jpg"
  }
};

// Helper function to populate modal
function populateModal(developmentKey) {
  const data = developmentsData[developmentKey];
  if (!data) return;

  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalImage").alt = data.name;
  document.getElementById("modalTitle").textContent = data.name;
  document.getElementById("modalCategory").textContent = data.category;
  document.getElementById("modalDescription").textContent = data.description;

  // Features list
  const featuresEl = document.getElementById("modalFeatures");
  featuresEl.innerHTML = "";
  data.features.forEach((feat) => {
    const li = document.createElement("li");
    li.textContent = feat;
    featuresEl.appendChild(li);
  });

  // Specifications list
  const specsEl = document.getElementById("modalSpecs");
  specsEl.innerHTML = "";
  Object.entries(data.specifications).forEach(([key, value]) => {
    const specRow = document.createElement("div");
    specRow.classList.add("spec-item");
    const labelSpan = document.createElement("span");
    labelSpan.classList.add("spec-label");
    labelSpan.textContent = key;
    const valueSpan = document.createElement("span");
    valueSpan.textContent = value;
    specRow.appendChild(labelSpan);
    specRow.appendChild(valueSpan);
    specsEl.appendChild(specRow);
  });
}

// Event listeners for development cards
const developmentCards = document.querySelectorAll(".development-card");
const modal = document.getElementById("developmentModal");
const modalClose = document.querySelector(".modal-close");

// developmentCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     const key = card.getAttribute("data-development");
//     populateModal(key);
//     modal.classList.add("active");
//     document.body.style.overflow = "hidden";
//   });
// });

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Scroll reveal animation for sections
const observerOptions = {
  threshold: 0.1
};

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(revealCallback, observerOptions);

document.querySelectorAll(".loading").forEach((el) => {
  fadeObserver.observe(el);
});

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  });
});
