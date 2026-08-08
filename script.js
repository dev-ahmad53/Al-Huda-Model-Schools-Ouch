// Script file for Al-Huda Model Schools Ouch

document.addEventListener("DOMContentLoaded", () => {
  // Global State & Scroll Position Variables (Declared early to prevent TDZ ReferenceErrors)
  let selectedClassId = null;
  let classAnimFrameId = null;
  let homeAnimFrameId = null;
  let isPillsHovered = false;
  let isClassSliderHovered = false;
  let isClassSliderPaused = false;
  let isHomeSliderPaused = false;
  let isPillsPaused = false;
  let classScrollPos = 0;
  let pillsScrollPos = 0;
  let homeScrollPos = 0;

  // Initialize UI safely
  try { initTheme(); } catch(e) { console.error(e); }
  try { initMobileMenu(); } catch(e) { console.error(e); }
  try { highlightActiveNavLink(); } catch(e) { console.error(e); }
  try { renderOverallToppersGrid(); } catch(e) { console.error(e); }
  try { renderHomeToppersSlider(); } catch(e) { console.error(e); }
  try { renderClassTopperSlider(); } catch(e) { console.error(e); }
  try { renderClassFilterPills(); } catch(e) { console.error(e); }
  try { renderClassGrid(); } catch(e) { console.error(e); }
  try { renderGallery("all"); } catch(e) { console.error(e); }
  try { renderNotices(); } catch(e) { console.error(e); }
  try { renderNews(); } catch(e) { console.error(e); }
  try { renderTestimonials(); } catch(e) { console.error(e); }
  try { checkUrlParams(); } catch(e) { console.error(e); }
  try { setupEventListeners(); } catch(e) { console.error(e); }
  
  // Start Continuous 1-Flow Auto Scroll
  try { startContinuousClassScroll(); } catch(e) { console.error(e); }
  try { startContinuousPillsScroll(); } catch(e) { console.error(e); }
  try { startContinuousHomeScroll(); } catch(e) { console.error(e); }

  /* ==========================================================================
     1. Theme Switcher & Active Navigation
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem("ak_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  }

  function updateThemeIcon(theme) {
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.innerHTML = theme === "dark" 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    }
  }

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ak_theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function highlightActiveNavLink() {
    try {
      const pathStr = (window.location && window.location.pathname) ? window.location.pathname : "";
      const currentPath = pathStr.split("/").pop() || "index.html";
      document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPath) {
          link.classList.add("active");
        }
      });
    } catch(e) { console.error(e); }
  }

  window.toggleMobileMenu = function(e) {
    if (e) {
      if (e.stopPropagation) e.stopPropagation();
    }
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileNavDrawer");
    if (!mobileDrawer) return;

    const isActive = mobileDrawer.classList.toggle("active");

    if (mobileBtn) {
      mobileBtn.innerHTML = isActive 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    }
  };

  function initMobileMenu() {
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileNavDrawer");

    if (mobileBtn && mobileDrawer) {
      mobileBtn.onclick = function(e) {
        window.toggleMobileMenu(e);
      };

      document.addEventListener("click", (e) => {
        // Ignore clicks inside mobile button or drawer
        if (e.target.closest("#mobileMenuBtn") || e.target.closest("#mobileNavDrawer")) {
          return;
        }
        if (mobileDrawer.classList.contains("active")) {
          mobileDrawer.classList.remove("active");
          if (mobileBtn) mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
      });

      mobileDrawer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("active");
          if (mobileBtn) mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
      });
    }
  }

  /* ==========================================================================
     2. Class Selection Grid & Class-Specific Result View (results.html)
     ========================================================================== */
  function renderClassGrid() {
    const container = document.getElementById("classesGridContainer");
    if (!container || !SCHOOL_DATA.classesSelector) return;

    container.innerHTML = SCHOOL_DATA.classesSelector.map(item => `
      <div class="class-card-item" onclick="selectClassResult('${item.id}')">
        <div class="class-card-icon">
          <i class="fa-solid fa-user-graduate"></i>
        </div>
        <h3 class="class-card-title">${item.name}</h3>
        <p class="class-card-subtitle">${item.subtitle}</p>
        <div class="class-card-btn">
          View Class Results <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `).join("");
  }

  window.selectClassResult = function(classId) {
    selectedClassId = classId;
    const gridSection = document.getElementById("classSelectionGridSection");
    const resultViewSection = document.getElementById("classResultsViewSection");
    const classInfo = SCHOOL_DATA.classesSelector.find(c => c.id === classId);

    if (gridSection && resultViewSection) {
      gridSection.style.display = "none";
      resultViewSection.style.display = "block";

      const activeTitleEl = document.getElementById("activeClassTitle");
      if (activeTitleEl && classInfo) {
        activeTitleEl.innerHTML = `<i class="fa-solid ${classInfo.icon}"></i> ${classInfo.name} - Annual Exam Results`;
      }

      renderClassResultsTable(classId);

      // Scroll smoothly to results view
      resultViewSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  document.getElementById("backToClassGridBtn")?.addEventListener("click", () => {
    selectedClassId = null;
    const gridSection = document.getElementById("classSelectionGridSection");
    const resultViewSection = document.getElementById("classResultsViewSection");

    if (gridSection && resultViewSection) {
      resultViewSection.style.display = "none";
      gridSection.style.display = "block";
      document.getElementById("resultSearchInput").value = "";
    }
  });

  function renderClassResultsTable(classId) {
    const tbody = document.getElementById("resultsTableBody");
    const searchQuery = document.getElementById("resultSearchInput")?.value.trim().toLowerCase() || "";
    if (!tbody) return;

    let filtered = SCHOOL_DATA.studentResults;

    if (classId && classId !== "all") {
      filtered = filtered.filter(s => s.classId === classId);
    }

    if (searchQuery !== "") {
      filtered = filtered.filter(s => 
        s.rollNo.toLowerCase().includes(searchQuery) ||
        s.name.toLowerCase().includes(searchQuery) ||
        s.fatherName.toLowerCase().includes(searchQuery)
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; margin-bottom: 1rem; display: block; color: var(--accent-gold);"></i>
            No student results found for query "<strong>${searchQuery}</strong>". Please check Roll Number or Student Name.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(student => `
      <tr onclick="openReportCard('${student.rollNo}')">
        <td style="font-weight: 700; color: var(--accent-gold);">${student.rollNo}</td>
        <td class="student-name-cell">${student.name}</td>
        <td>${student.fatherName}</td>
        <td>${student.className} (${student.section})</td>
        <td style="font-weight: 700;">${student.obtainedMarks} / ${student.totalMarks}</td>
        <td style="color: var(--accent-gold); font-weight: 800;">${student.percentage}</td>
        <td><span style="font-weight: 800; color: var(--text-primary);">${student.grade}</span></td>
        <td><span class="badge-status status-pass">${student.status}</span></td>
        <td>
          <button class="view-card-btn" onclick="event.stopPropagation(); openReportCard('${student.rollNo}')">
            <i class="fa-solid fa-file-invoice"></i> Marksheet
          </button>
        </td>
      </tr>
    `).join("");
  }

  // Live Search listener
  document.getElementById("resultSearchInput")?.addEventListener("input", () => {
    if (selectedClassId) {
      renderClassResultsTable(selectedClassId);
    }
  });

  function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramClass = urlParams.get("class");
    if (paramClass) {
      selectClassResult(paramClass);
    }
  }

  /* ==========================================================================
     3. Static 3-Card Grid for Toppers Page (toppers.html)
     ========================================================================== */
  function renderOverallToppersGrid() {
    const container = document.getElementById("overallToppersContainer");
    if (!container || !SCHOOL_DATA.overallToppers) return;

    container.innerHTML = `
      <div class="overall-grid">
        ${SCHOOL_DATA.overallToppers.map(renderTopperCardHTML).join("")}
      </div>
    `;
  }

  /* ==========================================================================
     3B. Multi-Card Continuous 1-Flow Auto-Scrolling Showcase for Home Page
     ========================================================================== */
  function renderHomeToppersSlider() {
    const container = document.getElementById("homeToppersSlider");
    if (!container || !SCHOOL_DATA.homeToppers) return;

    // Render cards twice to create seamless loop
    container.innerHTML = SCHOOL_DATA.homeToppers.concat(SCHOOL_DATA.homeToppers).map(renderTopperCardHTML).join("");
  }

  function renderTopperCardHTML(topper) {
    return `
      <div class="glass-card topper-card home-topper-card rank-${topper.rank}">
        <div class="card-position-tag tag-rank-${topper.rank}">${topper.badge}</div>
        <div class="topper-img-wrapper compact-img-wrapper">
          <img src="${topper.photo}" alt="${topper.name}" class="topper-img">
        </div>
        <h3 class="topper-name compact-title">${topper.name}</h3>
        <p class="topper-class compact-subtitle">${topper.class}</p>
        <p class="topper-roll" style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.6rem;">Roll No: ${topper.rollNo} | ${topper.boardPosition}</p>

        <div class="topper-stats-box compact-stats">
          <div class="stat-pill">
            <label>Marks</label>
            <span>${topper.marks}</span>
          </div>
          <div class="stat-pill">
            <label>Percentage</label>
            <span style="color: var(--accent-gold);">${topper.percentage}</span>
          </div>
          <div class="stat-pill">
            <label>Grade</label>
            <span>${topper.grade}</span>
          </div>
        </div>

        <p class="topper-quote compact-quote">"${topper.quote}"</p>
      </div>
    `;
  }

  // Universal Mouse Drag-to-Scroll, Mouse Wheel Scroll, & Continuous Slow Auto-Animation Engine
  function setupUniversalMouseDragWheelAndAutoScroll(containerEl, speed = 0.5) {
    if (!containerEl) return;
    const wrapper = containerEl.closest(".landscape-wrapper, .class-filter-pills-wrapper, .carousel-wrapper") || containerEl;
    if (!wrapper) return;

    let isMouseDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let isUserInteracting = false;
    let userInteractTimeout = null;

    wrapper.style.cursor = "grab";

    const triggerUserInteraction = (duration = 1200) => {
      isUserInteracting = true;
      if (userInteractTimeout) clearTimeout(userInteractTimeout);
      userInteractTimeout = setTimeout(() => {
        isUserInteracting = false;
      }, duration);
    };

    // 1. Mouse Drag (Desktop Click & Drag)
    wrapper.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      triggerUserInteraction(30000); // Pause while holding mouse button
      startX = e.pageX - wrapper.offsetLeft;
      startScrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = "grabbing";
    });

    const stopMouseDrag = () => {
      if (isMouseDown) {
        isMouseDown = false;
        wrapper.style.cursor = "grab";
        triggerUserInteraction(1000); // Resume auto-scroll 1 sec after release
      }
    };

    wrapper.addEventListener("mouseleave", stopMouseDrag);
    wrapper.addEventListener("mouseup", stopMouseDrag);

    wrapper.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      triggerUserInteraction(30000);
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.8;
      wrapper.scrollLeft = startScrollLeft - walk;
    });

    // 2. Touch Swipe (Mobile Devices)
    wrapper.addEventListener("touchstart", () => {
      triggerUserInteraction(30000);
    }, { passive: true });

    wrapper.addEventListener("touchend", () => {
      triggerUserInteraction(1200);
    }, { passive: true });

    // 3. Mouse Wheel Scroll (Horizontal Wheel or Touchpad)
    wrapper.addEventListener("wheel", (e) => {
      triggerUserInteraction(1000);
      if (Math.abs(e.deltaY) > 0) {
        wrapper.scrollLeft += e.deltaY * 0.85;
      } else if (Math.abs(e.deltaX) > 0) {
        wrapper.scrollLeft += e.deltaX * 0.85;
      }
    }, { passive: true });

    // 4. Continuous Smooth Auto-Animation Loop
    let currentScrollPos = wrapper.scrollLeft;

    function autoScrollFrame() {
      if (!isUserInteracting && !isMouseDown) {
        currentScrollPos = wrapper.scrollLeft + speed; // Ultra smooth slow drift (0.55px / frame)
        const halfWidth = wrapper.scrollWidth / 3;
        
        if (wrapper.scrollWidth > wrapper.clientWidth && currentScrollPos >= halfWidth * 2) {
          currentScrollPos = halfWidth;
        } else if (wrapper.scrollWidth > wrapper.clientWidth && currentScrollPos >= wrapper.scrollWidth - wrapper.clientWidth - 2) {
          currentScrollPos = 0;
        }
        
        wrapper.scrollLeft = currentScrollPos;
      } else {
        currentScrollPos = wrapper.scrollLeft;
      }
      
      wrapper.autoScrollAnimFrame = requestAnimationFrame(autoScrollFrame);
    }

    if (wrapper.autoScrollAnimFrame) cancelAnimationFrame(wrapper.autoScrollAnimFrame);
    wrapper.autoScrollAnimFrame = requestAnimationFrame(autoScrollFrame);
  }

  function startContinuousHomeScroll() {
    const slider = document.getElementById("homeToppersSlider");
    if (!slider) return;
    setupUniversalMouseDragWheelAndAutoScroll(slider, 0.65);
  }

  document.getElementById("homeTopperPrevBtn")?.addEventListener("click", () => {
    const slider = document.getElementById("homeToppersSlider");
    if (slider) {
      slider.scrollBy({ left: -340, behavior: "smooth" });
      homeScrollPos = slider.scrollLeft - 340;
    }
  });

  document.getElementById("homeTopperNextBtn")?.addEventListener("click", () => {
    const slider = document.getElementById("homeToppersSlider");
    if (slider) {
      slider.scrollBy({ left: 340, behavior: "smooth" });
      homeScrollPos = slider.scrollLeft + 340;
    }
  });

  document.getElementById("homeTopperToggleBtn")?.addEventListener("click", (e) => {
    isHomeSliderPaused = !isHomeSliderPaused;
    e.currentTarget.innerHTML = isHomeSliderPaused 
      ? '<i class="fa-solid fa-play"></i>' 
      : '<i class="fa-solid fa-pause"></i>';
  });

  /* ==========================================================================
     4. Class-wise Landscape Continuous 1-Flow Auto-Scrolling Slider & Pills
     ========================================================================== */
  function getClassSliderContainer() {
    return document.getElementById("landscapeSlider") || document.getElementById("toppersClassSlider");
  }

  function getPillsContainer() {
    return document.getElementById("topperFilterPills") || document.getElementById("toppersClassPills");
  }

  function renderClassTopperSlider() {
    const container = getClassSliderContainer();
    if (!container || !SCHOOL_DATA.classToppers) return;

    // Render duplicated class cards to create a 100% seamless continuous infinite loop flow
    const infiniteData = SCHOOL_DATA.classToppers
      .concat(SCHOOL_DATA.classToppers)
      .concat(SCHOOL_DATA.classToppers);

    container.innerHTML = infiniteData.map((item, index) => `
      <div class="class-group-card" id="classCard-${item.classId}-${index}" data-class-card-id="${item.classId}">
        <div class="class-group-header">
          <div class="class-group-title">
            <i class="fa-solid fa-star"></i> ${item.className}
          </div>
          <span style="font-size: 0.8rem; padding: 0.2rem 0.6rem; background: rgba(217,119,6,0.1); color: var(--accent-gold); border-radius: 999px; font-weight: 700;">Top 3 Rankers</span>
        </div>

        <div class="class-top-three-row">
          ${item.toppers.map(student => `
            <div class="mini-topper-item">
              <span class="mini-rank r-${student.rank}">${student.rank}</span>
              <img src="${student.photo}" alt="${student.name}" class="mini-img">
              <div class="mini-name">${student.name}</div>
              <div class="mini-roll">Roll: ${student.rollNo}</div>
              <div class="mini-score">${student.percentage}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderClassFilterPills() {
    const container = getPillsContainer();
    if (!container || !SCHOOL_DATA.classToppers) return;

    // Render duplicated filter pills to create a 100% seamless continuous infinite loop flow
    const infinitePillsData = SCHOOL_DATA.classToppers
      .concat(SCHOOL_DATA.classToppers)
      .concat(SCHOOL_DATA.classToppers);

    container.innerHTML = infinitePillsData.map((item, index) => `
      <button class="filter-pill" data-class-id="${item.classId}" onclick="scrollToClassTopper('${item.classId}', event)">
        ${item.className}
      </button>
    `).join("");
  }

  window.scrollToClassTopper = function(classId, event) {
    const pillsContainer = getPillsContainer();
    const slider = getClassSliderContainer();

    if (pillsContainer) pillsContainer.classList.add("is-paused");
    if (slider) slider.classList.add("is-paused");

    // 1. Highlight clicked pill
    if (pillsContainer) {
      pillsContainer.querySelectorAll(".filter-pill").forEach(btn => btn.classList.remove("active"));
      let targetPill = (event && event.currentTarget) 
        ? event.currentTarget 
        : pillsContainer.querySelector(`[data-class-id='${classId}']`);

      if (targetPill) {
        targetPill.classList.add("active");
      }
    }

    // 2. Scroll landscape cards slider smoothly to the class card
    if (slider) {
      const targetCard = slider.querySelector(`[data-class-card-id='${classId}']`);
      if (targetCard) {
        try {
          targetCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        } catch(e) {
          const cardCenterPos = targetCard.offsetLeft - (slider.clientWidth / 2) + (targetCard.clientWidth / 2);
          slider.scrollTo({ left: Math.max(0, cardCenterPos), behavior: "smooth" });
        }
      }
    }

    // 3. Resume CSS continuous marquee after 6 seconds of user inactivity
    if (window.classPauseTimeout) clearTimeout(window.classPauseTimeout);
    window.classPauseTimeout = setTimeout(() => { 
      if (pillsContainer) pillsContainer.classList.remove("is-paused");
      if (slider) slider.classList.remove("is-paused");
    }, 6000);
  };

  function startContinuousPillsScroll() {
    const container = getPillsContainer();
    if (!container) return;
    setupUniversalMouseDragWheelAndAutoScroll(container, 0.45);
  }

  function startContinuousClassScroll() {
    const slider = getClassSliderContainer();
    if (!slider) return;
    setupUniversalMouseDragWheelAndAutoScroll(slider, 0.55);
  }

  // Controls for Class Landscape Slider
  document.getElementById("slidePrevBtn")?.addEventListener("click", () => {
    const slider = document.getElementById("landscapeSlider");
    if (slider) slider.scrollBy({ left: -380, behavior: "smooth" });
  });

  document.getElementById("slideNextBtn")?.addEventListener("click", () => {
    const slider = document.getElementById("landscapeSlider");
    if (slider) slider.scrollBy({ left: 380, behavior: "smooth" });
  });

  document.getElementById("toggleAutoScrollBtn")?.addEventListener("click", (e) => {
    isClassSliderPaused = !isClassSliderPaused;
    e.currentTarget.innerHTML = isClassSliderPaused 
      ? '<i class="fa-solid fa-play"></i>' 
      : '<i class="fa-solid fa-pause"></i>';
  });

  /* ==========================================================================
     5. Testimonials Render
     ========================================================================== */
  function renderTestimonials() {
    const container = document.getElementById("testimonialsContainer");
    if (!container || !SCHOOL_DATA.testimonials) return;

    container.innerHTML = SCHOOL_DATA.testimonials.map(t => `
      <div class="glass-card notice-card" style="border-top: 3px solid var(--accent-gold);">
        <div style="display: flex; gap: 0.3rem; color: #fbbf24; margin-bottom: 1rem; font-size: 0.9rem;">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); font-style: italic; margin-bottom: 1.5rem; line-height: 1.6;">
          "${t.comment}"
        </p>
        <div style="display: flex; align-items: center; gap: 1rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <img src="${t.photo}" alt="${t.name}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover;">
          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary);">${t.name}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${t.role}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ==========================================================================
     6. Printable Student Report Card Generator (Modal)
     ========================================================================== */
  window.openReportCard = function(rollNo) {
    const student = SCHOOL_DATA.studentResults.find(s => s.rollNo === rollNo);
    if (!student) return;

    const modal = document.getElementById("reportCardModal");
    const container = document.getElementById("reportCardContainer");
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="report-card-container">
        <div class="report-header">
          <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem;">
            <img src="images/logo.png" alt="Al-Huda Logo" style="width: 48px; height: 48px; object-fit: contain; flex-shrink: 0;">
            <div style="text-align: left;">
              <h1 class="report-school-title">Al-Huda Model Schools Ouch</h1>
              <div class="report-subtitle">Official Annual Examination Result Marksheet</div>
            </div>
          </div>
        </div>

        <div class="report-meta-grid">
          <div class="meta-row"><span class="meta-label">Roll Number:</span> <span class="meta-val" style="color: #d97706;">${student.rollNo}</span></div>
          <div class="meta-row"><span class="meta-label">Student Name:</span> <span class="meta-val">${student.name}</span></div>
          <div class="meta-row"><span class="meta-label">Father's Name:</span> <span class="meta-val">${student.fatherName}</span></div>
          <div class="meta-row"><span class="meta-label">Class & Section:</span> <span class="meta-val">${student.className} - Section ${student.section}</span></div>
          <div class="meta-row"><span class="meta-label">Position in Class:</span> <span class="meta-val" style="color: #2563eb;">${student.position}</span></div>
          <div class="meta-row"><span class="meta-label">Academic Status:</span> <span class="meta-val" style="color: #16a34a;">${student.status}</span></div>
        </div>

        <div class="table-responsive">
          <table class="report-table">
            <thead>
              <tr>
                <th style="width: 8%;">#</th>
                <th style="width: 42%;">Subject Title</th>
                <th style="width: 16%;">Total Marks</th>
                <th style="width: 17%;">Marks Obtained</th>
                <th style="width: 17%;">Percentage</th>
              </tr>
            </thead>
            <tbody>
              ${student.subjects.map((sub, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td style="font-weight: 600;">${sub.name}</td>
                  <td>${sub.total}</td>
                  <td style="font-weight: 700; color: #0f172a;">${sub.obtained}</td>
                  <td style="font-weight: 700; color: #d97706;">${((sub.obtained / sub.total) * 100).toFixed(1)}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="report-summary-box">
          <div class="summary-item">
            <label>Grand Total Marks</label>
            <span>${student.obtainedMarks} / ${student.totalMarks}</span>
          </div>
          <div class="summary-item">
            <label>Aggregate Percentage</label>
            <span style="color: #d97706;">${student.percentage}</span>
          </div>
          <div class="summary-item">
            <label>Final Grade</label>
            <span style="color: #2563eb;">${student.grade}</span>
          </div>
        </div>

        <div class="report-footer-signatures">
          <div class="sig-box">Class Incharge Signature</div>
          <div class="sig-box">Controller of Examinations</div>
          <div class="sig-box">Principal Signature & Stamp</div>
        </div>
      </div>
    `;

    modal.classList.add("active");
  };

  document.getElementById("closeReportCardBtn")?.addEventListener("click", () => {
    document.getElementById("reportCardModal")?.classList.remove("active");
  });
  document.getElementById("closeReportCardFooterBtn")?.addEventListener("click", () => {
    document.getElementById("reportCardModal")?.classList.remove("active");
  });

  /* ==========================================================================
     7. Gallery Filter & Lightbox
     ========================================================================== */
  function renderGallery(category = "all") {
    const container = document.getElementById("galleryContainer");
    if (!container || !SCHOOL_DATA.gallery) return;

    let items = SCHOOL_DATA.gallery;
    if (category !== "all") {
      items = items.filter(g => g.category === category);
    }

    container.innerHTML = items.map(item => `
      <div class="gallery-card" onclick="openLightbox(${item.id})">
        <img src="${item.image}" alt="${item.title}" class="gallery-img">
        <div class="gallery-overlay">
          <h3 class="gallery-title">${item.title}</h3>
          <p class="gallery-desc">${item.description}</p>
        </div>
      </div>
    `).join("");
  }

  document.querySelectorAll("#galleryFilters .filter-pill").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("#galleryFilters .filter-pill").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderGallery(e.target.dataset.category);
    });
  });

  window.openLightbox = function(id) {
    const item = SCHOOL_DATA.gallery.find(g => g.id === id);
    if (!item) return;

    const modal = document.getElementById("galleryLightbox");
    document.getElementById("lightboxImg").src = item.image;
    document.getElementById("lightboxTitle").innerText = item.title;
    document.getElementById("lightboxDesc").innerText = item.description;
    modal?.classList.add("active");
  };

  document.getElementById("closeLightboxBtn")?.addEventListener("click", () => {
    document.getElementById("galleryLightbox")?.classList.remove("active");
  });

  /* ==========================================================================
     8. Notice Board
     ========================================================================== */
  function renderNotices() {
    const container = document.getElementById("noticesContainer");
    if (!container || !SCHOOL_DATA.notices) return;

    container.innerHTML = SCHOOL_DATA.notices.map(n => `
      <div class="glass-card notice-card">
        <div class="notice-meta">
          <span class="notice-date"><i class="fa-regular fa-calendar-days"></i> ${n.date}</span>
          <span class="notice-category">${n.category}</span>
        </div>
        <h3 class="notice-title">${n.title}</h3>
        <p class="notice-desc">${n.desc}</p>
        <button class="btn btn-secondary" style="margin-top: auto; font-size: 0.85rem;" onclick="alert('Notice: ${n.title}\\n\\nDetails: ${n.desc}');">
          Read Announcement <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `).join("");
  }

  function renderNews() {
    const container = document.getElementById("homeNewsContainer");
    if (!container || !SCHOOL_DATA.news) return;

    container.innerHTML = SCHOOL_DATA.news.map(item => `
      <div class="glass-card" style="overflow: hidden; display: flex; flex-direction: column;">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
          <span style="position: absolute; top: 12px; left: 12px; padding: 0.3rem 0.8rem; background: var(--accent-gold); color: #fff; border-radius: 999px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">${item.tag}</span>
        </div>
        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
          <span style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem;"><i class="fa-regular fa-calendar"></i> ${item.date}</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.6rem; line-height: 1.35;">${item.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.2rem;">${item.summary}</p>
          <button class="btn btn-secondary" style="margin-top: auto; font-size: 0.82rem;" onclick="alert('NEWS UPDATE:\\n\\n${item.title}\\n\\n${item.summary}')">
            Read Full Story <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join("");
  }

  function setupEventListeners() {
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove("active");
        }
      });
    });

    // Live Admissions Application Form Listener
    const admissionForm = document.getElementById("admissionForm");
    if (admissionForm) {
      admissionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = admissionForm.querySelectorAll("input");
        const studentName = inputs[0]?.value || "Student";
        const fatherName = inputs[1]?.value || "Parent";
        const applyClass = admissionForm.querySelector("select")?.value || "Class 9th";
        const phone = admissionForm.querySelector("input[type='tel']")?.value || inputs[2]?.value || "N/A";
        const email = admissionForm.querySelector("input[type='email']")?.value || "N/A";

        const newAdmission = {
          id: Date.now(),
          date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          studentName,
          fatherName,
          applyClass,
          phone,
          email,
          previousSchool: "Al-Huda Campus",
          status: "Pending Review"
        };

        if (!SCHOOL_DATA.admissionsSubmissions) SCHOOL_DATA.admissionsSubmissions = [];
        SCHOOL_DATA.admissionsSubmissions.unshift(newAdmission);
        if (window.saveSchoolData) window.saveSchoolData();

        alert(`Thank you, ${studentName}! Your online admission application has been submitted successfully and forwarded to the Admin Dashboard!`);
        admissionForm.reset();
      });
    }

    // Live Contact Inquiry Form Listener
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll("input");
        const name = inputs[0]?.value || "Visitor";
        const email = contactForm.querySelector("input[type='email']")?.value || "N/A";
        const subject = inputs[2]?.value || "General Inquiry";
        const message = contactForm.querySelector("textarea")?.value || "";

        const newInquiry = {
          id: Date.now(),
          date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          name,
          email,
          subject,
          message
        };

        if (!SCHOOL_DATA.contactSubmissions) SCHOOL_DATA.contactSubmissions = [];
        SCHOOL_DATA.contactSubmissions.unshift(newInquiry);
        if (window.saveSchoolData) window.saveSchoolData();

        alert(`Thank you, ${name}! Your inquiry message has been sent directly to the Admin Dashboard!`);
        contactForm.reset();
      });
    }

    setupScrollAnimations();
  }

  /* ==========================================================================
     9. Scroll-Driven Reveal Animation System
     ========================================================================== */
  function setupScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Apply scroll reveal animation to sections and cards
    setTimeout(() => {
      const targets = document.querySelectorAll(".section, .class-card-item, .topper-card, .notice-card, .gallery-card, .feature-card, .stat-item");
      targets.forEach(el => {
        el.classList.add("reveal-on-scroll");
        observer.observe(el);
      });
    }, 100);
  }
});

// Mobile Footer Accordion Toggle Handler
window.toggleFooterDropdown = function(element) {
  if (window.innerWidth > 768) return;
  const accordion = element ? element.closest(".footer-accordion") : null;
  if (accordion) {
    accordion.classList.toggle("open");
  }
};
