# Aditya Gyan Mandir School (AGMS) — Official Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/5377f074-f252-4fc8-9f26-0e104ae05d76/deploy-status)](https://deft-cassata-d508d2.netlify.app/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Live%20Demo-Netlify-00AD9F?logo=netlify&logoColor=white)](https://deft-cassata-d508d2.netlify.app/)

Official informational website for **Aditya Gyan Mandir School (AGMS)**, Krishna Nagar, Karond, Bhopal, Madhya Pradesh, India. Built with clean, modern semantic HTML5, Tailwind CSS, and vanilla JavaScript.

🌐 **Live Website:** [https://deft-cassata-d508d2.netlify.app/](https://deft-cassata-d508d2.netlify.app/)

---

## Table of Contents
- [Overview](#overview)
- [About AGMS](#about-agms)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Architecture](#project-architecture)
- [Local Setup & Running Instructions](#local-setup--running-instructions)
- [Live Deployment](#live-deployment)
- [Credits & Information](#credits--information)

---

## Overview

The AGMS website serves as the digital front door for prospective families, current students, and the local community. It showcases the school's heritage, academic philosophy, leadership guidance, campus facilities, and direct admissions contact points with zero layout shifts and instant performance.

---

## About AGMS

- **Institution:** Aditya Gyan Mandir School (AGMS)
- **Affiliation & Location:** Krishna Nagar, Karond, Bhopal, Madhya Pradesh, India
- **Established:** 1997 (Over 25 years of educational service)
- **Governance:** Run by the Samiti (Non-profit community-driven leadership)
- **Tagline / Motto:** *A Tradition of Excellence, A Future of Possibilities*
- **Leadership:**
  - **Chairman:** Dr. Mohan Sharma
  - **Director:** Yash Sharma
- **Academic Environment:** Co-educational, child-centric, experiential learning with comprehensive library (2,000+ volumes), dedicated science laboratories (Biology & Chemistry), digital computer laboratory, activity room, seminar hall, and secure transport fleet.

---

## Key Features

1. **Responsive Header & Mobile Drawer:** Sticky navigation bar with school branding, fast anchor links, and a touch-friendly slide-down drawer with keyboard (Esc) accessibility.
2. **Hero Section:** Clean classroom imagery with smooth horizontal gradient overlay, dual-font headline styling, quick statistics strip (`~250 Students`, `Est. 1997`, `Every Child`), and primary action buttons.
3. **About Us & Institutional Heritage:** Deep navy community section featuring authentic narrative copy and quick institutional statistics.
4. **School Vision, Mission & Goals:** Verbatim authoritative guiding principles sourced from the school's official brochure.
5. **Leadership Guidance:** Distinct leadership cards featuring authentic photographs and official messages from Chairman Dr. Mohan Sharma and Director Yash Sharma.
6. **Academics & Educational Philosophy:** 6-pillar child-centric learning model and 5 educational philosophy guidelines.
7. **Why Choose AGMS & Facilities Showcase:** 8 key school strengths and high-resolution illustrative cards showcasing the Library, Science Lab, Computer Lab, Activity Room, Seminar Hall, Transport, Classrooms, and CCTV Surveillance.
8. **Contact Us & Map Integration:** Clickable phone numbers (`tel:`), direct email link (`mailto:`), official Instagram link (`@agms.school`), office hours, and an interactive embedded Google Map.
9. **Universal Accessibility & Performance:** Zero Cumulative Layout Shift (CLS = 0.000), eager loading for critical above-the-fold assets, lazy loading for below-the-fold images, and complete exclusion of non-existent sections.

---

## Technologies Used

- **HTML5:** Semantic, accessible markup with Open Graph and Twitter Card metadata.
- **Tailwind CSS:** Modern utility-first styling with custom brand colors (Deep Maroon `#7D0A14` and Warm Gold `#E5A823`).
- **JavaScript (ES6+):** Pure vanilla JavaScript for interactive drawer, scroll behaviors, and responsive navigation.
- **Google Fonts:** Plus Jakarta Sans (Primary geometric sans-serif) & Playfair Display (Editorial accent serif).
- **Google Maps Embed:** Accessible interactive campus location embed with direct directions link.

---

## Project Architecture

```
agms school/
├── index.html                               # Semantic pre-rendered HTML5 entry point
├── package.json                             # Project metadata and run scripts
├── README.md                                # Comprehensive documentation
├── .gitignore                               # Production gitignore configuration
└── src/
    ├── assets/
    │   └── images/
    │       ├── agms-logo.png                # Official circular seal logo (576x576)
    │       ├── hero-bg.png                  # Classroom hero photograph (1024x513)
    │       ├── chairman-dr-mohan-sharma.jpg # Authentic portrait of Chairman Dr. Mohan Sharma
    │       ├── director-krishna-sharma.jpg  # Authentic portrait of Director Yash Sharma
    │       ├── facility_library.jpg         # Library facility photo (2,000+ books)
    │       ├── facility_sciencelab.jpg      # Biology & Chemistry science lab photo
    │       ├── facility_computerlab.jpg     # Computer laboratory workstations photo
    │       ├── facility_activityroom.jpg    # Early development activity room photo
    │       ├── facility_seminarhall.jpg     # Seminar hall and assembly space photo
    │       ├── facility_transport.jpg       # School transport bus photo
    │       ├── facility_classrooms.jpg      # Well-furnished classrooms photo
    │       └── facility_cctv.jpg            # CCTV surveillance security photo
    ├── components/                          # Modular ES6 component templates
    │   ├── Header.js
    │   ├── MobileDrawer.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Leadership.js
    │   ├── Academics.js
    │   ├── Facilities.js
    │   ├── Contact.js
    │   └── Footer.js
    ├── data/                                # Centralized data sources
    │   ├── schoolData.js
    │   ├── aboutData.js
    │   ├── leadershipData.js
    │   ├── academicsData.js
    │   └── navigation.js
    ├── scripts/
    │   └── main.js                          # Client-side initialization & event handling
    └── styles/
        └── main.css                         # Brand theme styles & font definitions
```

---

## Local Setup & Running Instructions

### Prerequisites
- Modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari)
- Optional: Python 3.x OR Node.js (for running local development server)

### Running Locally

#### Method 1: Direct Browser Open (No server needed)
Double-click `index.html` or open it directly in any modern browser.

#### Method 2: Python HTTP Server (Recommended)
```bash
python -m http.server 3000
```
Open your browser at `http://localhost:3000`.

#### Method 3: Node.js (Serve)
```bash
npx serve -l 3000 .
```

---

## Live Deployment

The website is deployed as a high-performance static website on **Netlify**:
- **Production URL:** [https://deft-cassata-d508d2.netlify.app/](https://deft-cassata-d508d2.netlify.app/)
- **Hosting Type:** Global Edge CDN
- **SSL / HTTPS:** Automated Let's Encrypt SSL
- **Build Step:** Static / Zero build required

---

## Credits & Information

- **School:** Aditya Gyan Mandir School (AGMS), Karond, Bhopal
- **Address:** Krishna Nagar, Karond, Bhopal, Madhya Pradesh, India
- **Phones:** +91 91315 95644 | +91 86024 04295 | 0755-4576752
- **Email:** aadityagyan321@gmail.com
- **Instagram:** [@agms.school](https://www.instagram.com/agms.school)
- **Copyright:** © 2026 Aditya Gyan Mandir School. All Rights Reserved.
