// Complete Admin Dashboard Logic - Al Khuda Model School & College

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderOverviewStats();
  renderResultsTable();
  renderToppersAdmin();
  renderNoticesAdmin();
  renderNewsAdmin();
  renderGalleryAdmin();
  renderTestimonialsAdmin();
  renderAdmissionsAdmin();
  renderContactAdmin();
  renderSettingsForm();
  setupAddStudentModal();
  setupAddSubjectRows();
  setupAddBoardTopperModal();
  setupAddNoticeModal();
  setupAddNewsModal();
  setupAddGalleryModal();
  setupAddTestimonialModal();
});

// Tab Navigation
function initNavigation() {
  const menuItems = document.querySelectorAll(".menu-item");
  const tabContents = document.querySelectorAll(".dashboard-tab-content");
  const pageTitle = document.getElementById("pageTitle");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(m => m.classList.remove("active"));
      tabContents.forEach(t => t.classList.remove("active"));

      item.classList.add("active");
      const targetTab = item.getAttribute("data-tab");
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add("active");

      if (pageTitle) {
        pageTitle.innerText = item.querySelector("span").innerText;
      }
    });
  });
}

// 1. OVERVIEW & STATS
function renderOverviewStats() {
  const container = document.getElementById("overviewStatsGrid");
  if (!container || !SCHOOL_DATA.info || !SCHOOL_DATA.info.stats) return;

  const stats = SCHOOL_DATA.info.stats;
  container.innerHTML = `
    <div class="stat-card">
      <div class="stat-info">
        <h3>${stats.studentsCount}</h3>
        <p>Total Enrolled Students</p>
      </div>
      <div class="stat-icon icon-students"><i class="fa-solid fa-user-graduate"></i></div>
    </div>

    <div class="stat-card">
      <div class="stat-info">
        <h3>${stats.passPercentage}</h3>
        <p>Overall Pass Percentage</p>
      </div>
      <div class="stat-icon icon-pass"><i class="fa-solid fa-chart-line"></i></div>
    </div>

    <div class="stat-card">
      <div class="stat-info">
        <h3>${stats.boardPositions}</h3>
        <p>Board Position Holders</p>
      </div>
      <div class="stat-icon icon-toppers"><i class="fa-solid fa-award"></i></div>
    </div>

    <div class="stat-card">
      <div class="stat-info">
        <h3>${stats.expertFaculty}</h3>
        <p>Expert Faculty Staff</p>
      </div>
      <div class="stat-icon icon-faculty"><i class="fa-solid fa-chalkboard-user"></i></div>
    </div>
  `;
}

// 2. STUDENT RESULTS DATABASE & SUBJECT MARKSHEET BUILDER
function renderResultsTable(filterQuery = "") {
  const tbody = document.getElementById("adminResultsTableBody");
  if (!tbody || !SCHOOL_DATA.studentResults) return;

  let results = SCHOOL_DATA.studentResults;
  if (filterQuery) {
    const q = filterQuery.toLowerCase();
    results = results.filter(s => 
      s.rollNo.toLowerCase().includes(q) || 
      s.name.toLowerCase().includes(q) ||
      s.className.toLowerCase().includes(q)
    );
  }

  tbody.innerHTML = results.map(s => `
    <tr>
      <td><strong style="color: #d97706;">${s.rollNo}</strong></td>
      <td><strong>${s.name}</strong></td>
      <td>${s.fatherName}</td>
      <td>${s.className} (${s.section})</td>
      <td>${s.obtainedMarks} / ${s.totalMarks}</td>
      <td><strong style="color: #d97706;">${s.percentage}</strong></td>
      <td><span style="padding: 0.2rem 0.6rem; background: rgba(37,99,235,0.1); color: #2563eb; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${s.grade}</span></td>
      <td>
        <button class="btn-action btn-print" onclick="openReportCard('${s.rollNo}')" title="Print Marksheet"><i class="fa-solid fa-print"></i> Marksheet</button>
        <button class="btn-action btn-delete" onclick="deleteStudentResult('${s.rollNo}')" title="Delete Result"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.filterAdminResults = function() {
  const query = document.getElementById("adminSearchInput")?.value || "";
  renderResultsTable(query);
};

window.deleteStudentResult = function(rollNo) {
  if (confirm(`Are you sure you want to delete result for Roll No: ${rollNo}?`)) {
    SCHOOL_DATA.studentResults = SCHOOL_DATA.studentResults.filter(s => s.rollNo !== rollNo);
    window.saveSchoolData();
    renderResultsTable();
    alert("Result deleted successfully!");
  }
};

// Dynamic Subject Row Manager for Add Student Modal
function setupAddSubjectRows() {
  const container = document.getElementById("subjectsInputContainer");
  const addBtn = document.getElementById("addSubjectRowBtn");

  if (addBtn && container) {
    addBtn.addEventListener("click", () => {
      const row = document.createElement("div");
      row.className = "subject-row";
      row.style.cssText = "display: grid; grid-template-columns: 2fr 1fr 1fr 40px; gap: 0.8rem; margin-bottom: 0.6rem; align-items: center;";
      row.innerHTML = `
        <input type="text" class="form-control sub-name" placeholder="Subject Title (e.g. Physics)" required>
        <input type="number" class="form-control sub-total" placeholder="Total" value="100" required>
        <input type="number" class="form-control sub-obtained" placeholder="Obtained" required>
        <button type="button" class="btn-action btn-delete" style="height: 38px; width: 38px; display: flex; align-items: center; justify-content: center; margin: 0;" onclick="this.parentElement.remove()"><i class="fa-solid fa-trash"></i></button>
      `;
      container.appendChild(row);
    });
  }
}

function setupAddStudentModal() {
  const modal = document.getElementById("addStudentModal");
  const openBtn = document.getElementById("openAddStudentModalBtn");
  const closeBtn = document.getElementById("closeAddStudentModalBtn");
  const form = document.getElementById("addStudentForm");

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const rollNo = document.getElementById("newRollNo").value;
      const name = document.getElementById("newName").value;
      const fatherName = document.getElementById("newFatherName").value;
      const className = document.getElementById("newClass").value;
      const section = document.getElementById("newSection").value;
      const position = document.getElementById("newPosition").value || "Pass";

      // Collect Subjects
      const subjectRows = document.querySelectorAll("#subjectsInputContainer .subject-row");
      const subjects = [];
      let grandTotal = 0;
      let grandObtained = 0;

      subjectRows.forEach(row => {
        const subName = row.querySelector(".sub-name").value;
        const total = parseInt(row.querySelector(".sub-total").value) || 100;
        const obtained = parseInt(row.querySelector(".sub-obtained").value) || 0;

        subjects.push({ name: subName, total, obtained });
        grandTotal += total;
        grandObtained += obtained;
      });

      if (subjects.length === 0) {
        alert("Please add at least one subject with marks!");
        return;
      }

      const pctNum = ((grandObtained / grandTotal) * 100);
      const percentageVal = pctNum.toFixed(2) + "%";
      let grade = "A-1";
      if (pctNum < 80) grade = "A";
      if (pctNum < 70) grade = "B";
      if (pctNum < 60) grade = "C";
      if (pctNum < 50) grade = "D";

      const newStudent = {
        rollNo,
        name,
        fatherName,
        classId: className.toLowerCase().replace(/\s+/g, "-"),
        className,
        section,
        totalMarks: grandTotal,
        obtainedMarks: grandObtained,
        percentage: percentageVal,
        grade,
        status: position.includes("Position") ? `Pass (${position})` : "Pass",
        position,
        subjects
      };

      SCHOOL_DATA.studentResults.unshift(newStudent);
      window.saveSchoolData();
      renderResultsTable();
      modal.classList.remove("active");
      form.reset();
      alert("New Student Result with Subject Marksheet created successfully!");
    });
  }
}

// 3. BOARD TOPPERS & POSITION HOLDERS MANAGER
function renderToppersAdmin() {
  const homeContainer = document.getElementById("adminHomeToppersTableBody");
  const overallContainer = document.getElementById("adminOverallToppersTableBody");

  if (homeContainer && SCHOOL_DATA.homeToppers) {
    homeContainer.innerHTML = SCHOOL_DATA.homeToppers.map(t => `
      <tr>
        <td><strong>#${t.rank}</strong></td>
        <td><img src="${t.photo}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"></td>
        <td><strong>${t.name}</strong><br><small style="color: var(--text-muted);">${t.fatherName}</small></td>
        <td>${t.boardPosition || 'Board Position Holder'}</td>
        <td>${t.class}</td>
        <td><span style="color: #d97706; font-weight: 700;">${t.marks} (${t.percentage})</span></td>
        <td><span style="padding: 0.2rem 0.6rem; background: rgba(245,158,11,0.1); color: #d97706; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${t.badge}</span></td>
        <td>
          <button class="btn-action btn-delete" onclick="deleteHomeTopper(${t.rank})" title="Delete Topper"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `).join("");
  }

  if (overallContainer && SCHOOL_DATA.overallToppers) {
    overallContainer.innerHTML = SCHOOL_DATA.overallToppers.map(t => `
      <tr>
        <td><strong>Rank ${t.rank}</strong></td>
        <td><img src="${t.photo}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"></td>
        <td><strong>${t.name}</strong></td>
        <td>${t.boardPosition}</td>
        <td>${t.class}</td>
        <td><span style="color: #d97706; font-weight: 700;">${t.marks} (${t.percentage})</span></td>
        <td><span style="padding: 0.2rem 0.6rem; background: rgba(245,158,11,0.1); color: #d97706; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${t.badge}</span></td>
      </tr>
    `).join("");
  }
}

window.deleteHomeTopper = function(rank) {
  if (confirm(`Are you sure you want to remove topper rank #${rank}?`)) {
    SCHOOL_DATA.homeToppers = SCHOOL_DATA.homeToppers.filter(t => t.rank !== rank);
    window.saveSchoolData();
    renderToppersAdmin();
    alert("Topper removed successfully!");
  }
};

// Helper: Convert file to Base64 data URL
function readFileAsBase64(fileInput, defaultFallback = "") {
  return new Promise((resolve) => {
    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      resolve(defaultFallback);
      return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => resolve(defaultFallback);
    reader.readAsDataURL(file);
  });
}

function setupImagePreviews() {
  const topperFile = document.getElementById("topperPhotoFile");
  if (topperFile) {
    topperFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById("topperPhotoPreview").src = ev.target.result;
          document.getElementById("topperPhotoPreviewBox").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const galleryFile = document.getElementById("galleryImgFile");
  if (galleryFile) {
    galleryFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById("galleryImgPreview").src = ev.target.result;
          document.getElementById("galleryImgPreviewBox").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const testiFile = document.getElementById("testiPhotoFile");
  if (testiFile) {
    testiFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById("testiPhotoPreview").src = ev.target.result;
          document.getElementById("testiPhotoPreviewBox").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const newsFile = document.getElementById("newsImgFile");
  if (newsFile) {
    newsFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById("newsImgPreview").src = ev.target.result;
          document.getElementById("newsImgPreviewBox").style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function setupAddBoardTopperModal() {
  const modal = document.getElementById("addBoardTopperModal");
  const openBtn = document.getElementById("openAddBoardTopperBtn");
  const closeBtn = document.getElementById("closeAddBoardTopperBtn");
  const form = document.getElementById("addBoardTopperForm");

  setupImagePreviews();

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const boardPosition = document.getElementById("topperBoardName").value;
      const name = document.getElementById("topperName").value;
      const fatherName = document.getElementById("topperFatherName").value;
      const className = document.getElementById("topperClass").value;
      const rollNo = document.getElementById("topperRollNo").value;
      const marks = document.getElementById("topperMarks").value;
      const percentage = document.getElementById("topperPct").value;
      const badge = document.getElementById("topperBadge").value;
      const photoFile = document.getElementById("topperPhotoFile");
      const defaultPhoto = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300";
      const photo = await readFileAsBase64(photoFile, defaultPhoto);
      const quote = document.getElementById("topperQuote").value || "Success comes with hard work and guidance from Al Khuda faculty.";
      const targetLocation = document.getElementById("topperLocationSelect").value;

      const newTopper = {
        rank: SCHOOL_DATA.homeToppers.length + 1,
        boardPosition,
        name,
        fatherName,
        class: className,
        rollNo,
        marks,
        percentage,
        grade: "A-1",
        photo,
        badge,
        quote
      };

      if (targetLocation === "home" || targetLocation === "both") {
        SCHOOL_DATA.homeToppers.push(newTopper);
      }
      if (targetLocation === "toppers_page" || targetLocation === "both") {
        SCHOOL_DATA.overallToppers.unshift(newTopper);
        if (SCHOOL_DATA.overallToppers.length > 3) SCHOOL_DATA.overallToppers.pop();
      }

      window.saveSchoolData();
      renderToppersAdmin();
      modal.classList.remove("active");
      form.reset();
      document.getElementById("topperPhotoPreviewBox").style.display = "none";
      alert("New Board Topper added successfully!");
    });
  }
}

// 4. NOTICE BOARD MANAGER
function renderNoticesAdmin() {
  const container = document.getElementById("adminNoticesContainer");
  if (!container || !SCHOOL_DATA.notices) return;

  container.innerHTML = SCHOOL_DATA.notices.map(n => `
    <tr>
      <td>${n.date}</td>
      <td><span style="padding: 0.2rem 0.6rem; background: rgba(37,99,235,0.1); color: #2563eb; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${n.category}</span></td>
      <td><strong>${n.title}</strong></td>
      <td>${n.desc}</td>
      <td>
        <button class="btn-action btn-delete" onclick="deleteNotice(${n.id})" title="Delete Notice"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.deleteNotice = function(id) {
  if (confirm("Are you sure you want to delete this notice announcement?")) {
    SCHOOL_DATA.notices = SCHOOL_DATA.notices.filter(n => n.id !== id);
    window.saveSchoolData();
    renderNoticesAdmin();
    alert("Notice deleted successfully!");
  }
};

function setupAddNoticeModal() {
  const modal = document.getElementById("addNoticeModal");
  const openBtn = document.getElementById("openAddNoticeModalBtn");
  const closeBtn = document.getElementById("closeAddNoticeModalBtn");
  const form = document.getElementById("addNoticeForm");

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("noticeTitle").value;
      const category = document.getElementById("noticeCategory").value;
      const date = document.getElementById("noticeDate").value || "Today";
      const desc = document.getElementById("noticeDesc").value;

      const newNotice = {
        id: Date.now(),
        date,
        category,
        title,
        desc
      };

      SCHOOL_DATA.notices.unshift(newNotice);
      window.saveSchoolData();
      renderNoticesAdmin();
      modal.classList.remove("active");
      form.reset();
      alert("New Announcement published successfully!");
    });
  }
}

// 4.5. CAMPUS NEWS & PRESS MANAGER
function renderNewsAdmin() {
  const container = document.getElementById("adminNewsContainer");
  if (!container || !SCHOOL_DATA.news) return;

  container.innerHTML = SCHOOL_DATA.news.map(n => `
    <tr>
      <td><img src="${n.image}" style="width: 50px; height: 35px; border-radius: 6px; object-fit: cover;"></td>
      <td>${n.date}</td>
      <td><span style="padding: 0.2rem 0.6rem; background: rgba(217,119,6,0.1); color: #d97706; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${n.tag}</span></td>
      <td><strong>${n.title}</strong></td>
      <td>${n.summary}</td>
      <td>
        <button class="btn-action btn-delete" onclick="deleteNews(${n.id})" title="Delete Article"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.deleteNews = function(id) {
  if (confirm("Are you sure you want to delete this news article?")) {
    SCHOOL_DATA.news = SCHOOL_DATA.news.filter(n => n.id !== id);
    window.saveSchoolData();
    renderNewsAdmin();
    alert("News article deleted!");
  }
};

function setupAddNewsModal() {
  const modal = document.getElementById("addNewsModal");
  const openBtn = document.getElementById("openAddNewsModalBtn");
  const closeBtn = document.getElementById("closeAddNewsModalBtn");
  const form = document.getElementById("addNewsForm");

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.getElementById("newsTitle").value;
      const tag = document.getElementById("newsTag").value || "General";
      const date = document.getElementById("newsDate").value || "Today";
      const imgFile = document.getElementById("newsImgFile");
      const defaultImg = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600";
      const image = await readFileAsBase64(imgFile, defaultImg);
      const summary = document.getElementById("newsSummary").value;

      const newArticle = {
        id: Date.now(),
        date,
        tag,
        title,
        summary,
        image
      };

      if (!SCHOOL_DATA.news) SCHOOL_DATA.news = [];
      SCHOOL_DATA.news.unshift(newArticle);
      window.saveSchoolData();
      renderNewsAdmin();
      modal.classList.remove("active");
      form.reset();
      document.getElementById("newsImgPreviewBox").style.display = "none";
      alert("New Press Article published successfully!");
    });
  }
}

// 5. PHOTO GALLERY MANAGER
function renderGalleryAdmin() {
  const container = document.getElementById("adminGalleryContainer");
  if (!container || !SCHOOL_DATA.gallery) return;

  container.innerHTML = SCHOOL_DATA.gallery.map(g => `
    <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; box-shadow: var(--shadow); position: relative;">
      <img src="${g.image}" style="width: 100%; height: 140px; object-fit: cover;">
      <div style="padding: 1rem;">
        <span style="font-size: 0.72rem; padding: 0.2rem 0.5rem; background: rgba(245,158,11,0.1); color: #d97706; border-radius: 999px; font-weight: 700; text-transform: uppercase;">${g.category}</span>
        <h4 style="font-size: 0.95rem; font-weight: 700; margin: 0.4rem 0 0.3rem 0;">${g.title}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.8rem;">${g.description}</p>
        <button class="btn-action btn-delete" style="width: 100%;" onclick="deleteGalleryItem(${g.id})"><i class="fa-solid fa-trash"></i> Delete Photo</button>
      </div>
    </div>
  `).join("");
}

window.deleteGalleryItem = function(id) {
  if (confirm("Are you sure you want to delete this gallery photo?")) {
    SCHOOL_DATA.gallery = SCHOOL_DATA.gallery.filter(g => g.id !== id);
    window.saveSchoolData();
    renderGalleryAdmin();
    alert("Gallery photo deleted!");
  }
};

function setupAddGalleryModal() {
  const modal = document.getElementById("addGalleryModal");
  const openBtn = document.getElementById("openAddGalleryModalBtn");
  const closeBtn = document.getElementById("closeAddGalleryModalBtn");
  const form = document.getElementById("addGalleryForm");

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.getElementById("galleryTitle").value;
      const category = document.getElementById("galleryCategory").value;
      const imgFile = document.getElementById("galleryImgFile");
      const defaultImg = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800";
      const image = await readFileAsBase64(imgFile, defaultImg);
      const description = document.getElementById("galleryDesc").value;

      const newPhoto = {
        id: Date.now(),
        category,
        title,
        image,
        description
      };

      SCHOOL_DATA.gallery.unshift(newPhoto);
      window.saveSchoolData();
      renderGalleryAdmin();
      modal.classList.remove("active");
      form.reset();
      document.getElementById("galleryImgPreviewBox").style.display = "none";
      alert("New Photo added to Gallery!");
    });
  }
}

// 6. TESTIMONIALS MANAGER
function renderTestimonialsAdmin() {
  const container = document.getElementById("adminTestimonialsContainer");
  if (!container || !SCHOOL_DATA.testimonials) return;

  container.innerHTML = SCHOOL_DATA.testimonials.map(t => `
    <tr>
      <td><img src="${t.photo}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"></td>
      <td><strong>${t.name}</strong></td>
      <td>${t.role}</td>
      <td><em>"${t.comment}"</em></td>
      <td>⭐ ${t.rating}/5</td>
      <td>
        <button class="btn-action btn-delete" onclick="deleteTestimonial(${t.id})" title="Delete Feedback"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.deleteTestimonial = function(id) {
  if (confirm("Delete this testimonial?")) {
    SCHOOL_DATA.testimonials = SCHOOL_DATA.testimonials.filter(t => t.id !== id);
    window.saveSchoolData();
    renderTestimonialsAdmin();
    alert("Testimonial deleted!");
  }
};

function setupAddTestimonialModal() {
  const modal = document.getElementById("addTestimonialModal");
  const openBtn = document.getElementById("openAddTestimonialBtn");
  const closeBtn = document.getElementById("closeAddTestimonialBtn");
  const form = document.getElementById("addTestimonialForm");

  if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("testiName").value;
      const role = document.getElementById("testiRole").value;
      const comment = document.getElementById("testiComment").value;
      const photoFile = document.getElementById("testiPhotoFile");
      const defaultPhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
      const photo = await readFileAsBase64(photoFile, defaultPhoto);

      const newTesti = {
        id: Date.now(),
        name,
        role,
        comment,
        rating: 5,
        photo
      };

      SCHOOL_DATA.testimonials.unshift(newTesti);
      window.saveSchoolData();
      renderTestimonialsAdmin();
      modal.classList.remove("active");
      form.reset();
      document.getElementById("testiPhotoPreviewBox").style.display = "none";
      alert("New Testimonial added!");
    });
  }
}

// 7. ONLINE ADMISSION APPLICATIONS MANAGER
function renderAdmissionsAdmin() {
  const container = document.getElementById("adminAdmissionsContainer");
  if (!container || !SCHOOL_DATA.admissionsSubmissions) return;

  container.innerHTML = SCHOOL_DATA.admissionsSubmissions.map(a => `
    <tr>
      <td>${a.date}</td>
      <td><strong>${a.studentName}</strong></td>
      <td>${a.fatherName}</td>
      <td><span style="font-weight: 700; color: #d97706;">${a.applyClass}</span></td>
      <td>${a.phone}<br><small style="color: var(--text-muted);">${a.email}</small></td>
      <td><span style="padding: 0.25rem 0.7rem; background: ${a.status === 'Approved' ? 'rgba(22,163,74,0.1)' : 'rgba(245,158,11,0.1)'}; color: ${a.status === 'Approved' ? '#16a34a' : '#d97706'}; border-radius: 999px; font-weight: 700; font-size: 0.78rem;">${a.status}</span></td>
      <td>
        <button class="btn-action btn-edit" onclick="approveAdmission(${a.id})" title="Approve Application"><i class="fa-solid fa-check"></i> Approve</button>
        <button class="btn-action btn-delete" onclick="deleteAdmission(${a.id})" title="Delete Application"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.approveAdmission = function(id) {
  const item = SCHOOL_DATA.admissionsSubmissions.find(a => a.id === id);
  if (item) {
    item.status = "Approved";
    window.saveSchoolData();
    renderAdmissionsAdmin();
    alert(`Admission for ${item.studentName} approved!`);
  }
};

window.deleteAdmission = function(id) {
  if (confirm("Delete this admission application?")) {
    SCHOOL_DATA.admissionsSubmissions = SCHOOL_DATA.admissionsSubmissions.filter(a => a.id !== id);
    window.saveSchoolData();
    renderAdmissionsAdmin();
    alert("Application deleted!");
  }
};

// 8. CONTACT INQUIRY MESSAGES MANAGER
function renderContactAdmin() {
  const container = document.getElementById("adminContactContainer");
  if (!container || !SCHOOL_DATA.contactSubmissions) return;

  container.innerHTML = SCHOOL_DATA.contactSubmissions.map(c => `
    <tr>
      <td>${c.date}</td>
      <td><strong>${c.name}</strong><br><small style="color: var(--text-muted);">${c.email}</small></td>
      <td><span style="font-weight: 700; color: #2563eb;">${c.subject}</span></td>
      <td><em>"${c.message}"</em></td>
      <td>
        <button class="btn-action btn-delete" onclick="deleteContactMsg(${c.id})" title="Delete Message"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.deleteContactMsg = function(id) {
  if (confirm("Delete this contact message?")) {
    SCHOOL_DATA.contactSubmissions = SCHOOL_DATA.contactSubmissions.filter(c => c.id !== id);
    window.saveSchoolData();
    renderContactAdmin();
    alert("Message deleted!");
  }
};

// 7. SETTINGS MANAGER & STATS
function renderSettingsForm() {
  const info = SCHOOL_DATA.info;
  if (!info) return;

  const nameEl = document.getElementById("setSchoolName");
  const tagEl = document.getElementById("setSchoolTagline");
  const phoneEl = document.getElementById("setSchoolPhone");
  const emailEl = document.getElementById("setSchoolEmail");
  const studentsEl = document.getElementById("setStudentsCount");
  const passEl = document.getElementById("setPassPercentage");
  const positionsEl = document.getElementById("setBoardPositions");
  const facultyEl = document.getElementById("setExpertFaculty");

  if (nameEl) nameEl.value = info.name || "";
  if (tagEl) tagEl.value = info.tagline || "";
  if (phoneEl) phoneEl.value = info.contactPhone || "";
  if (emailEl) emailEl.value = info.contactEmail || "";

  if (info.stats) {
    if (studentsEl) studentsEl.value = info.stats.studentsCount || "2,500+";
    if (passEl) passEl.value = info.stats.passPercentage || "99.4%";
    if (positionsEl) positionsEl.value = info.stats.boardPositions || "45+";
    if (facultyEl) facultyEl.value = info.stats.expertFaculty || "120+";
  }

  const form = document.getElementById("schoolSettingsForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      SCHOOL_DATA.info.name = nameEl.value;
      SCHOOL_DATA.info.tagline = tagEl.value;
      SCHOOL_DATA.info.contactPhone = phoneEl.value;
      SCHOOL_DATA.info.contactEmail = emailEl.value;

      SCHOOL_DATA.info.stats = {
        studentsCount: studentsEl.value,
        passPercentage: passEl.value,
        boardPositions: positionsEl.value,
        expertFaculty: facultyEl.value
      };

      window.saveSchoolData();
      renderOverviewStats();
      alert("School settings & homepage statistics updated successfully!");
    });
  }
}
