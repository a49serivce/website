// Technology data
const technologies = [
  {
    id: 1,
    name: "Dodecahedron Speaker",
    category: "room-acoustics-measurement",
    type: "NTI Audio",
    description: "실내 및 건축 음향 측정을 위한 무지향성 음원 스피커입니다.",
    image: "room acoustics measurement/3-OMNI-5-4.jpg"
  },
  {
    id: 2,
    name: "Measurement Microphone",
    category: "room-acoustics-measurement", 
    type: "Earthworks",
    description: "정밀한 음향 분석을 위한 고정밀 측정용 마이크로폰입니다.",
    image: "room acoustics measurement/earthworks_measurement_M30.jpg"
  },
  {
    id: 3,
    name: "Talk Box",
    category: "room-acoustics-measurement",
    type: "NTI Audio", 
    description: "음성 명료도(STIPA) 측정을 위한 음향 신호 소스입니다.",
    image: "room acoustics measurement/images.jpg"
  },
  {
    id: 4,
    name: "XL2-MRPRO",
    category: "room-acoustics-measurement",
    type: "NTI Audio",
    description: "라이브 사운드, 음향 설비, 스튜디오 환경을 위한 전문가용 음향 및 오디오 분석기입니다.",
    image: "room acoustics measurement/kit-xl2.webp"
  },
  {
    id: 5,
    name: "Audio Interface", 
    category: "room-acoustics-measurement",
    type: "RME",
    description: "전문적인 녹음 및 측정을 위한 고성능 오디오 인터페이스입니다.",
    image: "room acoustics measurement/RME.png"
  },
  {
    id: 6,
    name: "Turntable",
    category: "room-acoustics-measurement",
    type: "A49", 
    description: "스피커의 360도 전방향 음향 특성을 자동으로 측정하기 위한 정밀 턴테이블입니다.",
    image: "room acoustics measurement/turntable2.jpg"
  },
  {
    id: 7,
    name: "Fine CONE",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "라우드스피커의 콘(Cone)과 서라운드(Surround)를 설계하고 분석하는 소프트웨어입니다.",
    image: "speaker design software/fine-cone-hero.jpg"
  },
  {
    id: 8,
    name: "Fine X-over",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "다중-웨이 라우드스피커 시스템을 위한 고급 크로스오버 설계 및 시뮬레이션 소프트웨어입니다.",
    image: "speaker design software/FINE-X-over-Full.webp"
  },
  {
    id: 9,
    name: "Fine Box",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "스피커 인클로저(통)와 포트의 동작을 시뮬레이션하는 라우드스피커 인클로저 설계 소프트웨어입니다.",
    image: "speaker design software/finebox.jpg"
  },
  {
    id: 10,
    name: "Fine Motor",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "유한요소해석(FEA)을 사용하여 라우드스피커 모터 시스템을 설계하고 분석하는 소프트웨어입니다.",
    image: "speaker design software/FINEMotorPRO-FEA.webp"
  },
  {
    id: 11,
    name: "APX555B",
    category: "speaker-microphone-measurement", 
    type: "Audio Precision",
    description: "연구개발(R&D) 및 생산 테스트를 위한 고성능 오디오 분석기입니다.",
    image: "speaker microphone measurement/APx555-B-Series.png"
  },
  {
    id: 12,
    name: "Ear Simulator",
    category: "speaker-microphone-measurement",
    type: "GRAS", 
    description: "헤드폰 및 이어폰 측정을 위해 인간의 귀 음향 특성을 시뮬레이션하는 장치입니다.",
    image: "speaker microphone measurement/audiology_ear_simulators_couplers.jpg"
  },
  {
    id: 13,
    name: "Head and Torso Simulator",
    category: "speaker-microphone-measurement",
    type: "B&K",
    description: "헤드셋, 오디오 회의 장비, 마이크, 헤드폰, 보청기 등 실제 사용 환경과 유사한 상태에서 전기음향 테스트를 수행하도록 설계된 HATS(머리 및 몸통 시뮬레이터)입니다.",
    image: "speaker microphone measurement/B&K 4128C.jpg"
  },
  {
    id: 14,
    name: "Versiv",
    category: "speaker-microphone-measurement",
    type: "Fluke Networks", 
    description: "네트워크 인프라의 케이블 인증 및 테스트를 위한 플랫폼입니다.",
    image: "speaker microphone measurement/Fn-dsx-8000mi_01f_ko.jpg"
  },
  {
    id: 15,
    name: "Audio Measurement System",
    category: "speaker-microphone-measurement",
    type: "Klippel",
    description: "라우드스피커의 측정, 분석 및 품질 관리를 위한 포괄적인 시스템입니다.",
    image: "speaker microphone measurement/klippel production analyzer.png"
  },
  {
    id: 16,
    name: "Vector Network Analyser",
    category: "speaker-microphone-measurement",
    type: "Libre VNA",
    description: "RF 및 안테나 측정을 위한 USB 기반 벡터 네트워크 분석기입니다.",
    image: "speaker microphone measurement/LibreVNA-2-0-100KHz-6GHz-USB-2-6-PCB.webp"
  },
  {
    id: 17,
    name: "Audio Measurement System",
    category: "speaker-microphone-measurement",
    type: "Listen Inc",
    description: "마이크, 스피커, 헤드폰의 전기음향 테스트를 위한 통합 하드웨어 및 소프트웨어입니다.",
    image: "speaker microphone measurement/listen ampconnect.jpg"
  }
];

// Global variables
let currentFilter = 'all';
let technologyGrid = null;
let categoryButtons = null;

// Create technology card HTML
function createTechnologyCard(tech) {
  return `
    <div class="tech-card" data-category="${tech.category}" data-id="${tech.id}">
      <img src="${tech.image}" alt="${tech.name}" class="tech-card__image" loading="lazy" onerror="this.style.display='none'">
      <div class="tech-card__content">
        <div class="tech-card__header">
          <h3 class="tech-card__name">${tech.name}</h3>
          <span class="tech-card__type">${tech.type}</span>
        </div>
        <p class="tech-card__description">${tech.description}</p>
      </div>
    </div>
  `;
}

// Render technology cards with animation
function renderTechnology(filter = 'all') {
  if (!technologyGrid) return;
  
  let filteredTech = technologies;
  
  if (filter !== 'all') {
    filteredTech = technologies.filter(tech => tech.category === filter);
  }
  
  // Clear existing content
  technologyGrid.innerHTML = '';
  
  // Add filtered cards
  filteredTech.forEach((tech, index) => {
    const cardHTML = createTechnologyCard(tech);
    technologyGrid.insertAdjacentHTML('beforeend', cardHTML);
  });
  
  // Add staggered animation
  const cards = technologyGrid.querySelectorAll('.tech-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

// Handle category filtering
function handleCategoryFilter(category) {
  if (currentFilter === category) return;
  
  currentFilter = category;
  
  // Update active button
  if (categoryButtons) {
    categoryButtons.forEach(btn => {
      btn.classList.remove('category-btn--active');
      if (btn.dataset.category === category) {
        btn.classList.add('category-btn--active');
      }
    });
  }
  
  // Render filtered technology with animation
  renderTechnology(category);
}

// Initialize category buttons
function initializeCategoryButtons() {
  categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const category = button.dataset.category;
      handleCategoryFilter(category);
    });
  });
}

// Initialize the grid
function initializeGrid() {
  technologyGrid = document.getElementById('technology-grid');
  if (!technologyGrid) {
    console.error('Technology grid element not found');
    return;
  }
  
  // Initial render
  renderTechnology('all');
}

// Handle image loading errors
function handleImageError(event) {
  const img = event.target;
  img.style.display = 'none';
  
  // Add a placeholder or alternative styling
  const card = img.closest('.tech-card');
  if (card) {
    card.classList.add('tech-card--no-image');
  }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Mobile navigation toggle
function initializeMobileNav() {
  const createMobileToggle = () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (window.innerWidth <= 768) {
      if (!header.querySelector('.nav-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle navigation');
        toggle.style.cssText = `
          background: none;
          border: none;
          color: #d4af37;
          font-size: 24px;
          cursor: pointer;
          display: block;
          padding: 8px;
          transition: transform 0.3s ease;
        `;
        
        toggle.addEventListener('click', () => {
          nav.classList.toggle('nav--open');
          toggle.style.transform = nav.classList.contains('nav--open') ? 'rotate(90deg)' : 'rotate(0deg)';
        });
        
        header.querySelector('.header__content').appendChild(toggle);
        
        // Add mobile nav styles
        if (nav && !nav.classList.contains('nav--mobile-ready')) {
          nav.classList.add('nav--mobile-ready');
          nav.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #000;
            flex-direction: column;
            padding: 20px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border-top: 1px solid #333;
          `;
          
          const style = document.createElement('style');
          style.textContent = `
            .nav--open {
              transform: translateY(0) !important;
              opacity: 1 !important;
              visibility: visible !important;
            }
          `;
          document.head.appendChild(style);
        }
      }
    } else {
      // Remove mobile toggle on larger screens
      const toggle = header.querySelector('.nav-toggle');
      if (toggle) {
        toggle.remove();
      }
      
      // Reset nav styles
      if (nav) {
        nav.style.cssText = '';
        nav.classList.remove('nav--open', 'nav--mobile-ready');
      }
    }
  };
  
  // Create toggle on load and resize
  createMobileToggle();
  window.addEventListener('resize', createMobileToggle);
}

// Initialize intersection observer for animations
function initializeIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('tech-card--visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  // Observe existing cards
  const observeCards = () => {
    const cards = document.querySelectorAll('.tech-card:not(.tech-card--visible)');
    cards.forEach(card => observer.observe(card));
  };
  
  // Initial observation
  setTimeout(observeCards, 100);
  
  // Re-observe after filtering
  document.addEventListener('filter-complete', observeCards);
}

// Main initialization function
function initialize() {
  // Initialize components
  initializeGrid();
  initializeCategoryButtons();
  initializeSmoothScrolling();
  initializeMobileNav();
  initializeIntersectionObserver();
  
  // Add global error handling for images
  document.addEventListener('error', handleImageError, true);
  
  console.log('A49 Technology page initialized successfully');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
