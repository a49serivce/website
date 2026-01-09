// Technology data
const technologies = [
  {
    id: 1,
    name: "DS3 Dodecahedron Speaker",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "건축 음향 측정용 무지향성 음원",
    image: "room acoustics measurement/3-OMNI-5-4.jpg"
  },
  {
    id: 2,
    name: "M30 Measurement Microphone",
    category: "room-acoustics-measurement",
    type: "Earthworks Audio",
    description: "음향측정용 무지향성 마이크로폰",
    image: "room acoustics measurement/earthworks_measurement_M30.jpg"
  },
  {
    id: 3,
    name: "TalkBox",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "음성 명료도 측정용 음원",
    image: "room acoustics measurement/images.jpg"
  },
  {
    id: 4,
    name: "XL2 - MRPRO Acoustic Analyzer",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "휴대용 건축음향, 전기음향 측정 및 분석장비",
    image: "room acoustics measurement/kit-xl2.webp"
  },
  {
    id: 5,
    name: "Fireface UCX II",
    category: "room-acoustics-measurement",
    type: "RME",
    description: "녹음 및 측정용 고성능 오디오 인터페이스",
    image: "room acoustics measurement/RME.png"
  },
  {
    id: 6,
    name: "Turntable",
    category: "speaker-microphone-measurement",
    type: "A49",
    description: "스피커 음향 방사 특성 측정용 턴테이블 장치",
    image: "room acoustics measurement/turntable4.png "
  },
  {
    id: 7,
    name: "FINE Cone",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "라우드스피커 유닛 진동판 설계 및 분석 소프트웨어",
    image: "speaker design software/fine-cone-hero.jpg"
  },
  {
    id: 8,
    name: "FINE X-over",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "라우드스피커 크로스오버 설계 소프트웨어",
    image: "speaker design software/FINE-X-over-Full.webp"
  },
  {
    id: 9,
    name: "FINE Box",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "라우드스피커 인클로저 설계 소프트웨어",
    image: "speaker design software/finebox.jpg"
  },
  {
    id: 10,
    name: "FINE Motor",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "라우드스피커 유닛 구동부 설계 소프트웨어",
    image: "speaker design software/FINEMotorPRO-FEA.webp"
  },
  {
    id: 11,
    name: "APx555 B Series",
    category: "speaker-microphone-measurement",
    type: "Audio Precision",
    description: "국제 표준 전기음향 측정 및 분석 장비",
    image: "speaker microphone measurement/APx555-B-Series.png"
  },
  {
    id: 12,
    name: "GRAS 43AG Ear Simulator Kit",
    category: "speaker-microphone-measurement",
    type: "GRAS Sound & Vibration",
    description: "헤드폰 및 이어폰 측정용 국제 표쥰 이어 시뮬레이터",
    image: "speaker microphone measurement/audiology_ear_simulators_couplers.jpg"
  },
  {
    id: 13,
    name: "HATS Type 4128-C",
    category: "speaker-microphone-measurement",
    type: "Bruel & Kjaer",
    description: "음향 통신기기 측정용 국제 표준 머리 및 몸통 시뮬레이터(HATS)",
    image: "speaker microphone measurement/B&K 4128C.jpg"
  },
  {
    id: 14,
    name: "DSX-8000 Cable Analyzer",
    category: "speaker-microphone-measurement",
    type: "Fluke Networks",
    description: "국제 표준 이더넷 케이블 측정 및 분석 장비",
    image: "speaker microphone measurement/Fn-dsx-8000mi_01f_ko.jpg"
  },
  {
    id: 15,
    name: "Production Analyzer",
    category: "speaker-microphone-measurement",
    type: "Klippel",
    description: "국제 표준 라우드스피커 측정 및 분석 장비",
    image: "speaker microphone measurement/klippel production analyzer.png"
  },
  {
    id: 16,
    name: "LibreVNA",
    category: "speaker-microphone-measurement",
    type: "LibreVNA",
    description: "디지털 케이블 측정용 벡터 네트워크 분석기",
    image: "speaker microphone measurement/LibreVNA-2-0-100KHz-6GHz-USB-2-6-PCB.webp"
  },
  {
    id: 17,
    name: "AmpConnect ISC",
    category: "speaker-microphone-measurement",
    type: "Listen Inc",
    description: "국제 표쥰 음향기기 측정 및 분석 장비",
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
