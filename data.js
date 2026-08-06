const AK_STORAGE_KEY = "AK_SCHOOL_DATA_V2000";

const DEFAULT_SCHOOL_DATA = {
  info: {
    name: "Al Khuda Model School & College",
    tagline: "Empowering Minds, Shaping Leaders, Excellence in Education",
    established: "1998",
    location: "Main Campus, Education City Road",
    contactPhone: "+92 300 1234567",
    contactEmail: "info@alkhudaschool.edu.pk",
    stats: {
      studentsCount: "2,500+",
      passPercentage: "99.4%",
      boardPositions: "45+",
      expertFaculty: "120+"
    }
  },

  // Class Selector Cards Dataset with User-Selected fa-user-graduate Icon
  classesSelector: [
    { id: "nursery", name: "Nursery", icon: "fa-user-graduate", subtitle: "Pre-Primary Foundation", totalStudents: 45 },
    { id: "kg", name: "Prep / KG", icon: "fa-user-graduate", subtitle: "Kindergarten Activity", totalStudents: 52 },
    { id: "class-1", name: "Class 1", icon: "fa-user-graduate", subtitle: "Primary Elementary", totalStudents: 58 },
    { id: "class-2", name: "Class 2", icon: "fa-user-graduate", subtitle: "Primary Elementary", totalStudents: 60 },
    { id: "class-3", name: "Class 3", icon: "fa-user-graduate", subtitle: "Primary Wing", totalStudents: 55 },
    { id: "class-4", name: "Class 4", icon: "fa-user-graduate", subtitle: "Primary Wing", totalStudents: 54 },
    { id: "class-5", name: "Class 5", icon: "fa-user-graduate", subtitle: "Primary Board Exam", totalStudents: 62 },
    { id: "class-6", name: "Class 6", icon: "fa-user-graduate", subtitle: "Middle School Wing", totalStudents: 64 },
    { id: "class-7", name: "Class 7", icon: "fa-user-graduate", subtitle: "Middle School Wing", totalStudents: 60 },
    { id: "class-8", name: "Class 8", icon: "fa-user-graduate", subtitle: "Middle Board Exam", totalStudents: 68 },
    { id: "class-9", name: "Class 9th", icon: "fa-user-graduate", subtitle: "Matriculation Part-I", totalStudents: 75 },
    { id: "class-10", name: "Class 10th", icon: "fa-user-graduate", subtitle: "Matriculation Board Star", totalStudents: 80 },
    { id: "1st-year", name: "1st Year (11th)", icon: "fa-user-graduate", subtitle: "F.Sc Pre-Med / Pre-Eng / ICS", totalStudents: 90 },
    { id: "2nd-year", name: "2nd Year (12th)", icon: "fa-user-graduate", subtitle: "Intermediate Board Star", totalStudents: 95 }
  ],

  // Top 3 Overall School Level Stars (For toppers.html)
  overallToppers: [
    {
      rank: 1,
      boardPosition: "1st Position - FBISE Board",
      name: "Muhammad Hamza Khan",
      fatherName: "Tariq Mahmood Khan",
      class: "2nd Year (F.Sc Pre-Medical)",
      rollNo: "2201",
      marks: "1062 / 1100",
      percentage: "96.54%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
      badge: "🥇 Gold Medalist",
      quote: "Success comes with hard work and guidance from Al Khuda faculty."
    },
    {
      rank: 2,
      boardPosition: "2nd Position - FBISE Board",
      name: "Ayesha Fatima",
      fatherName: "Shahid Iqbal",
      class: "2nd Year (F.Sc Pre-Engineering)",
      rollNo: "2202",
      marks: "1054 / 1100",
      percentage: "95.81%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      badge: "🥈 Silver Medalist",
      quote: "Consistent study and clear concepts made this rank possible."
    },
    {
      rank: 3,
      boardPosition: "1st Position - Matric Board",
      name: "Zainab Bibi",
      fatherName: "Ghulam Mustafa",
      class: "Class 10th (Science Group)",
      rollNo: "1001",
      marks: "1045 / 1100",
      percentage: "95.00%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
      badge: "🥉 Bronze Medalist",
      quote: "Al Khuda Model School brought out the best academic results in me."
    }
  ],

  // 7 Position Holders for Home Page Auto-Scrolling Slider (index.html)
  homeToppers: [
    {
      rank: 1,
      boardPosition: "1st Position - FBISE Board",
      name: "Muhammad Hamza Khan",
      fatherName: "Tariq Mahmood Khan",
      class: "2nd Year (F.Sc Pre-Medical)",
      rollNo: "2201",
      marks: "1062 / 1100",
      percentage: "96.54%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
      badge: "🥇 Gold Medalist",
      quote: "Success comes with hard work and guidance from Al Khuda faculty."
    },
    {
      rank: 2,
      boardPosition: "2nd Position - FBISE Board",
      name: "Ayesha Fatima",
      fatherName: "Shahid Iqbal",
      class: "2nd Year (F.Sc Pre-Engineering)",
      rollNo: "2202",
      marks: "1054 / 1100",
      percentage: "95.81%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      badge: "🥈 Silver Medalist",
      quote: "Consistent study and clear concepts made this rank possible."
    },
    {
      rank: 3,
      boardPosition: "1st Position - Matric Board",
      name: "Zainab Bibi",
      fatherName: "Ghulam Mustafa",
      class: "Class 10th (Science Group)",
      rollNo: "1001",
      marks: "1045 / 1100",
      percentage: "95.00%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
      badge: "🥉 Bronze Medalist",
      quote: "Al Khuda Model School brought out the best academic results in me."
    },
    {
      rank: 4,
      boardPosition: "1st Position - ICS Board",
      name: "Waqas Mansoor",
      fatherName: "Mansoor Ahmed",
      class: "2nd Year (ICS Computer Science)",
      rollNo: "2206",
      marks: "1044 / 1100",
      percentage: "94.90%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      badge: "🏆 1st Position ICS Board",
      quote: "The CS labs and coding guidance gave me a competitive edge."
    },
    {
      rank: 5,
      boardPosition: "2nd Position - Matric Board",
      name: "Usama Javed",
      fatherName: "Javed Iqbal",
      class: "Class 10th (Science Group)",
      rollNo: "1002",
      marks: "1039 / 1100",
      percentage: "94.45%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      badge: "🎖️ 2nd Position Matric",
      quote: "Dedicated teaching staff and regular testing produced this score."
    },
    {
      rank: 6,
      boardPosition: "1st Position - 11th College",
      name: "Bilal Haider",
      fatherName: "Ghulam Haider",
      class: "1st Year (F.Sc Pre-Medical)",
      rollNo: "1101",
      marks: "526 / 550",
      percentage: "95.60%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      badge: "🎖️ 1st Position 11th",
      quote: "Preparation for entry tests starts from day one at Al Khuda."
    },
    {
      rank: 7,
      boardPosition: "1st Position - 9th Class",
      name: "Rohaan Shahid",
      fatherName: "Shahid Mehmood",
      class: "Class 9th (Science)",
      rollNo: "901",
      marks: "533 / 550",
      percentage: "96.90%",
      grade: "A-1",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      badge: "🎖️ 1st Position Class 9th",
      quote: "Grateful to my parents and teachers for continuous support."
    }
  ],

  // Top 3 Students for ALL Classes (Nursery to 2nd Year)
  classToppers: [
    {
      classId: "nursery",
      className: "Nursery",
      toppers: [
        { rank: 1, name: "Syed Bilal Ahmed", rollNo: "N-01", percentage: "98.5%", photo: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Anaya Malik", rollNo: "N-05", percentage: "97.2%", photo: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Mustafa Hasan", rollNo: "N-03", percentage: "96.0%", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "kg",
      className: "Prep / KG",
      toppers: [
        { rank: 1, name: "Zuhair Ali", rollNo: "KG-02", percentage: "99.0%", photo: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Hoorain Fatima", rollNo: "KG-08", percentage: "98.1%", photo: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Abdullah Usman", rollNo: "KG-04", percentage: "97.4%", photo: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-1",
      className: "Class 1",
      toppers: [
        { rank: 1, name: "Eshal Khan", rollNo: "101", percentage: "98.8%", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Rayyan Ahmed", rollNo: "104", percentage: "97.5%", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Inaya Noor", rollNo: "108", percentage: "96.9%", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-2",
      className: "Class 2",
      toppers: [
        { rank: 1, name: "Zayan Mirza", rollNo: "201", percentage: "98.2%", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Myra Shah", rollNo: "203", percentage: "97.6%", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Subhan Raza", rollNo: "207", percentage: "96.5%", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-3",
      className: "Class 3",
      toppers: [
        { rank: 1, name: "Mariam Usman", rollNo: "302", percentage: "97.9%", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Ibrahim Tariq", rollNo: "301", percentage: "97.1%", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Bareera Fatima", rollNo: "309", percentage: "96.2%", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-4",
      className: "Class 4",
      toppers: [
        { rank: 1, name: "Hashir Mahmood", rollNo: "401", percentage: "97.4%", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Aalina Hassan", rollNo: "406", percentage: "96.8%", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Ayaan Siddiqui", rollNo: "402", percentage: "95.9%", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-5",
      className: "Class 5",
      toppers: [
        { rank: 1, name: "Hania Zahra", rollNo: "501", percentage: "98.1%", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Umer Farooq", rollNo: "505", percentage: "97.0%", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Manha Rehan", rollNo: "508", percentage: "96.3%", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-6",
      className: "Class 6",
      toppers: [
        { rank: 1, name: "Daniya Imran", rollNo: "602", percentage: "97.5%", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Saad Abdullah", rollNo: "601", percentage: "96.9%", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Khadija Bibi", rollNo: "607", percentage: "95.8%", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-7",
      className: "Class 7",
      toppers: [
        { rank: 1, name: "Talha Rashid", rollNo: "701", percentage: "97.0%", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Zoya Kashif", rollNo: "704", percentage: "96.2%", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Mubashir Ali", rollNo: "709", percentage: "95.1%", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-8",
      className: "Class 8",
      toppers: [
        { rank: 1, name: "Aleena Arshad", rollNo: "803", percentage: "97.8%", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Hamdan Qureshi", rollNo: "801", percentage: "96.5%", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Laiba Noor", rollNo: "805", percentage: "95.6%", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-9",
      className: "Class 9th",
      toppers: [
        { rank: 1, name: "Rohaan Shahid", rollNo: "901", percentage: "96.9%", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Safa Khalid", rollNo: "904", percentage: "96.1%", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Fhad Zubair", rollNo: "902", percentage: "95.3%", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "class-10",
      className: "Class 10th (Matric)",
      toppers: [
        { rank: 1, name: "Zainab Bibi", rollNo: "1001", percentage: "95.00%", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Usama Javed", rollNo: "1002", percentage: "94.45%", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Mehwish Riaz", rollNo: "1005", percentage: "93.90%", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "1st-year",
      className: "1st Year (College)",
      toppers: [
        { rank: 1, name: "Bilal Haider", rollNo: "1101", percentage: "95.6%", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Amna Sulaiman", rollNo: "1104", percentage: "94.8%", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Hassan Raza", rollNo: "1103", percentage: "94.0%", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      classId: "2nd-year",
      className: "2nd Year (College)",
      toppers: [
        { rank: 1, name: "Muhammad Hamza Khan", rollNo: "2201", percentage: "96.54%", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" },
        { rank: 2, name: "Ayesha Fatima", rollNo: "2202", percentage: "95.81%", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
        { rank: 3, name: "Waqas Mansoor", rollNo: "2206", percentage: "94.90%", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }
      ]
    }
  ],

  // Comprehensive Student Results Database
  studentResults: [
    {
      rollNo: "N-01",
      name: "Syed Bilal Ahmed",
      fatherName: "Syed Ahmed Ali",
      classId: "nursery",
      className: "Nursery",
      section: "A",
      totalMarks: 300,
      obtainedMarks: 295,
      percentage: "98.33%",
      grade: "A-1",
      status: "Pass (Distinction)",
      position: "1st",
      subjects: [
        { name: "English Oral & Rhymes", total: 100, obtained: 99 },
        { name: "Urdu Oral & Rhymes", total: 100, obtained: 98 },
        { name: "Mathematics & Concepts", total: 100, obtained: 98 }
      ]
    },
    {
      rollNo: "N-02",
      name: "Zainab Tariq",
      fatherName: "Tariq Aziz",
      classId: "nursery",
      className: "Nursery",
      section: "A",
      totalMarks: 300,
      obtainedMarks: 278,
      percentage: "92.67%",
      grade: "A-1",
      status: "Pass",
      position: "4th",
      subjects: [
        { name: "English Oral & Rhymes", total: 100, obtained: 92 },
        { name: "Urdu Oral & Rhymes", total: 100, obtained: 93 },
        { name: "Mathematics & Concepts", total: 100, obtained: 93 }
      ]
    },
    {
      rollNo: "N-03",
      name: "Mustafa Hasan",
      fatherName: "Hasan Raza",
      classId: "nursery",
      className: "Nursery",
      section: "A",
      totalMarks: 300,
      obtainedMarks: 288,
      percentage: "96.00%",
      grade: "A-1",
      status: "Pass (3rd Position)",
      position: "3rd",
      subjects: [
        { name: "English Oral & Rhymes", total: 100, obtained: 96 },
        { name: "Urdu Oral & Rhymes", total: 100, obtained: 96 },
        { name: "Mathematics & Concepts", total: 100, obtained: 96 }
      ]
    },
    {
      rollNo: "KG-01",
      name: "Muhammad Ibrahim",
      fatherName: "Usman Ghani",
      classId: "kg",
      className: "Prep / KG",
      section: "Green",
      totalMarks: 400,
      obtainedMarks: 372,
      percentage: "93.00%",
      grade: "A-1",
      status: "Pass",
      position: "5th",
      subjects: [
        { name: "English", total: 100, obtained: 93 },
        { name: "Urdu", total: 100, obtained: 91 },
        { name: "Mathematics", total: 100, obtained: 96 },
        { name: "General Knowledge", total: 100, obtained: 92 }
      ]
    },
    {
      rollNo: "KG-02",
      name: "Zuhair Ali",
      fatherName: "Asad Ali",
      classId: "kg",
      className: "Prep / KG",
      section: "Green",
      totalMarks: 400,
      obtainedMarks: 396,
      percentage: "99.00%",
      grade: "A-1",
      status: "Pass (1st Position)",
      position: "1st",
      subjects: [
        { name: "English", total: 100, obtained: 99 },
        { name: "Urdu", total: 100, obtained: 98 },
        { name: "Mathematics", total: 100, obtained: 100 },
        { name: "General Knowledge", total: 100, obtained: 99 }
      ]
    },
    {
      rollNo: "101",
      name: "Eshal Khan",
      fatherName: "Shahid Khan",
      classId: "class-1",
      className: "Class 1",
      section: "Rose",
      totalMarks: 500,
      obtainedMarks: 494,
      percentage: "98.80%",
      grade: "A-1",
      status: "Pass (1st Position)",
      position: "1st",
      subjects: [
        { name: "English", total: 100, obtained: 99 },
        { name: "Urdu", total: 100, obtained: 98 },
        { name: "Mathematics", total: 100, obtained: 100 },
        { name: "General Science", total: 100, obtained: 99 },
        { name: "Islamiat", total: 100, obtained: 98 }
      ]
    },
    {
      rollNo: "501",
      name: "Hania Zahra",
      fatherName: "Zulfiqar Ali",
      classId: "class-5",
      className: "Class 5",
      section: "Tulip",
      totalMarks: 600,
      obtainedMarks: 588,
      percentage: "98.00%",
      grade: "A-1",
      status: "Pass (1st Position)",
      position: "1st",
      subjects: [
        { name: "English", total: 100, obtained: 98 },
        { name: "Urdu", total: 100, obtained: 97 },
        { name: "Mathematics", total: 100, obtained: 100 },
        { name: "Science", total: 100, obtained: 99 },
        { name: "Social Studies", total: 100, obtained: 96 },
        { name: "Islamiat", total: 100, obtained: 98 }
      ]
    },
    {
      rollNo: "901",
      name: "Rohaan Shahid",
      fatherName: "Shahid Mehmood",
      classId: "class-9",
      className: "Class 9th",
      section: "Science A",
      totalMarks: 550,
      obtainedMarks: 533,
      percentage: "96.90%",
      grade: "A-1",
      status: "Pass (1st Position)",
      position: "1st",
      subjects: [
        { name: "English I", total: 75, obtained: 73 },
        { name: "Urdu I", total: 75, obtained: 72 },
        { name: "Mathematics I", total: 75, obtained: 75 },
        { name: "Physics I", total: 75, obtained: 74 },
        { name: "Chemistry I", total: 75, obtained: 72 },
        { name: "Biology / Computer", total: 75, obtained: 73 },
        { name: "Islamiat Compulsory", total: 50, obtained: 48 },
        { name: "Translation of Holy Quran", total: 50, obtained: 46 }
      ]
    },
    {
      rollNo: "1001",
      name: "Zainab Bibi",
      fatherName: "Ghulam Mustafa",
      classId: "class-10",
      className: "Class 10th (Matric)",
      section: "Science A",
      totalMarks: 1100,
      obtainedMarks: 1045,
      percentage: "95.00%",
      grade: "A-1",
      status: "Pass (School 3rd Position)",
      position: "1st in Class",
      subjects: [
        { name: "English (I & II)", total: 150, obtained: 142 },
        { name: "Urdu (I & II)", total: 150, obtained: 141 },
        { name: "Mathematics (I & II)", total: 150, obtained: 149 },
        { name: "Physics (I & II + Prac)", total: 150, obtained: 145 },
        { name: "Chemistry (I & II + Prac)", total: 150, obtained: 140 },
        { name: "Biology (I & II + Prac)", total: 150, obtained: 144 },
        { name: "Pak Studies", total: 50, obtained: 47 },
        { name: "Islamiat Compulsory", total: 50, obtained: 48 },
        { name: "Tarjuma-tul-Quran", total: 100, obtained: 89 }
      ]
    },
    {
      rollNo: "1002",
      name: "Usama Javed",
      fatherName: "Javed Iqbal",
      classId: "class-10",
      className: "Class 10th (Matric)",
      section: "Science A",
      totalMarks: 1100,
      obtainedMarks: 1039,
      percentage: "94.45%",
      grade: "A-1",
      status: "Pass (2nd Position)",
      position: "2nd in Class",
      subjects: [
        { name: "English (I & II)", total: 150, obtained: 140 },
        { name: "Urdu (I & II)", total: 150, obtained: 138 },
        { name: "Mathematics (I & II)", total: 150, obtained: 148 },
        { name: "Physics (I & II + Prac)", total: 150, obtained: 143 },
        { name: "Chemistry (I & II + Prac)", total: 150, obtained: 142 },
        { name: "Biology (I & II + Prac)", total: 150, obtained: 141 },
        { name: "Pak Studies", total: 50, obtained: 46 },
        { name: "Islamiat Compulsory", total: 50, obtained: 47 },
        { name: "Tarjuma-tul-Quran", total: 100, obtained: 94 }
      ]
    },
    {
      rollNo: "1005",
      name: "Mehwish Riaz",
      fatherName: "Riaz Ahmed",
      classId: "class-10",
      className: "Class 10th (Matric)",
      section: "Science B",
      totalMarks: 1100,
      obtainedMarks: 1033,
      percentage: "93.90%",
      grade: "A-1",
      status: "Pass (3rd Position)",
      position: "3rd in Class",
      subjects: [
        { name: "English (I & II)", total: 150, obtained: 139 },
        { name: "Urdu (I & II)", total: 150, obtained: 137 },
        { name: "Mathematics (I & II)", total: 150, obtained: 145 },
        { name: "Physics (I & II + Prac)", total: 150, obtained: 142 },
        { name: "Chemistry (I & II + Prac)", total: 150, obtained: 139 },
        { name: "Computer Science", total: 150, obtained: 145 },
        { name: "Pak Studies", total: 50, obtained: 46 },
        { name: "Islamiat Compulsory", total: 50, obtained: 47 },
        { name: "Tarjuma-tul-Quran", total: 100, obtained: 93 }
      ]
    },
    {
      rollNo: "1101",
      name: "Bilal Haider",
      fatherName: "Ghulam Haider",
      classId: "1st-year",
      className: "1st Year (College)",
      section: "F.Sc Pre-Med A",
      totalMarks: 550,
      obtainedMarks: 526,
      percentage: "95.60%",
      grade: "A-1",
      status: "Pass (1st Position)",
      position: "1st in College 11th",
      subjects: [
        { name: "English I", total: 100, obtained: 93 },
        { name: "Urdu I", total: 100, obtained: 92 },
        { name: "Physics I", total: 85, obtained: 83 },
        { name: "Chemistry I", total: 85, obtained: 82 },
        { name: "Biology I", total: 85, obtained: 84 },
        { name: "Islamiat", total: 50, obtained: 48 },
        { name: "Quranic Translation", total: 45, obtained: 44 }
      ]
    },
    {
      rollNo: "2201",
      name: "Muhammad Hamza Khan",
      fatherName: "Tariq Mahmood Khan",
      classId: "2nd-year",
      className: "2nd Year (College)",
      section: "F.Sc Pre-Med A",
      totalMarks: 1100,
      obtainedMarks: 1062,
      percentage: "96.54%",
      grade: "A-1",
      status: "Pass (School & College Gold Medalist)",
      position: "1st Overall",
      subjects: [
        { name: "English (I & II)", total: 200, obtained: 191 },
        { name: "Urdu (I & II)", total: 200, obtained: 189 },
        { name: "Physics (Theory + Prac)", total: 200, obtained: 196 },
        { name: "Chemistry (Theory + Prac)", total: 200, obtained: 194 },
        { name: "Biology (Theory + Prac)", total: 200, obtained: 197 },
        { name: "Pakistan Studies", total: 50, obtained: 47 },
        { name: "Islamiat & Quran", total: 50, obtained: 48 }
      ]
    },
    {
      rollNo: "2202",
      name: "Ayesha Fatima",
      fatherName: "Shahid Iqbal",
      classId: "2nd-year",
      className: "2nd Year (College)",
      section: "F.Sc Pre-Eng A",
      totalMarks: 1100,
      obtainedMarks: 1054,
      percentage: "95.81%",
      grade: "A-1",
      status: "Pass (Overall Silver Medalist)",
      position: "2nd Overall",
      subjects: [
        { name: "English (I & II)", total: 200, obtained: 190 },
        { name: "Urdu (I & II)", total: 200, obtained: 187 },
        { name: "Mathematics (I & II)", total: 200, obtained: 199 },
        { name: "Physics (Theory + Prac)", total: 200, obtained: 193 },
        { name: "Chemistry (Theory + Prac)", total: 200, obtained: 191 },
        { name: "Pakistan Studies", total: 50, obtained: 46 },
        { name: "Islamiat & Quran", total: 50, obtained: 48 }
      ]
    },
    {
      rollNo: "2206",
      name: "Waqas Mansoor",
      fatherName: "Mansoor Ahmed",
      classId: "2nd-year",
      className: "2nd Year (College)",
      section: "ICS (Comp Science)",
      totalMarks: 1100,
      obtainedMarks: 1044,
      percentage: "94.90%",
      grade: "A-1",
      status: "Pass (3rd Position)",
      position: "3rd in College 12th",
      subjects: [
        { name: "English (I & II)", total: 200, obtained: 186 },
        { name: "Urdu (I & II)", total: 200, obtained: 184 },
        { name: "Mathematics (I & II)", total: 200, obtained: 197 },
        { name: "Physics (Theory + Prac)", total: 200, obtained: 190 },
        { name: "Computer Science (Prac)", total: 200, obtained: 193 },
        { name: "Pakistan Studies", total: 50, obtained: 46 },
        { name: "Islamiat & Quran", total: 50, obtained: 48 }
      ]
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Engr. Khalid Mansoor",
      role: "Parent of Board Topper (2nd Year)",
      comment: "Al Khuda Model College provided my son with exceptional guidance, modern science labs, and constant motivation. Securing a top board position was a dream come true!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Dr. Samina Rashid",
      role: "Parent of Class 10th Student",
      comment: "The conceptual clarity and individual attention given by teachers at Al Khuda is unparalleled. The online result portal is so convenient for parents to check progress.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Muhammad Usman",
      role: "Alumni - F.Sc Pre-Medical 2024",
      comment: "Al Khuda shaped my career path. The faculty prepared us rigorously for both FBISE Board exams and medical entry tests. I am proud to be an alumnus!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ],

  // Gallery Data
  gallery: [
    {
      id: 1,
      category: "campus",
      title: "Main Campus & Administrative Building",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
      description: "State of the art campus infrastructure designed for inspiring educational excellence."
    },
    {
      id: 2,
      category: "labs",
      title: "Advanced Computer Science & AI Lab",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      description: "Equipped with high-speed computers, fiber internet, and robotics kits."
    },
    {
      id: 3,
      category: "events",
      title: "Annual Prize Distribution Ceremony",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      description: "Honoring top achievers and board position holders with gold medals and certificates."
    },
    {
      id: 4,
      category: "sports",
      title: "Annual Sports & Athletics Championship",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      description: "Cricket, football, badminton, and track competitions promoting physical fitness."
    },
    {
      id: 5,
      category: "labs",
      title: "Modern Physics & Chemistry Laboratory",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      description: "Fully equipped science facilities enabling practical hands-on experiments."
    },
    {
      id: 6,
      category: "events",
      title: "Science Fair & Tech Exhibition",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      description: "Students showcasing innovative science projects, renewable energy models, and software."
    }
  ],

  // Notice Board Announcements
  notices: [
    {
      id: 1,
      date: "05 Aug 2026",
      category: "Result",
      title: "Annual Examination Results Announced for Session 2025-26",
      desc: "All student marksheets from Nursery to 2nd Year are now live on our official online Result Portal. Parents can search results by Roll Number or Student Name."
    },
    {
      id: 2,
      date: "01 Aug 2026",
      category: "Admissions",
      title: "Admissions Open for Academic Session 2026-27",
      desc: "Applications invited for Nursery to Class 9th & 1st Year F.Sc Pre-Med, Pre-Eng, ICS & Arts. Early bird scholarships available for position holders."
    },
    {
      id: 3,
      date: "28 Jul 2026",
      category: "Event",
      title: "Grand Orientation Day for College New Batch",
      desc: "Orientation for 1st Year students scheduled for August 15th at the Main Auditorium. Attendance is mandatory for newly enrolled students and parents."
    }
  ],

  // Online Admission Applications Received from admissions.html
  admissionsSubmissions: [
    {
      id: 101,
      date: "05 Aug 2026",
      studentName: "Zuhair Ahmed",
      fatherName: "Tariq Ahmed",
      applyClass: "Class 9th (Science)",
      phone: "+92 300 9876543",
      email: "tariq.ahmed@example.com",
      previousSchool: "Army Public School",
      status: "Approved"
    },
    {
      id: 102,
      date: "04 Aug 2026",
      studentName: "Fatima Noor",
      fatherName: "Shahid Mehmood",
      applyClass: "1st Year (F.Sc Pre-Medical)",
      phone: "+92 321 4567890",
      email: "shahid.m@example.com",
      previousSchool: "Al Khuda Model School",
      status: "Pending Review"
    }
  ],

  // Contact Inquiries Received from contact.html
  contactSubmissions: [
    {
      id: 201,
      date: "05 Aug 2026",
      name: "Engr. Usman Ali",
      email: "usman.ali@example.com",
      subject: "Fee Structure for 1st Year Pre-Engineering",
      message: "Respected Sir, I want to inquire about the hostel facilities and monthly fee package for 1st Year students."
    }
  ],

  // Latest Campus News & Updates Section
  news: [
    {
      id: 1,
      date: "05 Aug 2026",
      tag: "Urgent Notice",
      title: "FBISE Annual Examination Date Sheet Announced for Class 9th & 10th",
      summary: "The Federal Board of Intermediate & Secondary Education has officially released the exam timetable. Students can collect roll number slips from the office.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      date: "02 Aug 2026",
      tag: "Academic",
      title: "Al Khuda Students Secure Top Ranks in Federal STEM Science Olympiad",
      summary: "Our robotics and science team bagged 1st position in the National STEM Innovation Challenge held at NUST Islamabad.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      date: "28 Jul 2026",
      tag: "Admissions",
      title: "New Session 2026-27 Merit Scholarships Open for High Achievers",
      summary: "Up to 100% fee waiver scholarships available for students securing 90%+ marks in matric exams.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
    }
  ]
};

// Function to load data from localStorage or fallback to defaults
function initSchoolData() {
  const savedData = localStorage.getItem(AK_STORAGE_KEY);
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      console.error("Error parsing stored school data:", e);
    }
  }
  localStorage.setItem(AK_STORAGE_KEY, JSON.stringify(DEFAULT_SCHOOL_DATA));
  return DEFAULT_SCHOOL_DATA;
}

// Global active SCHOOL_DATA object used across website
let SCHOOL_DATA = initSchoolData();

// Global helper to save changes permanently
window.saveSchoolData = function() {
  try {
    localStorage.setItem(AK_STORAGE_KEY, JSON.stringify(SCHOOL_DATA));
    console.log("School data permanently saved to localStorage.");
  } catch (e) {
    console.error("Failed to save school data to localStorage:", e);
  }
};

// Global helper to reset to default factory data
window.resetSchoolDataToDefault = function() {
  if (confirm("Are you sure you want to reset all portal data to default factory settings?")) {
    localStorage.removeItem(AK_STORAGE_KEY);
    SCHOOL_DATA = JSON.parse(JSON.stringify(DEFAULT_SCHOOL_DATA));
    window.saveSchoolData();
    window.location.reload();
  }
};
