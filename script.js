/* ======== Basic Setup & Google Font ======== */
:root {
    /* Light Mode Variables */
    --bg-color-light: #f4f7f9;
    --text-color-light: #333;
    --card-bg-light: #ffffff;
    --header-bg-light: rgba(255, 255, 255, 0.7); /* Slightly more transparent */
    --nav-hover-bg-light: #e9ecef;
    --primary-accent-light: #00a6ff;
    --gradient-start-light: #e0c3fc;
    --gradient-end-light: #8ec5fc;

    /* Dark Mode Variables */
    --bg-color-dark: #121212;
    --text-color-dark: #e0e0e0;
    --card-bg-dark: #1e1e1e;
    --header-bg-dark: rgba(20, 20, 20, 0.7); /* Slightly more transparent */
    --nav-hover-bg-dark: #4a83a8;
    --primary-accent-dark: #64ffda;
    --gradient-start-dark: #232526;
    --gradient-end-dark: #414345;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
    overflow-x: hidden; /* Prevent horizontal scroll from shapes */
    
    /* Animated Gradient Background */
    background: linear-gradient(45deg, var(--gradient-start-light), var(--gradient-end-light));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    color: var(--text-color-light);
}

body.dark-mode {
    background: linear-gradient(45deg, var(--gradient-start-dark), var(--gradient-end-dark));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    color: var(--text-color-dark);
}

/* Keyframes for Gradient Animation */
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* ======== NEW: Floating Shapes Background Animation ======== */
.background-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place it behind all content */
}

.background-shapes div {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animateShapes 25s linear infinite;
    bottom: -150px; /* Start from below the screen */
}
/* Individual shape styles for variety */
.background-shapes div:nth-child(1){ left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
.background-shapes div:nth-child(2){ left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
.background-shapes div:nth-child(3){ left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
.background-shapes div:nth-child(4){ left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
.background-shapes div:nth-child(5){ left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
.background-shapes div:nth-child(6){ left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
.background-shapes div:nth-child(7){ left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
.background-shapes div:nth-child(8){ left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }

@keyframes animateShapes {
    0%{ transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; }
    100%{ transform: translateY(-1000px) rotate(720deg); opacity: 0; border-radius: 50%; }
}


/* ======== IMPROVED: Header & Navigation ======== */
header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease;
}

header.scrolled {
    padding: 0.75rem 5%;
    background-color: var(--header-bg-light);
    backdrop-filter: blur(15px); /* Enhanced glassmorphism effect */
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

body.dark-mode header.scrolled {
    background-color: var(--header-bg-dark);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

nav a {
    color: inherit;
    text-decoration: none;
    margin: 0 5px; /* Reduced margin to fit the pill shape better */
    padding: 8px 15px; /* Added padding for a larger clickable area */
    font-weight: 600;
    position: relative;
    z-index: 1; /* Ensure text is above the pseudo-element */
    transition: color 0.3s;
}

/* NEW Pill hover effect */
nav a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--nav-hover-bg-light);
    border-radius: 20px; /* Rounded pill shape */
    transform: scaleX(0); /* Start scaled to 0 width */
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
}

body.dark-mode nav a::before {
    background-color: var(--nav-hover-bg-dark);
}

nav a:hover::before,
nav a.active::before {
    transform: scaleX(1); /* Scale to full width on hover/active */
}


/* ======== Theme Toggle Button ======== */
#theme-toggle {
    position: absolute;
    right: 5%;
    background: none;
    border: none;
    color: inherit;
    font-size: 1.5rem;
    cursor: pointer;
}

#theme-toggle .fa-sun { display: none; }
body.dark-mode #theme-toggle .fa-sun { display: block; }
body.dark-mode #theme-toggle .fa-moon { display: none; }


/* ======== General Section Styling ======== */
section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 5%;
    text-align: center;
    position: relative; /* Ensure sections are above the background shapes */
    z-index: 1;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
}

/* --- The rest of the CSS remains the same --- */
/* (Home, About, Skills, Projects, Contact, and Responsive sections) */
/* --- You can copy the rest of the styles from the previous response below this line --- */

/* ======== Home Section & Typing Animation ======== */
#home {
    text-align: center;
}
.home-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
.typing-animation {
    font-size: 1.5rem;
    font-weight: 300;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.15em solid var(--primary-accent-light);
    animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

body.dark-mode .typing-animation {
    border-right-color: var(--primary-accent-dark);
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: inherit; }
}


/* ======== About Me Section ======== */
.about-container {
    max-width: 800px;
    display: flex;
    align-items: center;
    gap: 2rem;
}
.profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--card-bg-light);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
body.dark-mode .profile-pic {
    border-color: var(--card-bg-dark);
}
.about-container p {
    text-align: left;
    font-size: 1.1rem;
}


/* ======== Skills & Tools Section ======== */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    max-width: 800px;
    width: 100%;
}
.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: var(--card-bg-light);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}
body.dark-mode .skill-item {
    background: var(--card-bg-dark);
}
.skill-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}
.skill-item i {
    font-size: 3rem;
    color: var(--primary-accent-light);
}
body.dark-mode .skill-item i {
    color: var(--primary-accent-dark);
}


/* ======== Projects Section ======== */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
}
.project-card {
    background: var(--card-bg-light);
    border-radius: 10px;
    overflow: hidden;
    text-align: left;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}
body.dark-mode .project-card {
    background: var(--card-bg-dark);
}
.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.project-card h3 {
    margin: 1rem 1.5rem 0.5rem;
}
.project-card p {
    margin: 0 1.5rem 1rem;
}
.project-links {
    margin: 0 1.5rem 1.5rem;
}
.project-links a {
    text-decoration: none;
    color: var(--primary-accent-light);
    margin-right: 1rem;
    font-weight: 600;
}
body.dark-mode .project-links a {
    color: var(--primary-accent-dark);
}


/* ======== Contact Section ======== */
#contact p {
    max-width: 600px;
    margin-bottom: 2rem;
}
.contact-button {
    display: inline-block;
    padding: 12px 25px;
    border: 2px solid var(--primary-accent-light);
    color: var(--primary-accent-light);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 1rem;
}
.contact-button:hover {
    background-color: var(--primary-accent-light);
    color: var(--bg-color-light);
}
body.dark-mode .contact-button {
    border-color: var(--primary-accent-dark);
    color: var(--primary-accent-dark);
}
body.dark-mode .contact-button:hover {
    background-color: var(--primary-accent-dark);
    color: var(--bg-color-dark);
}
.social-links {
    margin-top: 2rem;
}
.social-links a {
    font-size: 2rem;
    margin: 0 1rem;
    color: inherit;
    transition: color 0.3s;
}
.social-links a:hover {
    color: var(--primary-accent-light);
}
body.dark-mode .social-links a:hover {
    color: var(--primary-accent-dark);
}


/* ======== Responsive Design for Tablets and Mobiles ======== */
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    .typing-animation { font-size: 1.2rem; }

    nav { 
        display: none; 
    }
    
    .about-container { 
        flex-direction: column; 
    }
    
    .about-container p {
        text-align: center;
    }

    .profile-pic { 
        width: 150px; 
        height: 150px; 
    }
}
