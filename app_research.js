// Data for researchs (imported from application_data_json)
const researchsData = {
  cables: {
    id: "cables",
    name: "고성능 케이블",
    category: "오디오 케이블",
    description:
      "오디오파일 등급의 신호 전송을 위한 프리미엄 오디오 케이블",
    features: [
      "미정"
    ],
    specifications: {
      도체: "미정",
      차폐: "미정",
      임피던스: "미정",
      정전용량: "미정",
      길이: "미정"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/db7e1ad503a2ac41eb663db448a720cc0deab747.jpg"
  },
  panels: {
    id: "panels",
    name: "음향 패널",
    category: "룸 트리트먼트",
    description:
      "최적의 음향 환경을 위한 정밀 제작 음향 처리 솔루션",
    features: [
      "미정"
    ],
    specifications: {
      NRC: "미정",
      두께: "미정",
      규격: "미정",
      마감: "미정",
      설치: "미정"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527759/pplx_project_search_images/04f81b42d97f64f673409c062f700cf410fdf69c.jpg"
  },
  subwoofers: {
    id: "subwoofers",
    name: "서브우퍼 스피커",
    category: "라우드스피커",
    description:
      "깊고 정확한 저음 재생을 위한 레퍼런스 급 서브우퍼",
    features: [
      "미정"
    ],
    specifications: {
      주파수_응답: "미정",
      파워: "미정",
      드라이버_크기: "미정",
      SPL_max: "미정",
      크기: "미정"
    },
    image:
      "https://pplx-res.cloudinary.com/image/upload/v1751527760/pplx_project_search_images/052037da93f428e52485b521558912090b5d030d.jpg"
  }
};

// Helper function to populate modal
function populateModal(researchKey) {
  const data = researchsData[researchKey];
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

// Event listeners for research cards
const researchCards = document.querySelectorAll(".research-card");
const modal = document.getElementById("researchModal");
const modalClose = document.querySelector(".modal-close");

researchCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-research");
    populateModal(key);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

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
