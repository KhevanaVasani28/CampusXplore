# Virtual-Campus-Tour

An interactive, immersive 360-degree virtual tour of our college campus, built using panorama photography and modern web technologies.

## Overview

Welcome to the Virtual Campus Tour project! This application provides a comprehensive, immersive experience that allows users to explore our entire college campus from the comfort of their web browser. Using actual 360-degree photographs taken with a specialized camera, users can "walk" through the campus, visit specific departments, and access valuable information at every stop.

### Key Features

* **Immersive 360 Photospheres:** High-quality panoramic images create a seamless, real-world presence.
* **Hierarchical 2-Way Navigation:** Intuitive navigation allows users to move both forward into deeper details (e.g., entering a building) and backward (e.g., returning to the main campus view).
* **Scene-to-Scene Transition:** Smooth transitions and hot-spots make navigation feel fluid and natural.
* **Location Markers:** Every scene features a clear location indicator in the bottom-left corner so you always know where you are.
* **Interactive Information Tags:** Clickable elements within the 360 scenes provide detailed information about buildings, offices, and landmarks.
* **Voice-Speech Integration:** Embedded voice audio provides spoken information for a multi-sensory experience.
* **Mini-2D Map (with Leaflet.js):** A dynamic, real-time mini-map in the bottom-right corner shows your current location relative to the whole campus.
* **Interactive Landing Page Map:** The `index.html` page features a schematic, color-coded 2D map of the entire campus.
    * **Department Tooltips:** Hover over any department on the main map to see its name.
    * **"Start Campus Tour" Button:** Begins the tour from the Admin Office.
    * **Direct Department Access:** Click on a department on the map to jump directly to a dedicated page (`department-*.html`).
* **Dedicated Department Pages:** Each department has a focused page with:
    * Detailed descriptions.
    * A photo gallery.
    * A dedicated 3D tour within that specific department.

---

## Project Structure & Directory

The project follows a standard web development file structure:

`VIRTUAL-CAMPUS-TOUR/`
├── `.dist/`                *(Compiled/distributable assets)*
├── `assets/`               *(Common site assets, fonts, etc.)*
├── `database/`             *(Data files, likely JSON or database connection logic)*
├── `images/`
│   ├── `panorama/`         *(All 360 photosphere image files)*
│   └── `static/`           *(Static images for galleries, UI icons, and the 2D maps)*
├── `admin.html`            *(Start point of the tour - Admin Office scene)*
├── `config.php`            *(Configuration and database connection file)*
├── `department-*.html`      *(Dedicated pages for individual departments, library, etc.)*
│   ├── `department-architecture.html`
│   ├── `department-chemical.html`
│   └── *(...other department pages...)*
├── `dome.html`             *(Specific tour scene file)*
├── `index.html`            *(Interactive 2D Map Landing Page)*
├── `index3.html`           *(Alternative or test landing page)*
├── `qr.html`               *(A page for QR codes to access the tour)*
├── `register.html`         *(Registration or sign-in page, if required)*
├── `script.js`             *(Main JavaScript logic for navigation and scene management)*
├── `script3.js`            *(Secondary JavaScript file)*
├── `style.css`             *(Main site styling and UI layout)*
├── `style3.css`            *(Secondary CSS file)*
└── `tour.html`             *(Generic tour scene container)*

## 🛠️ Technology Stack

* **HTML5 / CSS3 / JavaScript:** The core structure, styling, and interactivity.
* **360 Photo Viewer:** (A specialized JS library for photosphere rendering, e.g., PhotoSphereViewer or A-Frame)
* **Leaflet.js:** Powers the interactive Mini-2D Map for position tracking.
* **PHP:** Used for backend configuration and potentially handling user data.

## Getting Started

To view the virtual tour:

1.  **Direct Browser:** Open the `index.html` file in your preferred web browser. This works for the interactive map. *Note: Due to security restrictions on local file access (`file://`), some 360 viewer functions may not load correctly when opened directly.*
2.  **Web Server (Recommended):** For full functionality (especially for the 360 scenes), serve the project using a local web server (like Live Server extension in VS Code, or a proper Apache/Nginx setup).
    * Install a server (e.g., Live Server).
    * Serve the `VIRTUAL-CAMPUS-TOUR` directory.
    * Navigate to `localhost:[port]/index.html`.

## Contributions

We welcome contributions! If you would like to add new panoramas, update information tags, or improve the interface:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/NewPanorama`).
3.  Commit your changes (`git commit -m 'Add new panorama for the library'`).
4.  Push to the branch (`git push origin feature/NewPanorama`).
5.  Open a Pull Request.
