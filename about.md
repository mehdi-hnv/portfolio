---
layout: default
title: About
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-satellite"></i> My Portfolio
            </div>
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link active">About</a></li>
                <li class="nav-item"><a href="projects.html" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="resume.html" class="nav-link">Resume</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <!-- About Page Content -->
    <main>
        <section class="page-header">
            <h1>About Me</h1>
            <p class="subtitle">Background, Skills, and Academic Journey</p>
        </section>
        <section class="about-section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2>Who Am I?</h2>
                        <p>
                            I am a computer engineering student with a strong interest in software development,
                            problem solving, and building practical applications. I started learning programming
                            out of curiosity and gradually developed a passion for writing clean, well-structured
                            code that is easy to understand and maintain.
                        </p>
                        <p>
                            My primary experience is with Python, where I have worked on algorithms, small
                            applications, and academic projects. Through self-study, coursework, and online
                            programs, I have strengthened my understanding of backend fundamentals, basic APIs,
                            and algorithmic thinking. I value clarity and simplicity in code over unnecessary
                            complexity.
                        </p>
                        <p>
                            This website is a place where I document my learning journey, showcase my projects,
                            and track my growth as a developer while continuing my education.
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="assets/images/about-photo.jpg" alt="About Photo" class="about-photo">
                    </div>
                </div>
            </div>
        </section>
        <section class="skills-section">
            <div class="container">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend</h3>
                        <ul>
                            <li><span class="skill-badge">HTML</span></li>
                            <li><span class="skill-badge">CSS</span></li>
                            <li><span class="skill-badge">Responsive Design</span></li>
                            <li><span class="skill-badge">CSS Fundamentals</span></li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Backend</h3>
                        <ul>
                            <li><span class="skill-badge">Python</span></li>
                            <li><span class="skill-badge">Flask (Basic)</span></li>
                            <li><span class="skill-badge">REST APIs (Basic)</span></li>
                            <li><span class="skill-badge">Database Fundamentals</span></li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Tools & More</h3>
                        <ul>
                            <li><span class="skill-badge">Git</span></li>
                            <li><span class="skill-badge">VS code</span></li>
                            <li><span class="skill-badge">Linux Basics</span></li>
                            <li><span class="skill-badge">API integration</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="experience-section">
            <div class="container">
                <h2 class="section-title">Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Learning Python & Basic Algorithms</h3>
                            <p class="timeline-date">2021 – 2023</p>
                            <p class="timeline-description">
                                Began learning Python through self-study and school-related practice.
                                Focused on basic algorithms, problem-solving techniques, and writing
                                clean, readable code.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Python Fundamentals & Chess Knight Project</h3>
                            <p class="timeline-date">2024 – 2025</p>
                            <p class="timeline-description">
                                Completed the Python Fundamentals course at ITSTEP with top results.
                                Built a chess knight algorithm project, gaining experience in structured
                                programming, debugging, and algorithm design.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>AI Applications with Python & Flask</h3>
                            <p class="timeline-date">2025</p>
                            <p class="timeline-description">
                                Completed an online course authorized by IBM on developing AI applications
                                with Python and Flask. Learned basic AI concepts, model integration,
                                and backend application development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="education-section">
            <div class="container">
                <h2 class="section-title">Education & Certifications</h2>
                <div class="education-grid">
                    <div class="education-card">
                        <h3>Bachelor of Science in Computer Engineerin</h3>
                        <p class="education-school">ADA University | Baku, Azerbaijan</p>
                        <p class="education-year">2025 – 2029</p>
                        <p class="education-detail">GPA: ???/4.0. Relevant coursework includes Data & Computing Skills and
                            Principles of Information Systems.</p>
                    </div>
                    <div class="education-card">
                        <h3>Python Fundamentals</h3>
                        <p class="education-school">ITSTEP | Baku, Azerbaijan</p>
                        <p class="education-year">2024 – 2025</p>
                        <p class="education-detail">Successfully completed a Python fundamentals program with practical
                            project work and algorithm-focused assignments.</p>
                    </div>
                    <div class="education-card">
                        <h3>Online Certifications</h3>
                        <p class="education-school">Coursera (IBM), Codecademy</p>
                        <p class="education-year">2025</p>
                        <p class="education-detail">Completed courses in AI applications with Python and Flask, as well as
                            C++ fundamentals through structured online learning.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Connect</h4>
                <div class="social-links">
                    <a href="https://github.com/mehdi-hnv" target="_blank" title="Github">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.codecademy.com/profiles/mehdi.hnv" target="_blank" title="Codecademy">
                        <i class="fas fa-code"></i>
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Repository</h4>
                <p>
                    <a href="https://github.com/mehdi-hnv/portfolio" target="_blank" class="repo-link">
                        <i class="fab fa-github"></i> View Source
                    </a>
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Mehdi Hasanov. Built with the help of AI and attitude.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
