// Project data with detailed information
const projectData = {
    'ticketing': {
        name: 'Good Samaritan Hospital Ticketing System',
        role: 'Fullstack Developer',
        date: '2023-03-05',
        description: 'Developed a comprehensive maintenance ticketing system for tracking and managing hospital facility repair requests.',
        technologies: ['PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS'],
        features: [
            'Ticket status tracking',
            'Priority-based request management',
            'User authentication and role-based access',
            'Email notifications',
            'Analytics dashboard for facility management'
        ],
        impact: 'Reduced average repair response time by 40% and improved maintenance workflow efficiency',
        status: 'Inactive'
    },
    'furpals': {
        name: 'FurPals',
        role: 'Fullstack Developer',
        date: '2024-06-15',
        description: 'Developed a pet adoption platform connecting animal shelters with potential adopters through an intuitive pet listing and inquiry system.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        features: [
            'Advanced pet search and filtering',
            'Adoption application system',
            'Pet profile galleries with image uploads'
        ],
        impact: 'Connected 50+ shelters with adopters in the first 3 months',
        status: 'Inactive'
    },
    'cic-event': {
        name: 'CIC School Event Calendar',
        role: 'Fullstack Developer',
        date: '2024-07-20',
        description: 'Integrated scheduling and event management system for tracking and displaying campus activities and maintaining the school calendar.',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST API'],
        features: [
            'Interactive calendar interface',
            'Event creation and management',
            'Category-based filtering',
            'Email reminders for upcoming events',
            'Admin dashboard for event approval'
        ],
        impact: 'Streamlined campus event coordination for 1000+ students',
        status: 'Maintenance'
    },
    'cookpal': {
        name: 'CookPal',
        role: 'Fullstack Developer',
        date: '2025-08-01',
        description: 'Integrated voice-assisted cooking companion app enabling users to discover recipes and receive hands-free cooking guidance through voice commands.',
        technologies: ['React Native', 'Node.js', 'Web Speech API', 'MongoDB', 'Express'],
        features: [
            'Voice-controlled recipe navigation',
            'Step-by-step cooking instructions',
            'Recipe search and recommendations',
            'Ingredient list management',
            'Timer integration with voice commands'
        ],
        impact: 'Hands-free cooking experience improving accessibility and convenience',
        status: 'Deployed'
    },
    'intramurals': {
        name: 'Intramurals Manager',
        role: 'Fullstack Developer',
        date: 'In Progress',
        description: 'Building a comprehensive sports event management system for organizing campus intramural competitions, team registrations, and tournament scheduling.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
        features: [
            'Tournament bracket generation',
            'Team registration and management',
            'Live score tracking and updates',
            'Scheduling conflict detection',
            'Player statistics and leaderboards',
            'Real-time match notifications'
        ],
        impact: 'Expected to streamline intramural sports management for 500+ student athletes',
        status: 'In Progress'
    },
    'wardrobe': {
        name: 'Wardrobe App',
        role: 'Fullstack Developer',
        date: 'In Progress',
        description: 'Developing a smart wardrobe management application with outfit planning, clothing inventory tracking, and AI-powered style recommendations.',
        technologies: ['React Native', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS S3'],
        features: [
            'Digital wardrobe inventory with image recognition',
            'Outfit combination suggestions',
            'Weather-based clothing recommendations',
            'Occasion-specific outfit planning',
            'Clothing usage analytics',
            'Virtual closet organization'
        ],
        impact: 'Helping users optimize their wardrobe and reduce decision fatigue',
        status: 'In Progress'
    },
    'hospital-outpatient': {
        name: 'Centralized Hospital Outpatient System',
        role: 'Fullstack Developer',
        date: 'In Progress',
        description: 'Creating a unified patient management platform for streamlining outpatient appointments, medical records, and inter-department coordination across hospital facilities.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        features: [
            'Integrated appointment scheduling system',
            'Electronic medical records management',
            'Inter-department patient referrals',
            'Queue management and wait time tracking',
            'Prescription management system',
            'Patient portal for appointment history'
        ],
        impact: 'Aiming to reduce patient wait times and improve care coordination',
        status: 'In Progress'
    }
};

function showProjectDetails(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const projectContent = document.getElementById('project-content');
    
    // Build the detailed view
    const detailsHTML = `
        <div class="project-details-view">
            <div class="detail-header">
                <h3 style="color: #00ff88; font-size: 14px; margin-bottom: 8px;">${project.name}</h3>
                <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                    <span style="color: #00d4ff; font-size: 12px;">${project.role}</span>
                    <span style="color: #666; font-size: 12px;">${project.date}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <div class="detail-label">Description</div>
                <div class="detail-text">${project.description}</div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Technologies</div>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Key Features</div>
                <ul class="feature-list">
                    ${project.features.map(feature => 
                        `<li>${feature}</li>`
                    ).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <div class="detail-label">Impact</div>
                <div class="impact-box">
                    ${project.impact}
                </div>
            </div>

            <div class="detail-section">
                <div class="detail-label">Status</div>
                <div class="status-badge status-${project.status.toLowerCase()}">
                    ${project.status}
                </div>
            </div>
        </div>
    `;
    
    projectContent.innerHTML = detailsHTML;
    
    // Scroll to project details section
    document.getElementById('project-details').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Simulate real-time updates
let requestCount = 8102;
setInterval(() => {
    requestCount += Math.floor(Math.random() * 5);
    const metricElements = document.querySelectorAll('.metric-value');
    if (metricElements[1]) {
        metricElements[1].textContent = requestCount.toLocaleString();
    }
}, 5000);

// Add typing effect to terminal on load
window.addEventListener('load', () => {
    const terminalContent = document.getElementById('terminal-content');
    terminalContent.style.opacity = '0';
    setTimeout(() => {
        terminalContent.style.transition = 'opacity 0.5s';
        terminalContent.style.opacity = '1';
    }, 100);
});