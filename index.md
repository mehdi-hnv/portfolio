---
layout: default
title: Home
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <li class="nav-item"><a href="index.html" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
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

    <!-- Home Page Hero Section -->
    <main>
        <section class="hero">
            <div class="stars"></div>
            <div class="hero-content">
                <div class="profile-section">
                    <img src="assets/images/profile.jpg" alt="Profile Photo" class="profile-photo">
                    <h1 class="hero-title">Welcome to My Portfolio</h1>
                    <p class="hero-subtitle">Computer Engineering Student & Aspiring Software Developer</p>
                </div>
                <div class="hero-bio">
                    <p class="bio-text">
                        I am a computer engineering student with a strong interest in software development
                        and problem solving. I enjoy building practical, well-structured applications and
                        continuously improving my skills through coursework, personal projects, and
                        independent learning.
                    </p>
                    <p class="bio-text">
                        This website serves as a personal portfolio where I share my projects, document my
                        learning journey, and explore new technologies. My focus is on writing clean,
                        maintainable code and developing solutions that are clear, efficient, and reliable.
                    </p>
                </div>
                <div class="cta-buttons">
                    <a href="projects.html" class="btn btn-primary">Explore My Work</a>
                    <a href="resume.html" class="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
            <div class="floating-objects">
                <div class="orbit"></div>
                <div class="planet planet-1"></div>
                <div class="planet planet-2"></div>
            </div>
        </section>

        <!-- Featured Section -->
        <section class="featured">
            <div class="container">
                <h2 class="section-title">What I Do</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <h3>Full-Stack Development</h3>
                        <p>Experience with both frontend and backend development through coursework
                             and personal projects, focusing on clear structure and maintainable code.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Mobile first, tablet optimized, desktop perfect. Your site works everywhere, no excuses.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3>Performance</h3>
                        <p>Focused on writing efficient, well-structured code and improving performance 
                            through optimization and best practices.</p>
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
