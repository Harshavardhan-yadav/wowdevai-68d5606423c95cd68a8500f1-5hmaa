// Import testing data
import { testingData, dataHelpers } from './data/testingData.js';

// Main application state and functionality
const AppState = {
  currentUser: dataHelpers.getCurrentUser().role, // 'student' or 'faculty'
  darkMode: false,
  sidebarCollapsed: false
};

document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  loadTestingData();
});

// Load testing data into the UI
function loadTestingData() {
  loadUserProfile();
  loadStudentDashboard();
  loadFacultyDashboard();
  loadNotifications();
  updateCharts();
}

// Load user profile data
function loadUserProfile() {
  const user = dataHelpers.getCurrentUser();
  
  // Update profile picture and name
  const profileImg = document.querySelector('[data-id="profile-picture"]');
  const profileName = document.querySelector('[data-id="profile-name"]');
  
  if (profileImg) {
    profileImg.src = user.profilePicture;
    profileImg.alt = user.name;
  }
  
  if (profileName) {
    profileName.textContent = user.name;
  }
  
  // Update user info in various places
  const userNameElements = document.querySelectorAll('[data-user-name]');
  userNameElements.forEach(el => {
    el.textContent = user.name;
  });
  
  const userRoleElements = document.querySelectorAll('[data-user-role]');
  userRoleElements.forEach(el => {
    el.textContent = user.role === 'student' ? 'Student' : 'Faculty';
  });
}

// Load notifications with real data
function loadNotifications() {
  const unreadNotifications = dataHelpers.getUnreadNotifications();
  const notificationBadge = document.querySelector('[data-id="notification-badge"]');
  
  if (notificationBadge) {
    if (unreadNotifications.length > 0) {
      notificationBadge.textContent = unreadNotifications.length;
      notificationBadge.classList.remove('hidden');
    } else {
      notificationBadge.classList.add('hidden');
    }
  }
}

// Initialize the application
function initializeApp() {
  initializeTheme();
  initializeNavigation();
  showDashboard(dataHelpers.getCurrentUser().role + '-dashboard'); // Show initial dashboard
  lucide.createIcons(); // Initialize icons
}

// Setup event listeners
function setupEventListeners() {
  initializeRoleToggle();
  initializeMobileMenu();
  initializeChatbot();
  initializeIDCard();
}

// Load student dashboard with real data
function loadStudentDashboard() {
  if (AppState.currentUser !== 'student') return;
  
  const userId = testingData.currentUser.id;
  loadStudentAttendance(userId);
  loadStudentAssignments();
  loadStudentMarks(userId);
  loadStudentTimetable();
  loadStudentActivities();
}

// Load student attendance data
function loadStudentAttendance(userId) {
  const overallAttendance = dataHelpers.calculateOverallAttendance(userId);
  const attendancePercentage = document.querySelector('[data-id="attendance-percentage"]');
  const attendanceProgress = document.querySelector('[data-id="attendance-progress"]');
  
  if (attendancePercentage) {
    attendancePercentage.textContent = `${overallAttendance.toFixed(1)}%`;
  }
  
  if (attendanceProgress) {
    attendanceProgress.style.width = `${overallAttendance}%`;
  }
  
  // Load subject-wise attendance
  const attendanceContainer = document.querySelector('[data-id="subject-attendance"]');
  if (attendanceContainer) {
    const userAttendance = testingData.attendance[userId] || [];
    attendanceContainer.innerHTML = userAttendance.map(att => {
      const subject = dataHelpers.getSubjectById(att.subjectId);
      return `
        <div class="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
          <div>
            <p class="font-medium text-gray-900">${subject?.name || att.subjectId}</p>
            <p class="text-sm text-gray-500">${att.present}/${att.present + att.absent} classes</p>
          </div>
          <div class="text-right">
            <p class="font-semibold ${dataHelpers.getAttendanceColor(att.percentage)}">
              ${att.percentage.toFixed(1)}%
            </p>
            <span class="inline-flex items-center px-2 py-1 text-xs rounded-full ${att.trend === 'increasing' ? 'bg-green-100 text-green-700' : att.trend === 'decreasing' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}">
              ${att.trend}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Load student assignments
function loadStudentAssignments() {
  const pendingAssignments = dataHelpers.getPendingAssignments();
  const assignmentsContainer = document.querySelector('[data-id="assignments-list"]');
  
  if (assignmentsContainer) {
    assignmentsContainer.innerHTML = pendingAssignments.slice(0, 3).map(assignment => `
      <div class="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-2">
          <h4 class="font-medium text-gray-900">${assignment.title}</h4>
          <span class="inline-flex items-center px-2 py-1 text-xs rounded-full ${dataHelpers.getPriorityColor(assignment.priority)}">
            ${assignment.priority}
          </span>
        </div>
        <p class="text-sm text-gray-600 mb-2">${assignment.subjectName}</p>
        <p class="text-xs text-gray-500 mb-3">${assignment.description}</p>
        <div class="flex justify-between items-center">
          <span class="text-xs text-gray-500">Due: ${dataHelpers.formatDate(assignment.dueDate)}</span>
          <span class="inline-flex items-center px-2 py-1 text-xs rounded-full ${assignment.status === 'pending' ? 'bg-red-100 text-red-700' : assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}">
            ${assignment.status}
          </span>
        </div>
      </div>
    `).join('');
  }
  
  // Update assignment count
  const assignmentCount = document.querySelector('[data-id="assignment-count"]');
  if (assignmentCount) {
    assignmentCount.textContent = pendingAssignments.length;
  }
}

// Load student marks/grades
function loadStudentMarks(userId) {
  const userMarks = testingData.marks[userId] || [];
  const marksContainer = document.querySelector('[data-id="marks-list"]');
  
  if (marksContainer) {
    marksContainer.innerHTML = userMarks.map(mark => `
      <div class="p-3 bg-white rounded-lg border border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <p class="font-medium text-gray-900">${mark.subjectName}</p>
            <p class="text-sm text-gray-500">${mark.total}/${mark.maxMarks}</p>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold ${dataHelpers.getGradeColor(mark.grade)}">${mark.grade}</p>
            <p class="text-sm text-gray-600">${mark.percentage.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Update CGPA
  const cgpaElement = document.querySelector('[data-id="cgpa-display"]');
  if (cgpaElement) {
    const cgpa = dataHelpers.calculateCGPA(userId);
    cgpaElement.textContent = cgpa.toFixed(2);
  }
}

// Load student timetable
function loadStudentTimetable() {
  const todaySchedule = dataHelpers.getTodaysSchedule();
  const timetableContainer = document.querySelector('[data-id="todays-schedule"]');
  
  if (timetableContainer && todaySchedule) {
    timetableContainer.innerHTML = `
      <div class="mb-4">
        <h3 class="font-semibold text-gray-900 mb-3">${todaySchedule.day}'s Schedule</h3>
        <div class="space-y-2">
          ${todaySchedule.slots.map(slot => `
            <div class="flex items-center p-3 bg-white rounded-lg border border-gray-200">
              <div class="flex-shrink-0 w-20 text-sm text-gray-600">${slot.time}</div>
              <div class="ml-4">
                <p class="font-medium text-gray-900">${slot.subjectName}</p>
                <p class="text-sm text-gray-500">${slot.room} • ${slot.faculty}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Load student recent activities
function loadStudentActivities() {
  const activitiesContainer = document.querySelector('[data-id="recent-activities"]');
  
  if (activitiesContainer) {
    activitiesContainer.innerHTML = testingData.recentActivities.map(activity => `
      <div class="flex items-start p-3 hover:bg-gray-50 rounded-lg">
        <div class="flex-shrink-0 w-8 h-8 bg-${activity.color}-100 rounded-full flex items-center justify-center">
          <i data-lucide="${activity.icon}" class="w-4 h-4 text-${activity.color}-600"></i>
        </div>
        <div class="ml-3">
          <p class="text-sm text-gray-900">${activity.message}</p>
          <p class="text-xs text-gray-500">${dataHelpers.formatTime(activity.timestamp)}</p>
        </div>
      </div>
    `).join('');
  }
}

// Load faculty dashboard with real data
function loadFacultyDashboard() {
  if (AppState.currentUser !== 'faculty') return;
  
  loadFacultyAttendanceOverview();
  loadFacultyPassPercentage();
  loadFacultyAnalytics();
  loadFacultyAwards();
}

// Load faculty attendance overview
function loadFacultyAttendanceOverview() {
  const classAttendance = testingData.facultyAnalytics.classAttendance;
  const attendanceOverview = document.querySelector('[data-id="faculty-attendance-overview"]');
  
  if (attendanceOverview) {
    const subjects = Object.entries(classAttendance);
    attendanceOverview.innerHTML = subjects.map(([subjectId, data]) => {
      const subject = dataHelpers.getSubjectById(subjectId);
      return `
        <div class="p-4 bg-white rounded-lg border border-gray-200">
          <div class="flex justify-between items-center mb-2">
            <h4 class="font-medium text-gray-900">${subject?.name || subjectId}</h4>
            <span class="text-lg font-bold ${dataHelpers.getAttendanceColor(data.percentage)}">
              ${data.percentage.toFixed(1)}%
            </span>
          </div>
          <div class="text-sm text-gray-600">
            <p>Present: ${data.present} | Absent: ${data.absent}</p>
            <p>Total Classes: ${data.total}</p>
          </div>
          <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div class="h-2 rounded-full ${data.percentage >= 90 ? 'bg-green-500' : data.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'}" 
                 style="width: ${data.percentage}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Load faculty pass percentage data
function loadFacultyPassPercentage() {
  const passData = testingData.facultyAnalytics.passPercentage;
  const passPercentageElement = document.querySelector('[data-id="pass-percentage"]');
  const passPercentageTrend = document.querySelector('[data-id="pass-percentage-trend"]');
  
  if (passPercentageElement) {
    passPercentageElement.textContent = `${passData.current}%`;
  }
  
  if (passPercentageTrend) {
    const trendIcon = passData.trend === 'increasing' ? '↗' : passData.trend === 'decreasing' ? '↘' : '→';
    const trendColor = passData.trend === 'increasing' ? 'text-green-600' : passData.trend === 'decreasing' ? 'text-red-600' : 'text-gray-600';
    passPercentageTrend.innerHTML = `
      <span class="${trendColor}">
        ${trendIcon} ${passData.trend} (prev: ${passData.previous}%)
      </span>
    `;
  }
}

// Load faculty analytics and awards
function loadFacultyAnalytics() {
  const engagementData = testingData.facultyAnalytics.studentEngagement;
  const engagementContainer = document.querySelector('[data-id="student-engagement"]');
  
  if (engagementContainer) {
    engagementContainer.innerHTML = engagementData.map(item => `
      <div class="p-3 bg-white rounded-lg border border-gray-200">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-gray-700">${item.metric}</span>
          <span class="text-lg font-bold text-purple-600">${item.value}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="h-2 bg-purple-500 rounded-full" style="width: ${item.value}%"></div>
        </div>
      </div>
    `).join('');
  }
}

// Load faculty awards
function loadFacultyAwards() {
  const currentFaculty = testingData.faculty.find(f => f.id === 'FAC001'); // Assuming current faculty
  const awardsContainer = document.querySelector('[data-id="faculty-awards"]');
  
  if (awardsContainer && currentFaculty) {
    awardsContainer.innerHTML = `
      <div class="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <i data-lucide="award" class="w-5 h-5 text-white"></i>
          </div>
          <div class="ml-3">
            <h4 class="font-semibold text-gray-900">Faculty Awards</h4>
            <p class="text-sm text-gray-600">Recognition & Achievements</p>
          </div>
        </div>
        <div class="space-y-2">
          ${currentFaculty.awards.map(award => `
            <div class="flex items-center p-2 bg-white rounded border border-yellow-200">
              <i data-lucide="trophy" class="w-4 h-4 text-yellow-600 mr-2"></i>
              <span class="text-sm text-gray-700">${award}</span>
            </div>
          `).join('')}
        </div>
        <div class="mt-3 flex justify-between items-center">
          <span class="text-sm text-gray-600">Salary Increment</span>
          <span class="font-semibold text-green-600">+${currentFaculty.increment}%</span>
        </div>
      </div>
    `;
  }
}

// Update charts with real data
function updateCharts() {
  // Only initialize charts if Chart.js is available
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded, charts will not be displayed');
    return;
  }
  
  updateAttendanceChart();
  updatePerformanceChart();
  updateAnalyticsCharts();
}

// Update attendance trend chart
function updateAttendanceChart() {
  const ctx = document.getElementById('attendanceChart');
  if (!ctx) return;
  
  const data = testingData.analytics.attendanceHistory;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.month),
      datasets: [{
        label: 'Attendance %',
        data: data.map(d => d.percentage),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Update performance chart
function updatePerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;
  
  const data = testingData.analytics.subjectWisePerformance;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.subject),
      datasets: [
        {
          label: 'Attendance %',
          data: data.map(d => d.attendance),
          backgroundColor: '#10b981'
        },
        {
          label: 'Marks %',
          data: data.map(d => d.marks),
          backgroundColor: '#3b82f6'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Update analytics charts for faculty
function updateAnalyticsCharts() {
  // Faculty engagement chart
  const engagementCtx = document.getElementById('engagementChart');
  if (engagementCtx) {
    const data = testingData.facultyAnalytics.studentEngagement;
    
    new Chart(engagementCtx, {
      type: 'doughnut',
      data: {
        labels: data.map(d => d.metric),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: [
            '#8b5cf6',
            '#06b6d4',
            '#10b981',
            '#f59e0b'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('attendiq-theme');
  if (savedTheme) {
    AppState.darkMode = savedTheme === 'dark';
  }
  
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  if (AppState.darkMode) {
    body.classList.add('dark');
  }
  
  darkModeToggle?.addEventListener('click', () => {
    AppState.darkMode = !AppState.darkMode;
    body.classList.toggle('dark', AppState.darkMode);
    localStorage.setItem('attendiq-theme', AppState.darkMode ? 'dark' : 'light');
    
    const icon = darkModeToggle.querySelector('i');
    icon.setAttribute('data-lucide', AppState.darkMode ? 'sun' : 'moon');
    lucide.createIcons();
  });
}

// Initialize navigation
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Update navigation styles
      updateNavStyles();
      
      // Show corresponding dashboard section
      const targetDashboard = this.dataset.target;
      showDashboard(targetDashboard);
    });
  });
  
  // Initial update
  updateNavStyles();
  showDashboard(dataHelpers.getCurrentUser().role + '-dashboard'); // Initial dashboard based on user role
}

// Update navigation styles
function updateNavStyles() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    if (item.classList.contains('active')) {
      if (AppState.currentUser === 'student') {
        item.classList.add('bg-green-100', 'text-green-700', 'dark:bg-green-900/20', 'dark:text-green-400');
        item.classList.remove('bg-blue-100', 'text-blue-700', 'dark:bg-blue-900/20', 'dark:text-blue-400');
      } else {
        item.classList.add('bg-blue-100', 'text-blue-700', 'dark:bg-blue-900/20', 'dark:text-blue-400');
        item.classList.remove('bg-green-100', 'text-green-700', 'dark:bg-green-900/20', 'dark:text-green-400');
      }
    } else {
      item.classList.add('text-gray-600', 'dark:text-gray-400', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
      item.classList.remove('bg-green-100', 'text-green-700', 'bg-blue-100', 'text-blue-700', 'dark:bg-green-900/20', 'dark:text-green-400', 'dark:bg-blue-900/20', 'dark:text-blue-400');
    }
  });
}

// Show dashboard content based on ID
function showDashboard(dashboardId) {
  const dashboards = document.querySelectorAll('.dashboard-content');
  dashboards.forEach(dashboard => {
    if (dashboard.id === dashboardId) {
      dashboard.classList.remove('hidden');
    } else {
      dashboard.classList.add('hidden');
    }
  });
  
  // Re-render charts for the active dashboard
  updateCharts();
}

// Initialize role toggle
function initializeRoleToggle() {
  const studentBtn = document.getElementById('student-role');
  const facultyBtn = document.getElementById('faculty-role');
  
  studentBtn?.addEventListener('click', () => {
    switchUserRole('student');
  });
  
  facultyBtn?.addEventListener('click', () => {
    switchUserRole('faculty');
  });
}

// Switch user role
function switchUserRole(role) {
  AppState.currentUser = role;
  
  const studentBtn = document.getElementById('student-role');
  const facultyBtn = document.getElementById('faculty-role');
  
  // Update button styles
  if (role === 'student') {
    studentBtn?.classList.add('active', 'bg-green-500', 'text-white');
    studentBtn?.classList.remove('text-gray-600', 'dark:text-gray-400');
    facultyBtn?.classList.remove('active', 'bg-blue-500', 'text-white');
    facultyBtn?.classList.add('text-gray-600', 'dark:text-gray-400');
  } else {
    facultyBtn?.classList.add('active', 'bg-blue-500', 'text-white');
    facultyBtn?.classList.remove('text-gray-600', 'dark:text-gray-400');
    studentBtn?.classList.remove('active', 'bg-green-500', 'text-white');
    studentBtn?.classList.add('text-gray-600', 'dark:text-gray-400');
  }
  
  // Update navigation styles
  updateNavStyles();
  
  // Show appropriate dashboard
  showDashboard(role + '-dashboard');
  
  // Reload data for the new role
  loadTestingData();
}

// Initialize mobile menu
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  
  mobileMenuBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('-translate-x-full');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar?.contains(e.target) && !mobileMenuBtn?.contains(e.target)) {
      sidebar?.classList.add('-translate-x-full');
    }
  });
}

// Initialize chatbot
function initializeChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.querySelector('[data-id="chatbot-input"]');
  const chatbotSend = document.querySelector('[data-id="chatbot-send"]');
  const messagesContainer = document.querySelector('[data-id="chatbot-messages"]');
  
  chatbotToggle?.addEventListener('click', () => {
    chatbotWindow?.classList.toggle('hidden');
  });
  
  chatbotClose?.addEventListener('click', () => {
    chatbotWindow?.classList.add('hidden');
  });
  
  const sendMessage = () => {
    const message = chatbotInput?.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatbotInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I can help you check your attendance records.",
        "Would you like me to show your upcoming assignments?",
        "Your overall performance looks great! Keep it up!",
        "Let me help you find that information in your dashboard.",
        "You can access your timetable from the sidebar menu."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addChatMessage(randomResponse, 'bot');
    }, 1000);
  };
  
  chatbotSend?.addEventListener('click', sendMessage);
  chatbotInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Add chat message
function addChatMessage(message, sender) {
  const messagesContainer = document.querySelector('[data-id="chatbot-messages"]');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `flex items-start space-x-2 mb-4 ${sender === 'user' ? 'justify-end' : ''}`;
  
  if (sender === 'bot') {
    messageDiv.innerHTML = `
      <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
        <i data-lucide="bot" class="w-3 h-3 text-white"></i>
      </div>
      <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 max-w-xs">
        <p class="text-sm text-gray-900 dark:text-white">${message}</p>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="bg-blue-500 rounded-lg px-3 py-2 max-w-xs">
        <p class="text-sm text-white">${message}</p>
      </div>
    `;
  }
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Reinitialize lucide icons
  lucide.createIcons();
}

// Initialize ID card
function initializeIDCard() {
  // Add ID card trigger (could be in settings or profile menu)
  const profileSection = document.querySelector('[data-id="profile-section"]');
  profileSection?.addEventListener('click', () => {
    showIDCard();
  });
  
  const closeModal = document.getElementById('close-id-modal');
  const modal = document.getElementById('id-card-modal');
  
  closeModal?.addEventListener('click', () => {
    modal?.classList.add('hidden');
  });
  
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}

// Show ID card
function showIDCard() {
  const modal = document.getElementById('id-card-modal');
  modal?.classList.remove('hidden');
}