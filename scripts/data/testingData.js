// AttendIQ Testing Database - Realistic Educational Data
export const testingData = {
  // Current user session
  currentUser: {
    id: 'STU001',
    name: 'Alex Johnson',
    role: 'student',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    email: 'alex.johnson@university.edu',
    rollNumber: 'CS21B001',
    semester: 6,
    branch: 'Computer Science Engineering',
    year: '3rd Year',
    cgpa: 8.67
  },

  // Students database
  students: [
    {
      id: 'STU001',
      name: 'Alex Johnson',
      rollNumber: 'CS21B001',
      email: 'alex.johnson@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      semester: 6,
      branch: 'Computer Science Engineering',
      cgpa: 8.67,
      totalAttendance: 87.5,
      status: 'active'
    },
    {
      id: 'STU002',
      name: 'Sarah Williams',
      rollNumber: 'CS21B002',
      email: 'sarah.williams@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face',
      semester: 6,
      branch: 'Computer Science Engineering',
      cgpa: 9.12,
      totalAttendance: 92.3,
      status: 'active'
    },
    {
      id: 'STU003',
      name: 'Michael Chen',
      rollNumber: 'CS21B003',
      email: 'michael.chen@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      semester: 6,
      branch: 'Computer Science Engineering',
      cgpa: 7.89,
      totalAttendance: 78.9,
      status: 'active'
    },
    {
      id: 'STU004',
      name: 'Emily Davis',
      rollNumber: 'CS21B004',
      email: 'emily.davis@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      semester: 6,
      branch: 'Computer Science Engineering',
      cgpa: 8.95,
      totalAttendance: 89.7,
      status: 'active'
    },
    {
      id: 'STU005',
      name: 'David Rodriguez',
      rollNumber: 'CS21B005',
      email: 'david.rodriguez@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      semester: 6,
      branch: 'Computer Science Engineering',
      cgpa: 8.34,
      totalAttendance: 85.2,
      status: 'active'
    }
  ],

  // Faculty database
  faculty: [
    {
      id: 'FAC001',
      name: 'Dr. Robert Kumar',
      email: 'robert.kumar@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      department: 'Computer Science Engineering',
      designation: 'Professor',
      experience: 12,
      subjects: ['CS301', 'CS302', 'CS303'],
      salary: 95000,
      increment: 8.5,
      awards: ['Best Faculty Award 2023', 'Research Excellence Award 2022']
    },
    {
      id: 'FAC002',
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@university.edu',
      profilePicture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      department: 'Computer Science Engineering',
      designation: 'Associate Professor',
      experience: 8,
      subjects: ['CS304', 'CS305'],
      salary: 78000,
      increment: 7.2,
      awards: ['Teaching Excellence Award 2023']
    }
  ],

  // Subjects/Courses database
  subjects: [
    {
      id: 'CS301',
      name: 'Database Management Systems',
      code: 'CS301',
      credits: 4,
      faculty: 'Dr. Robert Kumar',
      semester: 6,
      totalClasses: 45,
      completedClasses: 32
    },
    {
      id: 'CS302',
      name: 'Software Engineering',
      code: 'CS302',
      credits: 3,
      faculty: 'Dr. Robert Kumar',
      semester: 6,
      totalClasses: 40,
      completedClasses: 28
    },
    {
      id: 'CS303',
      name: 'Computer Networks',
      code: 'CS303',
      credits: 4,
      faculty: 'Dr. Robert Kumar',
      semester: 6,
      totalClasses: 42,
      completedClasses: 30
    },
    {
      id: 'CS304',
      name: 'Machine Learning',
      code: 'CS304',
      credits: 3,
      faculty: 'Dr. Priya Sharma',
      semester: 6,
      totalClasses: 38,
      completedClasses: 26
    },
    {
      id: 'CS305',
      name: 'Web Development',
      code: 'CS305',
      credits: 3,
      faculty: 'Dr. Priya Sharma',
      semester: 6,
      totalClasses: 36,
      completedClasses: 25
    }
  ],

  // Attendance records
  attendance: {
    STU001: [
      { subjectId: 'CS301', present: 28, absent: 4, percentage: 87.5, trend: 'increasing' },
      { subjectId: 'CS302', present: 25, absent: 3, percentage: 89.3, trend: 'stable' },
      { subjectId: 'CS303', present: 24, absent: 6, percentage: 80.0, trend: 'decreasing' },
      { subjectId: 'CS304', present: 23, absent: 3, percentage: 88.5, trend: 'increasing' },
      { subjectId: 'CS305', present: 22, absent: 3, percentage: 88.0, trend: 'stable' }
    ]
  },

  // Marks/Grades data
  marks: {
    STU001: [
      {
        subjectId: 'CS301',
        subjectName: 'Database Management Systems',
        internal1: 85,
        internal2: 88,
        assignment: 92,
        project: 87,
        total: 352,
        maxMarks: 400,
        percentage: 88.0,
        grade: 'A'
      },
      {
        subjectId: 'CS302',
        subjectName: 'Software Engineering',
        internal1: 82,
        internal2: 85,
        assignment: 89,
        project: 91,
        total: 347,
        maxMarks: 400,
        percentage: 86.75,
        grade: 'A'
      },
      {
        subjectId: 'CS303',
        subjectName: 'Computer Networks',
        internal1: 78,
        internal2: 81,
        assignment: 85,
        project: 83,
        total: 327,
        maxMarks: 400,
        percentage: 81.75,
        grade: 'A-'
      },
      {
        subjectId: 'CS304',
        subjectName: 'Machine Learning',
        internal1: 92,
        internal2: 89,
        assignment: 94,
        project: 96,
        total: 371,
        maxMarks: 400,
        percentage: 92.75,
        grade: 'A+'
      },
      {
        subjectId: 'CS305',
        subjectName: 'Web Development',
        internal1: 88,
        internal2: 90,
        assignment: 93,
        project: 89,
        total: 360,
        maxMarks: 400,
        percentage: 90.0,
        grade: 'A+'
      }
    ]
  },

  // Timetable data
  timetable: [
    {
      day: 'Monday',
      slots: [
        { time: '09:00-10:00', subject: 'CS301', subjectName: 'Database Management Systems', room: 'Lab-1', faculty: 'Dr. Robert Kumar' },
        { time: '10:00-11:00', subject: 'CS302', subjectName: 'Software Engineering', room: 'Room-205', faculty: 'Dr. Robert Kumar' },
        { time: '11:15-12:15', subject: 'CS303', subjectName: 'Computer Networks', room: 'Room-301', faculty: 'Dr. Robert Kumar' },
        { time: '14:00-15:00', subject: 'CS304', subjectName: 'Machine Learning', room: 'Lab-2', faculty: 'Dr. Priya Sharma' }
      ]
    },
    {
      day: 'Tuesday',
      slots: [
        { time: '09:00-10:00', subject: 'CS305', subjectName: 'Web Development', room: 'Lab-3', faculty: 'Dr. Priya Sharma' },
        { time: '10:00-11:00', subject: 'CS301', subjectName: 'Database Management Systems', room: 'Room-205', faculty: 'Dr. Robert Kumar' },
        { time: '11:15-12:15', subject: 'CS302', subjectName: 'Software Engineering', room: 'Lab-1', faculty: 'Dr. Robert Kumar' },
        { time: '14:00-15:00', subject: 'CS303', subjectName: 'Computer Networks', room: 'Room-301', faculty: 'Dr. Robert Kumar' }
      ]
    },
    {
      day: 'Wednesday',
      slots: [
        { time: '09:00-10:00', subject: 'CS304', subjectName: 'Machine Learning', room: 'Room-205', faculty: 'Dr. Priya Sharma' },
        { time: '10:00-11:00', subject: 'CS305', subjectName: 'Web Development', room: 'Lab-3', faculty: 'Dr. Priya Sharma' },
        { time: '11:15-12:15', subject: 'CS301', subjectName: 'Database Management Systems', room: 'Lab-1', faculty: 'Dr. Robert Kumar' },
        { time: '14:00-15:00', subject: 'CS302', subjectName: 'Software Engineering', room: 'Room-301', faculty: 'Dr. Robert Kumar' }
      ]
    },
    {
      day: 'Thursday',
      slots: [
        { time: '09:00-10:00', subject: 'CS303', subjectName: 'Computer Networks', room: 'Lab-2', faculty: 'Dr. Robert Kumar' },
        { time: '10:00-11:00', subject: 'CS304', subjectName: 'Machine Learning', room: 'Room-205', faculty: 'Dr. Priya Sharma' },
        { time: '11:15-12:15', subject: 'CS305', subjectName: 'Web Development', room: 'Room-301', faculty: 'Dr. Priya Sharma' },
        { time: '14:00-15:00', subject: 'CS301', subjectName: 'Database Management Systems', room: 'Lab-1', faculty: 'Dr. Robert Kumar' }
      ]
    },
    {
      day: 'Friday',
      slots: [
        { time: '09:00-10:00', subject: 'CS302', subjectName: 'Software Engineering', room: 'Room-205', faculty: 'Dr. Robert Kumar' },
        { time: '10:00-11:00', subject: 'CS303', subjectName: 'Computer Networks', room: 'Room-301', faculty: 'Dr. Robert Kumar' },
        { time: '11:15-12:15', subject: 'CS304', subjectName: 'Machine Learning', room: 'Lab-2', faculty: 'Dr. Priya Sharma' },
        { time: '14:00-15:00', subject: 'CS305', subjectName: 'Web Development', room: 'Lab-3', faculty: 'Dr. Priya Sharma' }
      ]
    }
  ],

  // Assignments data
  assignments: [
    {
      id: 'ASG001',
      title: 'Database Design Project',
      subject: 'CS301',
      subjectName: 'Database Management Systems',
      description: 'Design and implement a complete database system for a library management system',
      dueDate: '2024-01-25',
      status: 'pending',
      priority: 'high',
      marks: null,
      submittedDate: null,
      faculty: 'Dr. Robert Kumar'
    },
    {
      id: 'ASG002',
      title: 'Software Requirements Analysis',
      subject: 'CS302',
      subjectName: 'Software Engineering',
      description: 'Analyze and document requirements for an e-commerce application',
      dueDate: '2024-01-22',
      status: 'submitted',
      priority: 'medium',
      marks: 85,
      submittedDate: '2024-01-20',
      faculty: 'Dr. Robert Kumar'
    },
    {
      id: 'ASG003',
      title: 'Network Protocol Implementation',
      subject: 'CS303',
      subjectName: 'Computer Networks',
      description: 'Implement TCP/IP protocol simulation using Python',
      dueDate: '2024-01-28',
      status: 'pending',
      priority: 'high',
      marks: null,
      submittedDate: null,
      faculty: 'Dr. Robert Kumar'
    },
    {
      id: 'ASG004',
      title: 'Machine Learning Model',
      subject: 'CS304',
      subjectName: 'Machine Learning',
      description: 'Build and train a classification model using scikit-learn',
      dueDate: '2024-01-30',
      status: 'in-progress',
      priority: 'medium',
      marks: null,
      submittedDate: null,
      faculty: 'Dr. Priya Sharma'
    },
    {
      id: 'ASG005',
      title: 'Responsive Web Application',
      subject: 'CS305',
      subjectName: 'Web Development',
      description: 'Create a full-stack web application with React and Node.js',
      dueDate: '2024-02-05',
      status: 'pending',
      priority: 'low',
      marks: null,
      submittedDate: null,
      faculty: 'Dr. Priya Sharma'
    }
  ],

  // Notifications data
  notifications: [
    {
      id: 'NOT001',
      title: 'Assignment Deadline Reminder',
      message: 'Database Design Project due in 3 days',
      type: 'assignment',
      priority: 'high',
      timestamp: '2024-01-22T10:30:00Z',
      read: false,
      icon: 'clipboard-list'
    },
    {
      id: 'NOT002',
      title: 'Class Schedule Update',
      message: 'CS303 lecture moved to Lab-2 tomorrow',
      type: 'schedule',
      priority: 'medium',
      timestamp: '2024-01-22T09:15:00Z',
      read: false,
      icon: 'calendar'
    },
    {
      id: 'NOT003',
      title: 'Grade Published',
      message: 'Software Engineering assignment grade: 85/100',
      type: 'grade',
      priority: 'medium',
      timestamp: '2024-01-21T14:20:00Z',
      read: true,
      icon: 'trophy'
    },
    {
      id: 'NOT004',
      title: 'Event Reminder',
      message: 'Technical Symposium registration ends tomorrow',
      type: 'event',
      priority: 'low',
      timestamp: '2024-01-21T11:45:00Z',
      read: true,
      icon: 'star'
    },
    {
      id: 'NOT005',
      title: 'Attendance Alert',
      message: 'Your attendance in CS303 is below 75%',
      type: 'attendance',
      priority: 'high',
      timestamp: '2024-01-20T16:30:00Z',
      read: false,
      icon: 'alert-triangle'
    }
  ],

  // Events and activities
  events: [
    {
      id: 'EVT001',
      title: 'Technical Symposium 2024',
      description: 'Annual technical event with coding competitions and tech talks',
      date: '2024-02-15',
      time: '09:00',
      venue: 'Main Auditorium',
      type: 'competition',
      registrationOpen: true
    },
    {
      id: 'EVT002',
      title: 'Industry Expert Lecture',
      description: 'Guest lecture on AI/ML trends by industry expert',
      date: '2024-01-28',
      time: '14:00',
      venue: 'Seminar Hall',
      type: 'lecture',
      registrationOpen: true
    },
    {
      id: 'EVT003',
      title: 'Project Showcase',
      description: '6th semester project presentations and demos',
      date: '2024-02-20',
      time: '10:00',
      venue: 'Lab Complex',
      type: 'academic',
      registrationOpen: false
    }
  ],

  // Recent activities for timeline
  recentActivities: [
    {
      id: 'ACT001',
      type: 'attendance',
      message: 'Marked present in CS301 - Database Management Systems',
      timestamp: '2024-01-22T09:00:00Z',
      icon: 'check-circle',
      color: 'green'
    },
    {
      id: 'ACT002',
      type: 'assignment',
      message: 'Submitted Software Requirements Analysis assignment',
      timestamp: '2024-01-20T15:30:00Z',
      icon: 'upload',
      color: 'blue'
    },
    {
      id: 'ACT003',
      type: 'grade',
      message: 'Received grade for CS302 assignment: 85/100',
      timestamp: '2024-01-19T11:20:00Z',
      icon: 'star',
      color: 'purple'
    },
    {
      id: 'ACT004',
      type: 'attendance',
      message: 'Marked present in CS304 - Machine Learning',
      timestamp: '2024-01-19T10:00:00Z',
      icon: 'check-circle',
      color: 'green'
    }
  ],

  // Analytics data for charts
  analytics: {
    attendanceHistory: [
      { month: 'Aug', percentage: 85 },
      { month: 'Sep', percentage: 88 },
      { month: 'Oct', percentage: 82 },
      { month: 'Nov', percentage: 90 },
      { month: 'Dec', percentage: 87 },
      { month: 'Jan', percentage: 87.5 }
    ],
    subjectWisePerformance: [
      { subject: 'CS301', attendance: 87.5, marks: 88.0 },
      { subject: 'CS302', attendance: 89.3, marks: 86.75 },
      { subject: 'CS303', attendance: 80.0, marks: 81.75 },
      { subject: 'CS304', attendance: 88.5, marks: 92.75 },
      { subject: 'CS305', attendance: 88.0, marks: 90.0 }
    ],
    weeklyAttendance: [
      { day: 'Mon', present: 4, absent: 0 },
      { day: 'Tue', present: 3, absent: 1 },
      { day: 'Wed', present: 4, absent: 0 },
      { day: 'Thu', present: 3, absent: 1 },
      { day: 'Fri', present: 4, absent: 0 }
    ],
    gradeDistribution: [
      { grade: 'A+', count: 2 },
      { grade: 'A', count: 2 },
      { grade: 'A-', count: 1 },
      { grade: 'B+', count: 0 },
      { grade: 'B', count: 0 }
    ]
  },

  // Faculty analytics
  facultyAnalytics: {
    classAttendance: {
      CS301: { total: 45, present: 162, absent: 18, percentage: 90.0 },
      CS302: { total: 45, present: 156, absent: 24, percentage: 86.7 },
      CS303: { total: 45, present: 148, absent: 32, percentage: 82.2 },
      CS304: { total: 38, present: 142, absent: 18, percentage: 88.8 },
      CS305: { total: 36, present: 138, absent: 22, percentage: 86.3 }
    },
    passPercentage: {
      current: 87.5,
      previous: 84.2,
      trend: 'increasing',
      target: 90.0
    },
    studentEngagement: [
      { metric: 'Assignment Submission', value: 92 },
      { metric: 'Class Participation', value: 78 },
      { metric: 'Lab Attendance', value: 89 },
      { metric: 'Project Completion', value: 95 }
    ]
  },

  // File storage data (for locker)
  files: [
    {
      id: 'FILE001',
      name: 'CS301_Lab_Manual.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      subject: 'CS301',
      category: 'lab-manual'
    },
    {
      id: 'FILE002',
      name: 'Software_Engineering_Notes.docx',
      type: 'docx',
      size: '1.8 MB',
      uploadDate: '2024-01-18',
      subject: 'CS302',
      category: 'notes'
    },
    {
      id: 'FILE003',
      name: 'ML_Project_Report.pdf',
      type: 'pdf',
      size: '3.2 MB',
      uploadDate: '2024-01-20',
      subject: 'CS304',
      category: 'project'
    }
  ],

  // System settings
  settings: {
    notifications: {
      email: true,
      push: true,
      sms: false,
      assignment_reminders: true,
      attendance_alerts: true,
      grade_updates: true
    },
    privacy: {
      profile_visibility: 'friends',
      grade_visibility: 'private',
      attendance_visibility: 'private'
    },
    appearance: {
      theme: 'light',
      language: 'en',
      timezone: 'Asia/Kolkata'
    }
  }
};

// Helper functions for data manipulation
export const dataHelpers = {
  // Get current user data
  getCurrentUser() {
    return testingData.currentUser;
  },

  // Get user attendance for specific subject
  getUserAttendance(userId, subjectId) {
    const userAttendance = testingData.attendance[userId];
    if (!userAttendance) return null;
    return userAttendance.find(att => att.subjectId === subjectId);
  },

  // Get user marks for specific subject
  getUserMarks(userId, subjectId) {
    const userMarks = testingData.marks[userId];
    if (!userMarks) return null;
    return userMarks.find(mark => mark.subjectId === subjectId);
  },

  // Get today's schedule
  getTodaysSchedule() {
    const today = new Date().toLocaleLaleString('en', { weekday: 'long' });
    return testingData.timetable.find(day => day.day === today) || testingData.timetable[0];
  },

  // Get pending assignments
  getPendingAssignments() {
    return testingData.assignments.filter(assignment => 
      assignment.status === 'pending' || assignment.status === 'in-progress'
    );
  },

  // Get unread notifications
  getUnreadNotifications() {
    return testingData.notifications.filter(notification => !notification.read);
  },

  // Get subject by ID
  getSubjectById(subjectId) {
    return testingData.subjects.find(subject => subject.id === subjectId);
  },

  // Calculate overall attendance percentage
  calculateOverallAttendance(userId) {
    const userAttendance = testingData.attendance[userId];
    if (!userAttendance) return 0;
    
    const totalPresent = userAttendance.reduce((sum, att) => sum + att.present, 0);
    const totalClasses = userAttendance.reduce((sum, att) => sum + att.present + att.absent, 0);
    
    return totalClasses > 0 ? (totalPresent / totalClasses) * 100 : 0;
  },

  // Calculate overall CGPA
  calculateCGPA(userId) {
    const userMarks = testingData.marks[userId];
    if (!userMarks) return 0;
    
    const gradePoints = {
      'A+': 10, 'A': 9, 'A-': 8, 'B+': 7, 'B': 6, 'B-': 5, 'C+': 4, 'C': 3
    };
    
    const totalPoints = userMarks.reduce((sum, mark) => sum + (gradePoints[mark.grade] || 0), 0);
    return totalPoints / userMarks.length;
  },

  // Format date for display
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  },

  // Format time for display
  formatTime(timeString) {
    return new Date(timeString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Get attendance color based on percentage
  getAttendanceColor(percentage) {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  },

  // Get grade color
  getGradeColor(grade) {
    const colors = {
      'A+': 'text-green-600',
      'A': 'text-green-500',
      'A-': 'text-blue-600',
      'B+': 'text-yellow-600',
      'B': 'text-yellow-500',
      'B-': 'text-orange-600'
    };
    return colors[grade] || 'text-gray-600';
  },

  // Get priority color for assignments
  getPriorityColor(priority) {
    const colors = {
      'high': 'text-red-600 bg-red-50',
      'medium': 'text-yellow-600 bg-yellow-50',
      'low': 'text-green-600 bg-green-50'
    };
    return colors[priority] || 'text-gray-600 bg-gray-50';
  }
};