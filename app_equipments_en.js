// Technology data
const technologies = [
  {
    id: 1,
    name: "DS3 Dodecahedron Speaker",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "Omnidirectional sound source for building acoustics measurement",
    image: "equipments/room-acoustics-measurement/3-OMNI-5-4.jpg"
  },
  {
    id: 2,
    name: "M30 Measurement Microphone",
    category: "room-acoustics-measurement",
    type: "Earthworks Audio",
    description: "Omnidirectional microphone for acoustic measurement",
    image: "equipments/room-acoustics-measurement/earthworks_measurement_M30.jpg"
  },
  {
    id: 3,
    name: "TalkBox",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "Sound source for speech intelligibility measurement",
    image: "equipments/room-acoustics-measurement/images.jpg"
  },
  {
    id: 4,
    name: "XL2 - MRPRO Acoustic Analyzer",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "Portable building acoustics, electro-acoustics measurement and analysis equipment",
    image: "equipments/room-acoustics-measurement/kit-xl2.webp"
  },
  {
    id: 5,
    name: "Fireface UCX II",
    category: "room-acoustics-measurement",
    type: "RME",
    description: "High-performance audio interface for recording and measurement",
    image: "equipments/room-acoustics-measurement/RME.png"
  },
  {
    id: 6,
    name: "Turntable",
    category: "speaker-microphone-measurement",
    type: "A49",
    description: "Turntable device for measuring speaker acoustic radiation characteristics",
    image: "equipments/speaker-microphone-measurement/turntable4.png"
  },
  {
    id: 7,
    name: "FINE Cone",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "Loudspeaker unit diaphragm design and analysis software",
    image: "equipments/speaker-design-software/fine-cone-hero.jpg"
  },
  {
    id: 8,
    name: "FINE X-over",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "Loudspeaker crossover design software",
    image: "equipments/speaker-design-software/FINE-X-over-Full.webp"
  },
  {
    id: 9,
    name: "FINE Box",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "Loudspeaker enclosure design software",
    image: "equipments/speaker-design-software/finebox.jpg"
  },
  {
    id: 10,
    name: "FINE Motor",
    category: "speaker-design-software",
    type: "Loudsoft",
    description: "Loudspeaker unit motor design software",
    image: "equipments/speaker-design-software/FINEMotorPRO-FEA.webp"
  },
  {
    id: 11,
    name: "APx555 B Series",
    category: "speaker-microphone-measurement",
    type: "Audio Precision",
    description: "International standard electro-acoustic measurement and analysis equipment",
    image: "equipments/speaker-microphone-measurement/APx555-B-Series.png"
  },
  {
    id: 12,
    name: "GRAS 43AG Ear Simulator Kit",
    category: "speaker-microphone-measurement",
    type: "GRAS Sound & Vibration",
    description: "International standard ear simulator for headphone and earphone measurement",
    image: "equipments/speaker-microphone-measurement/audiology_ear_simulators_couplers.jpg"
  },
  {
    id: 13,
    name: "HATS Type 4128-C",
    category: "speaker-microphone-measurement",
    type: "Bruel & Kjaer",
    description: "International standard Head and Torso Simulator (HATS) for acoustic communication device measurement",
    image: "equipments/speaker-microphone-measurement/B&K 4128C.jpg"
  },
  {
    id: 14,
    name: "DSX-8000 Cable Analyzer",
    category: "speaker-microphone-measurement",
    type: "Fluke Networks",
    description: "International standard Ethernet cable measurement and analysis equipment",
    image: "equipments/speaker-microphone-measurement/Fn-dsx-8000mi_01f_ko.jpg"
  },
  {
    id: 15,
    name: "Production Analyzer",
    category: "speaker-microphone-measurement",
    type: "Klippel",
    description: "International standard loudspeaker measurement and analysis equipment",
    image: "equipments/speaker-microphone-measurement/klippel production analyzer.png"
  },
  {
    id: 16,
    name: "LibreVNA",
    category: "speaker-microphone-measurement",
    type: "LibreVNA",
    description: "Vector network analyzer for digital cable measurement",
    image: "equipments/speaker-microphone-measurement/LibreVNA-2-0-100KHz-6GHz-USB-2-6-PCB.webp"
  },
  {
    id: 17,
    name: "AmpConnect ISC",
    category: "speaker-microphone-measurement",
    type: "Listen Inc",
    description: "International standard acoustic equipment measurement and analysis equipment",
    image: "equipments/speaker-microphone-measurement/listen ampconnect.jpg"
  },
  {
    id: 18,
    name: "Active Loadbox",
    category: "speaker-microphone-measurement",
    type: "Audio Graph",
    description: "Equipment for precision measurement of power amplifiers",
    image: "https://www.audiograph.se/wp-content/uploads/2013/10/slide1_Layer_1_PowerCube_front_0001_active_loadbox.png"
  },
  {
    id: 19,
    name: "Anechoic Chamber",
    category: "speaker-microphone-measurement",
    type: "Sontek",
    description: "Acoustic and call quality measurement for earphones/headphones/microphones",
    image: "equipments/speaker-microphone-measurement/Sontek_anechoicbox.jpg"
  },
  {
    id: 20,
    name: "SoundConnect mic power supply",
    category: "speaker-microphone-measurement",
    type: "Listen Inc",
    description: "Power supply and control unit for measurement microphones",
    image: "https://www.listeninc.com/wp/media/SoundConnect_front_left.jpg"
  },
  {
    id: 21,
    name: "PA3",
    category: "room-acoustics-measurement",
    type: "NTi Audio",
    description: "Dedicated power amplifier for omnidirectional speakers",
    image: "https://www.nti-audio.com/portals/0/02-products/PA3/PA3-600x300.jpg"
  },
  {
    id: 22,
    name: "CAL200",
    category: "speaker-microphone-measurement",
    type: "Larson Davis",
    description: "Pistonphone for calibrating measurement microphones",
    image: "https://www.larsondavis.com/images/librariesprovider2/product/cal200/ld-cal200-precision-sound-level-calibrator.jpg?Status=Master&sfvrsn=4c0a8df0_5"
  },
  {
    id: 23,
    name: "B20",
    category: "miscellaneous-test-equipment",
    type: "HIKMICRO",
    description: "Thermal imaging camera for analyzing thermal characteristics of electronic circuits and equipment",
    image: "equipments/miscellaneous-test-equipment/B20.png"
  },
  {
    id: 24,
    name: "Anechoic Room",
    category: "speaker-microphone-measurement",
    type: "Sontek",
    description: "Fully anechoic room for acoustic measurement",
    image: "equipments/speaker-microphone-measurement/anechoic-chamber.jpg"
  },
  {
    id: 25,
    name: "Audio Power Amplifier Type 2716-C",
    category: "speaker-microphone-measurement",
    type: "Bruel & Kjaer",
    description: "Power amplifier for precision acoustic measurement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKafkOSQ8uOj0G7Mrygep_Dp-4qxwmveOs4g&s"
  },
  {
    id: 26,
    name: "FLEXUS FX100",
    category: "speaker-microphone-measurement",
    type: "NTi Audio",
    description: "International standard multi-function audio and acoustic analysis equipment",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7fzoxD9g-efwhXCCW7U1SL_MlUSFtGxCaQ&s"
  },
  {
    id: 27,
    name: "Turntable TT01",
    category: "speaker-microphone-measurement",
    type: "NTi Audio",
    description: "Turntable for measuring microphone directivity",
    image: "https://www.nti-audio.com/Portals/0/easygalleryimages/1/98/turntable%20tt01%20detail.jpg"
  },
  {
    id: 28,
    name: "SG-2423B",
    category: "speaker-microphone-measurement",
    type: "Sigma eltec",
    description: "Frequency generator for speaker buzz and rattle analysis",
    image: "equipments/speaker-microphone-measurement/SigmaEltech SG-2423B.jpg"
  },
  {
    id: 29,
    name: "VOLTAGE DETECTOR 3480",
    category: "miscellaneous-test-equipment",
    type: "Hioki",
    description: "Non-contact voltage detector for checking voltage presence in electrical circuits",
    image: "equipments/miscellaneous-test-equipment/hioki_3480.jpeg"
  },
  {
    id: 30,
    name: "TDS 2024B",
    category: "miscellaneous-test-equipment",
    type: "Tektronix",
    description: "Digital oscilloscope for analyzing electrical signal waveforms",
    image: "equipments/miscellaneous-test-equipment/Tektronix_TDS2024B.jpeg"
  },
  {
    id: 31,
    name: "TS250",
    category: "miscellaneous-test-equipment",
    type: "Accel Instrument",
    description: "Dedicated amplifier for ultrasound",
    image: "equipments/miscellaneous-test-equipment/ts250.jpg"
  },
  {
    id: 32,
    name: "Active Probe AP020",
    category: "miscellaneous-test-equipment",
    type: "Lecroy",
    description: "Voltage drop device for power measurement",
    image: "equipments/miscellaneous-test-equipment/AP020 2.png"
  },
  {
    id: 33,
    name: "liteVNA",
    category: "miscellaneous-test-equipment",
    type: "VNA",
    description: "Vector network analyzer for RF circuit and antenna characteristic analysis",
    image: "equipments/miscellaneous-test-equipment/litevna.jpeg"
  },
  {
    id: 34,
    name: "tinySA",
    category: "miscellaneous-test-equipment",
    type: "SA",
    description: "Small portable spectrum analyzer",
    image: "equipments/miscellaneous-test-equipment/tinysa.jpeg"
  },
  {
    id: 35,
    name: "Dolby Atmos Demo Room",
    category: "room-acoustics-measurement",
    type: "A49",
    description: "Dolby Atmos demonstration for immersive audio content production and evaluation",
    image: "equipments/miscellaneous-test-equipment/dolby-room.jpg"
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
