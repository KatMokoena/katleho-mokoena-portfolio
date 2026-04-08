// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');

function openNav() {
    if (!navMenu || !navOverlay || !navToggle) return;
    navMenu.classList.remove('hidden');
    navOverlay.classList.remove('hidden');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    if (!navMenu || !navOverlay || !navToggle) return;
    navMenu.classList.add('hidden');
    navOverlay.classList.add('hidden');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (navToggle && navMenu && navOverlay) {
    // start closed
    closeNav();

    navToggle.addEventListener('click', () => {
        const isOpen = !navMenu.classList.contains('hidden');
        if (isOpen) closeNav();
        else openNav();
    });

    if (navClose) navClose.addEventListener('click', closeNav);
    navOverlay.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 140;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Close menu if open
            if (navMenu && !navMenu.classList.contains('hidden')) closeNav();
        }
    });
});

// Download Resume functionality - Generate PDF
const downloadResume = document.getElementById('downloadResume');
if (downloadResume) {
    downloadResume.addEventListener('click', function(e) {
        e.preventDefault();
        generatePDFResume();
    });
}

function generatePDFResume() {
    // Create a temporary container for the resume content
    const resumeContainer = document.createElement('div');
    resumeContainer.style.width = '210mm'; // A4 width
    resumeContainer.style.padding = '10mm 15mm';
    resumeContainer.style.backgroundColor = '#ffffff';
    resumeContainer.style.color = '#000000';
    resumeContainer.style.fontFamily = 'Arial, sans-serif';
    resumeContainer.style.fontSize = '11pt';
    resumeContainer.style.lineHeight = '1.5';
    
    // Get all the content we need
    const name = 'Katleho Magnolia Mokoena';
    const title = 'Solutions Engineer - Software Development • Data Analysis • Electronics Engineering';
    const email = 'katleho.magnolia@icloud.com';
    const location = 'Johannesburg, South Africa';
    const phone = '081 538 6428';
    const linkedin = 'https://www.linkedin.com/in/katleho-mokoena-7602121a1';
    
    // Build resume HTML
    let resumeHTML = `
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #000000; padding-bottom: 15px;">
            <h1 style="color: #000000; font-size: 24pt; margin-bottom: 8px; font-weight: bold; margin-top: 0;">${name}</h1>
            <p style="color: #333; font-size: 12pt; margin-bottom: 12px; margin-top: 0;">${title}</p>
            <div style="color: #666; font-size: 9pt; line-height: 1.4;">
                <span>📧 ${email}</span> | 
                <span>📍 ${location}</span> | 
                <span>📱 ${phone}</span> | 
                <span>💼 <a href="${linkedin}" style="color: #000000; text-decoration: none;">LinkedIn</a></span>
            </div>
        </div>
        
        <div style="margin-bottom: 18px;">
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">PROFESSIONAL SUMMARY</h2>
            <p style="text-align: justify; color: #333; margin: 0; font-size: 10pt;">
                Dynamic professional with expertise in software development, electronics engineering, and data analysis. 
                Enthusiastic Software Developer with over three years of experience optimizing PLC operations and designing 
                live dashboards. Proficient in SQL Server, PowerShell scripting, and developing ETL pipelines, resulting 
                in improved operational efficiency. Currently employed at Mitas Corporation, open to exploring new 
                opportunities in Software Development, Data Analysis and Automation, Solution Support, or Electronics Engineering.
            </p>
        </div>
        
        <div style="margin-bottom: 18px;">
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">PROFESSIONAL EXPERIENCE</h2>
    `;
    
    // Add experience entries
    const experiences = [
        {
            title: 'Solutions Engineer - Software, Data & Engineering Solutionist',
            company: 'Mitas Corporation',
            location: 'Randburg, South Africa',
            period: '06/2024 – Present',
            responsibilities: [
                'Optimised PLC operation and programming to enhance automation efficiency',
                'Utilised SQL Server for robust database management and analysis',
                'Conducted comprehensive software testing and development to ensure system integrity',
                'Designed and implemented live dashboards for real-time data visualisation',
                'Engineered ETL/ELT pipelines to streamline data processing workflows',
                'Spearheaded laser operations and programming, facilitating precision in manufacturing tasks',
                'Configured Cognex devices for automated visual inspection processes',
                'Executed database analysis to support data-driven decision-making',
                'Instituted BarTender for efficient label printing solutions',
                'Developed track and trace systems to enhance product tracking capabilities',
                'Applied PowerShell scripting to automate system tasks, improving operational efficiency',
                'Utilised VS Code for software development and debugging',
                'Managed RFID systems to improve inventory accuracy and tracking',
                'Pursued AI technologies to explore advanced data analysis possibilities',
                'Drove web design initiatives to enhance online presence'
            ]
        },
        {
            title: 'Junior Electronics Technician',
            company: 'Mitas Corporation',
            location: 'Northriding Randburg, South Africa',
            period: '09/2023 – 05/2024',
            responsibilities: [
                'Performed rigorous testing on equipment to ensure functionality and compliance',
                'Executed fault finding and maintenance procedures on various electronic devices',
                'Maintained and serviced InkJet printers to prolong operational lifespan',
                'Overhauled Telesis Scribblers and laser systems for improved performance',
                'Conducted software testing and development to ensure system integrity',
                'Performed database analysis to support data-driven decision-making',
                'Designed and implemented live dashboards for real-time data visualisation',
                'Programmed C# logic devices for automation and control systems'
            ]
        },
        {
            title: 'Electrical Maintenance Assistant',
            company: 'Grief SA',
            location: 'Vanderbijlpark, South Africa',
            period: '08/2022 – 08/2023',
            responsibilities: [
                'Conducted maintenance on photoelectric sensors and pneumatic systems to ensure operational reliability',
                'Oversaw installation and commissioning processes, coupled with meticulous paperwork handling',
                'Maintained and repaired electrical and electronics systems, including LS and Siemens Electric PLC-controlled machinery',
                'Designed and built electrical panels to meet project specifications',
                'Conducted software testing and development to ensure system integrity',
                'Performed database analysis to support data-driven decision-making',
                'Designed and implemented live dashboards for real-time data visualisation',
                'Programmed C# logic devices for automation and control systems'
            ]
        },
        {
            title: 'Electrical Maintenance House Calls',
            company: 'Self Employed',
            location: 'Vereeniging, South Africa',
            period: '03/2022 – 07/2022',
            responsibilities: [
                'Domestic House Wiring',
                'Automized Home Systems'
            ]
        },
        {
            title: 'Work Based Learner',
            company: 'Resolution Circle',
            location: 'Johannesburg, South Africa',
            period: '06/2021 – 02/2022',
            responsibilities: [
                'Gained practical experience in electrical systems and troubleshooting',
                'Acquired skills in instrumental and electronic device maintenance',
                'Explored automation technologies to modernise operational processes',
                'Participated in carpentry and boilermaking projects to enhance technical versatility',
                'Conducted software testing and development to ensure system integrity',
                'Performed database analysis to support data-driven decision-making',
                'Designed and implemented live dashboards for real-time data visualisation',
                'Programmed C# logic devices for automation and control systems'
            ]
        }
    ];
    
    experiences.forEach(exp => {
        resumeHTML += `
            <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <h3 style="color: #333; font-size: 11pt; font-weight: bold; margin: 0;">${exp.title}</h3>
                    <span style="color: #666; font-size: 9pt;">${exp.period}</span>
                </div>
                <p style="color: #000000; font-size: 10pt; margin-bottom: 8px; font-weight: 600; margin-top: 0;">${exp.company} | ${exp.location}</p>
                <ul style="margin-left: 18px; color: #333; font-size: 9pt; margin-top: 0; margin-bottom: 0; padding-left: 0;">
        `;
        exp.responsibilities.forEach(resp => {
            resumeHTML += `<li style="margin-bottom: 3px;">${resp}</li>`;
        });
        resumeHTML += `</ul></div>`;
    });
    
    resumeHTML += `</div>`;
    
    // Add Education
    resumeHTML += `
        <div style="margin-bottom: 18px;">
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">EDUCATION</h2>
            <div style="margin-bottom: 12px;">
                <h3 style="color: #333; font-size: 11pt; font-weight: bold; margin-bottom: 4px; margin-top: 0;">Amazon Software Developer</h3>
                <p style="color: #666; font-size: 9pt; margin: 0;">Amazon Web Services (AWS) | Coursera | 11/2025 – 04/2026</p>
                <p style="color: #333; font-size: 9pt; margin-top: 3px; margin-bottom: 0;">Specialization Certificate</p>
            </div>
            <div style="margin-bottom: 12px;">
                <h3 style="color: #333; font-size: 11pt; font-weight: bold; margin-bottom: 4px; margin-top: 0;">Diploma - Electronics Engineering</h3>
                <p style="color: #666; font-size: 9pt; margin: 0;">Vaal University of Technology | Vereeniging, South Africa | 02/2018 – 09/2022</p>
                <p style="color: #333; font-size: 9pt; margin-top: 3px; margin-bottom: 0;">Overall Academic Percentage: 66%</p>
            </div>
            <div>
                <h3 style="color: #333; font-size: 11pt; font-weight: bold; margin-bottom: 4px; margin-top: 0;">Matric</h3>
                <p style="color: #666; font-size: 9pt; margin: 0;">Hoërskool Suiderlig | Vanderbijlpark, South Africa | 02/2013 – 11/2017</p>
                <p style="color: #333; font-size: 9pt; margin-top: 3px; margin-bottom: 0;">Academic Percentage: 65% | RCL (Representative Council of Learners) - Deputy Secretary</p>
            </div>
        </div>
    `;
    
    // Add Skills
    resumeHTML += `
        <div style="margin-bottom: 18px;">
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">TECHNICAL SKILLS</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; color: #333; font-size: 9pt;">
                <div style="margin-bottom: 4px;"><strong>Programming:</strong> Java, Java Programming, C#, Python, JavaScript, HTML, CSS, Full-Stack Web Development, API, OOP, File I/O</div>
                <div style="margin-bottom: 4px;"><strong>SDLC & Testing:</strong> Systems Development, SDLC, Software Development Methodologies, Software Testing, TDD, JUnit, Data Structures</div>
                <div style="margin-bottom: 4px;"><strong>Database:</strong> SQL Server, ETL/ELT, Data Analysis, Database Management, Data Persistence</div>
                <div style="margin-bottom: 4px;"><strong>Cloud:</strong> Amazon Elastic Compute Cloud (EC2), Cloud Deployment</div>
                <div style="margin-bottom: 4px;"><strong>GenAI & UX:</strong> LLM Application, Prompt Engineering, UI Design, Digital Transformation, AI Enablement</div>
                <div style="margin-bottom: 4px;"><strong>Tools:</strong> VS Code, Git, GitHub, npm, BarTender, Microsoft Office</div>
                <div style="margin-bottom: 4px;"><strong>Industrial:</strong> Arduino, Sensors, CAD, Pneumatics, FESTO, RFID Systems, Cognex Devices</div>
                <div style="margin-bottom: 4px;"><strong>Soft Skills:</strong> Problem Solving, Communication, Adaptability, Critical Thinking, Time Management</div>
            </div>
        </div>
    `;
    
    // Add Certificates
    resumeHTML += `
        <div style="margin-bottom: 18px;">
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">CERTIFICATES</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; color: #333; font-size: 9pt;">
                <div style="margin-bottom: 4px;">• Application Development (Amazon Web Services (AWS) • Coursera - 04/2026)</div>
                <div style="margin-bottom: 4px;">• Generative AI in Software Development (Amazon Web Services (AWS) • Coursera - 04/2026)</div>
                <div style="margin-bottom: 4px;">• Full Stack Web Development (Amazon Web Services (AWS) • Coursera - 04/2026)</div>
                <div style="margin-bottom: 4px;">• Data Structures and Algorithms (Amazon Web Services (AWS) • Coursera - 04/2026)</div>
                <div style="margin-bottom: 4px;">• Programming with Java (Amazon Web Services (AWS) • Coursera - 04/2026)</div>
                <div style="margin-bottom: 4px;">• PowerShell Mastery (Udemy)</div>
                <div style="margin-bottom: 4px;">• SQL Server Certificate (Udemy)</div>
                <div style="margin-bottom: 4px;">• Responsive Web Design (CodeCamp - 02/2025)</div>
                <div style="margin-bottom: 4px;">• Data Analysis with Python (CodeCamp - 02/2025)</div>
                <div style="margin-bottom: 4px;">• Front End Development Libraries (CodeCamp - 02/2025)</div>
                <div style="margin-bottom: 4px;">• Foundational C# with Microsoft (CodeCamp - 02/2025)</div>
            </div>
        </div>
    `;
    
    // Add Key Achievements
    resumeHTML += `
        <div>
            <h2 style="color: #000000; font-size: 14pt; margin-bottom: 10px; border-bottom: 1px solid #000000; padding-bottom: 3px; margin-top: 0;">KEY ACHIEVEMENTS</h2>
            <ul style="color: #333; font-size: 9pt; margin-left: 18px; margin-top: 0; padding-left: 0;">
                <li style="margin-bottom: 3px;">Designed and implemented real-time data visualization dashboards that improved decision-making speed by 40%</li>
                <li style="margin-bottom: 3px;">Reduced manual processing time by 60% through PowerShell and C# automation scripts</li>
                <li style="margin-bottom: 3px;">Engineered ETL/ELT pipelines that streamlined data processing workflows, reducing errors by 35%</li>
                <li style="margin-bottom: 3px;">Optimized PLC operations and programming, enhancing automation efficiency across manufacturing processes</li>
                <li style="margin-bottom: 3px;">Identified and solved production issues through comprehensive data analysis and database management</li>
                <li style="margin-bottom: 3px;">Successfully working remotely, demonstrating strong self-management and communication skills</li>
            </ul>
        </div>
    `;
    
    resumeContainer.innerHTML = resumeHTML;
    
    // Temporarily add to document
    document.body.appendChild(resumeContainer);
    
    // Generate PDF
    const opt = {
        margin: [5, 5, 5, 5],
        filename: 'Katleho_Magnolia_Mokoena_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(resumeContainer).save().then(() => {
        // Remove temporary container
        document.body.removeChild(resumeContainer);
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        if (navbar) {
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (navbar) {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
    
    lastScroll = currentScroll;
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills-bars');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Animate statistics on scroll
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                if (!isNaN(numericValue)) {
                    let current = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + (finalValue.includes('+') ? '+' : '');
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe statistics section
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Fade in animation on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply fade-in to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// Active nav link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === '' && href === '#home')) {
            link.classList.add('active');
        }
    });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #11ABB0;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
