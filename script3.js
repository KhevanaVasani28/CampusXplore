/**
 * Virtual Campus Tour - Final Integrated Deployment
 * Features: Navigation Arrows, Flashcards, Voiceover, Side Panel, 2D Map, and Dept Interiors.
 */

(function() {
    // ===== SCENE DEFINITIONS =====
    const scenes = {
        // --- EXTERIOR CAMPUS SCENES ---
        "admin": {
            title: "Administrative Office (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/Admin.jpg",
            mapPos: { t: 64.4, l: 22.7 },
            hotSpots: [
                { pitch: -3.2687, yaw: 10.7184, type: "scene", text: "Exit to Main Campus", sceneId: "backroad_admin", cssClass: "scene-hotspot" },
                { pitch: -4.4188, yaw: -74.2116, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "NJ Hall Path", desc: "A shortcut path leading toward the NJ Hall complex." } },
                { pitch: 28.9244, yaw: 6.1454, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "NJ Seminar Hall", desc: "The college's primary venue for seminars, workshops, and guest lectures." } },
                { pitch: -2.5966, yaw: 74.7180, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Admin Front Desk", desc: "The central hub for student inquiries and administrative services." } }
            ]
        },
        "admin_gate": {
            title: "Main Administrative Entrance",
            type: "equirectangular",
            panorama: "images/panorama/Admin_gate.jpg",
            mapPos: { t: 64.6, l: 14.0 },
            hotSpots: [
                { pitch: 0.0728, yaw: 11.6601, type: "scene", text: "Route to Canteen", sceneId: "canteen_entry", cssClass: "scene-hotspot" },
                { pitch: 1.3995, yaw: -34.0651, type: "scene", text: "To Admin Office", sceneId: "admin", cssClass: "scene-hotspot" }
            ]
        },
        "amphitheatre": {
            title: "Campus Amphitheatre",
            type: "equirectangular",
            panorama: "images/panorama/Amphitheatre.jpg",
            mapPos: { t: 59.1, l: 44.7 },
            hotSpots: [
                { pitch: 0, yaw: 0, type: "scene", text: "Go to Dome", sceneId: "dome", cssClass: "scene-hotspot" }
            ]
        },
        "ash_entry": {
            title: "Applied Science & Humanities Entrance",
            type: "equirectangular",
            panorama: "images/panorama/Ash_entry.jpg",
            mapPos: { t: 9.0, l: 73.2 }, 
            hotSpots: [
                { pitch: 36.0726, yaw: -72.5793, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "ASH Department", desc: "Entry to the Department of Applied Science and Humanities, primarily for first-year students." } }
            ]
        },
        "backroad_admin": {
            title: "Admin Campus Perimeter",
            type: "equirectangular",
            panorama: "images/panorama/Backroad_admin.jpg",
            mapPos: { t: 55.9, l: 30.0 },
            hotSpots: [
                { pitch: -0.9992, yaw: -94.7210, type: "scene", text: "Hallway 1 (CO Tri 1)", sceneId: "co_tri_1", cssClass: "scene-hotspot" },
                { pitch: -7.7717, yaw: -50.4425, type: "scene", text: "Archi + Dome", sceneId: "dome_archi", cssClass: "scene-hotspot" }
            ]
        },
        "canteen_backyard": {
            title: "Canteen Recreation Area",
            type: "equirectangular",
            panorama: "images/panorama/Canteen_Backyard.jpg",
            mapPos: { t: 72.0, l: 44.8 },
            hotSpots: [
                { pitch: -2.4221, yaw: 60.2131, type: "scene", text: "Dome", sceneId: "dome", cssClass: "scene-hotspot" }
            ]
        },
        "canteen_entry": {
            title: "SCET Canteen Entrance",
            type: "equirectangular",
            panorama: "images/panorama/Canteen_Entry.jpg",
            mapPos: { t: 65.9, l: 45.3 },
            hotSpots: [
                { pitch: -3.3575, yaw: -28.3037, type: "scene", text: "Backyard", sceneId: "canteen_backyard", cssClass: "scene-hotspot" },
                { pitch: -0.5400, yaw: -16.4901, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Dining Hall", desc: "Spacious cafeteria serving various cuisines for students and staff." } }
            ]
        },
        "canteen_gate1": {
            title: "Canteen Gate 1",
            type: "equirectangular",
            panorama: "images/panorama/Canteen+gate1.jpg",
            mapPos: { t: 65.0, l: 40.0 },
            hotSpots: [
                { pitch: -0.5025, yaw: -17.0818, type: "scene", text: "Admin Gate", sceneId: "admin_gate", cssClass: "scene-hotspot" }
            ]
        },
        "co_ec_road": {
            title: "Computer & Electronics Corridor",
            type: "equirectangular",
            panorama: "images/panorama/Co_+_ec_road.jpg",
            mapPos: { t: 25.0, l: 30.0 },
            hotSpots: [
                { pitch: -11.0606, yaw: 106.6761, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Central Library", desc: "A vast collection of academic journals, books, and digital resources." } },
                { pitch: 5.6434, yaw: -32.9413, type: "scene", text: "Enter CO Dept", sceneId: "co_inside", cssClass: "scene-hotspot" }
            ]
        },
        "co_tri_1": {
            title: "Computer Triangle Plaza (South)",
            type: "equirectangular",
            panorama: "images/panorama/Co_tri_1.jpg",
            mapPos: { t: 23.2, l: 27.1 },
            hotSpots: [
                { pitch: -3.5899, yaw: -47.1926, type: "scene", text: "Towards CO Tri 2", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.9298, yaw: 29.0743, type: "scene", text: "Hallway 2", sceneId: "hallway2", cssClass: "scene-hotspot" }
            ]
        },
        "co_tri_2": {
            title: "Computer Triangle Plaza (North)",
            type: "equirectangular",
            panorama: "images/panorama/Co_tri_2.jpg",
            mapPos: { t: 17.6, l: 23.3 },
            hotSpots: [
                { pitch: -9.9606, yaw: 1.5270, type: "scene", text: "Parking Gate 5", sceneId: "parking_gate_5", cssClass: "scene-hotspot" },
                { pitch: -6.8818, yaw: 149.7218, type: "scene", text: "Ladder to CO Dept", sceneId: "co_inside", cssClass: "scene-hotspot" },
                { pitch: 2.6412, yaw: -162.3097, type: "scene", text: "Civil Engineering Dept", sceneId: "civil_inside", cssClass: "scene-hotspot" },
                { pitch: 8.7747, yaw: 74.1306, type: "scene", text: "Electrical Dept", sceneId: "electrical_inside", cssClass: "scene-hotspot" },
                { pitch: -14.417197439463202, yaw: 116.8245773968799, type: "scene", text: "Hallway 2", sceneId: "hallway2", cssClass: "scene-hotspot" },
                { pitch: 1.2643, yaw: -146.8331, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Student Amenities", desc: "Xerox, printing, and stationery services available here." } }
            ]
        },
        "dome": {
            title: "The Iconic Dome",
            type: "equirectangular",
            panorama: "images/panorama/Dome.jpg",
            mapPos: { t: 49.2, l: 45.2 },
            hotSpots: [
                { pitch: -1.2632, yaw: -143.9302, type: "scene", text: "Towards CO Tri 1", sceneId: "co_tri_1", cssClass: "scene-hotspot" },
                { pitch: -1.2147, yaw: -34.1426, type: "scene", text: "Towards IT Tri 1", sceneId: "it_tri_1", cssClass: "scene-hotspot" },
                { pitch: -0.4175, yaw: 82.4577, type: "scene", text: "Amphitheatre", sceneId: "amphitheatre", cssClass: "scene-hotspot" }
            ]
        },
        "dome_archi": {
            title: "Architecture Block & Dome View",
            type: "equirectangular",
            panorama: "images/panorama/Dome+archi.jpg",
            mapPos: { t: 56.3, l: 33.6 },
            hotSpots: [
                { pitch: 1.0490, yaw: 56.0080, type: "scene", text: "Dome", sceneId: "dome", cssClass: "scene-hotspot" },
                { pitch: 3.7137, yaw: -120.4849, type: "scene", text: "Architecture Dept", sceneId: "civil_inside", cssClass: "scene-hotspot" }
            ]
        },
        "gate_1": {
            title: "Gate 1 - Main Perimeter",
            type: "equirectangular",
            panorama: "images/panorama/Gate_1_.jpg",
            mapPos: { t: 9.0, l: 73.2 },
            hotSpots: [
                { pitch: 1.2218, yaw: -39.3355, type: "scene", text: "Towards IT Tri 1", sceneId: "it_tri_1", cssClass: "scene-hotspot" },
                { pitch: -1.8872, yaw: -121.6766, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "ASH Entry Point", desc: "Northern entrance providing quick access to the ASH Building." } }
            ]
        },
        "hallway2": {
            title: "Central Connection Hallway",
            type: "equirectangular",
            panorama: "images/panorama/Hallway2.jpg",
            mapPos: { t: 27.6, l: 46.4 },
            hotSpots: [
                { pitch: -11.2150, yaw: -22.1460, type: "scene", text: "Towards IT Triangle", sceneId: "it_tri_1", cssClass: "scene-hotspot" },
                { pitch: -5.1251, yaw: -169.9293, type: "scene", text: "CO Tri 1", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -20.1376, yaw: 51.6421, type: "scene", text: "Towards Dome", sceneId: "dome", cssClass: "scene-hotspot" }
            ]
        },
        "it_tri_1": {
            title: "Information Technology Triangle 1",
            type: "equirectangular",
            panorama: "images/panorama/It_tri1.jpg",
            mapPos: { t: 18.6, l: 68.1 },
            hotSpots: [
                { pitch: -147.4198, yaw: 3.5515, type: "scene", text: "Towards IT Triangle 2", sceneId: "it_tri_2", cssClass: "scene-hotspot" },
                { pitch: 3.5515, yaw: -147.4198, type: "scene", text: "Towards Hallway 3", sceneId: "hallway2", cssClass: "scene-hotspot" }
            ]
        },
        "it_tri_2": {
            title: "Information Technology Triangle 2",
            type: "equirectangular",
            panorama: "images/panorama/It_tri2.jpg",
            mapPos: { t: 24.1, l: 64.0 },
            hotSpots: [
                { pitch: 0.7251, yaw: 72.2246, type: "scene", text: "Parking", sceneId: "main_parking", cssClass: "scene-hotspot" },
                { pitch: -0.4858, yaw: -30.3955, type: "scene", text: "Ladder to IT Dept", sceneId: "it_1", cssClass: "scene-hotspot" },
                { pitch: -0.4256, yaw: 13.6902, type: "scene", text: "Enter IC Dept", sceneId: "ic_inside", cssClass: "scene-hotspot" },
                { pitch: 8.6345, yaw: -110.5841, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Chemical Engineering", desc: "The dedicated facility for Chemical Engineering labs and research." } }
            ]
        },
        "main_parking": {
            title: "Student & Faculty Parking Area",
            type: "equirectangular",
            panorama: "images/panorama/Main_parking.jpg",
            mapPos: { t: 42.0, l: 80.4 },
            hotSpots: [
                { pitch: 0.7634, yaw: 41.5878, type: "scene", text: "Gate 1", sceneId: "gate_1", cssClass: "scene-hotspot" },
                { pitch: -0.9619, yaw: 137.0694, type: "scene", text: "IT Triangle 2", sceneId: "it_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.2040, yaw: 147.0522, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Academic Block View", desc: "A clear perspective of the IT and Mechanical Engineering buildings." } }
            ]
        },
        "parking_gate_5": {
            title: "Gate 5 Entrance",
            type: "equirectangular",
            panorama: "images/panorama/Parking-Gate_5.jpg",
            mapPos: { t: 10.0, l: 20.0 }, 
            hotSpots: [
                { pitch: -0.4151, yaw: -124.0584, type: "scene", text: "Back to CO Tri 2", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.7713, yaw: -18.5389, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Gate 5", desc: "The secondary exit and parking entrance of the campus." } }
            ]
        },

        // --- INTERIOR DEPARTMENT TOURS ---
        "co_inside": {
            title: "Computer Engineering Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/Co_inside.jpg",
            mapPos: { t: 30.7, l: 24.8 },
            hotSpots: [
                { pitch: -4.6332, yaw: -73.6161, type: "scene", text: "Exit to CO Triangle", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.1862, yaw: -7.2831, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "High-Performance Labs", desc: "Equipped with state-of-the-art computing systems for Phase 1 to 3 labs." } },
                { pitch: 2.4388, yaw: 90.1847, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Faculty Workspace", desc: "The main department staffroom for professors and researchers." } },
                { pitch: 4.2647, yaw: -178.3800, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Artificial Intelligence Lab", desc: "A specialized research facility dedicated to AI and Machine Learning." } }
            ]
        },
        "civil_inside": {
            title: "Civil Engineering Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/Civil_inside.jpg",
            mapPos: { t: 56.3, l: 33.6 },
            hotSpots: [
                { pitch: -3.6571, yaw: 150.7602, type: "scene", text: "Exit to Campus", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -5.3018, yaw: -37.4426, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Lecture Hall", desc: "Equipped with modern audiovisual tools for theoretical instruction." } },
                { pitch: -2.1566, yaw: -60.5529, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Surveying Lab", desc: "Laboratory for land measurement and structural engineering practicals." } },
                { pitch: 4.8846, yaw: 177.1917, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Main Department Hall", desc: "The central interior corridor of the Civil Engineering wing." } }
            ]
        },
        "ec_inside": {
            title: "EC Engineering Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/EC_inside.jpg",
            mapPos: { t: 20.0, l: 45.8 },
            hotSpots: [
                { pitch: -2.2728, yaw: -168.6932, type: "scene", text: "Exit to Electrical Dept", sceneId: "electrical_inside", cssClass: "scene-hotspot" },
                { pitch: 8.6934, yaw: -27.9953, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Classroom F-02", desc: "Electronics Batch Classroom for senior undergraduate students." } },
                { pitch: 6.7660, yaw: -99.7432, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Room F-03", desc: "Advanced Electronics Design and Microprocessor Laboratory." } }
            ]
        },
        "electrical_inside": {
            title: "Electrical Engineering Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/Electrical_inside.jpg",
            mapPos: { t: 20.8, l: 33.8 },
            hotSpots: [
                { pitch: -2.7333, yaw: 26.2168, type: "scene", text: "Exit to Campus", sceneId: "co_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.3769, yaw: -142.2502, type: "scene", text: "Towards EC Dept", sceneId: "ec_inside", cssClass: "scene-hotspot" },
                { pitch: 1.3827, yaw: 15.9041, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Power Electronics Lab", desc: "Laboratory dedicated to high-voltage testing and power systems." } },
                { pitch: 0.8801, yaw: 21.0091, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Circuits Lab", desc: "Laboratory for basic electrical circuit analysis and design." } }
            ]
        },
        "ic_inside": {
            title: "IC Engineering Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/IC_inside.jpg",
            mapPos: { t: 20.5, l: 58.1 },
            hotSpots: [
                { pitch: -0.4860, yaw: 128.9744, type: "scene", text: "Exit to IT Triangle", sceneId: "it_tri_2", cssClass: "scene-hotspot" },
                { pitch: -0.6889, yaw: -26.2113, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Control Systems Lab", desc: "Facility for studying automated control loops and process dynamics." } },
                { pitch: -18.1492, yaw: 41.7518, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Process Control Lab", desc: "Research space for industrial instrumentation and sensor networks." } }
            ]
        },
        "it_1": {
            title: "Information Technology Dept (Interior)",
            type: "equirectangular",
            panorama: "images/panorama/IT-1.jpg",
            mapPos: { t: 20.9, l: 65.3 },
            hotSpots: [
                { pitch: -5.0366, yaw: 130.4273, type: "scene", text: "Exit to IT Triangle", sceneId: "it_tri_2", cssClass: "scene-hotspot" },
                { pitch: -4.1916, yaw: -85.2646, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Software Labs", desc: "Equipped for cloud computing, networking, and software engineering." } },
                { pitch: -0.0698, yaw: 145.2786, cssClass: "info-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { title: "Hallway Access", desc: "Direct route leading to the first floor of Hallway 2." } }
            ]
        }
    };

    let viewer;

    function createMenu() {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'tour-menu';
        menuContainer.style.cssText = `position: absolute; top: 10px; left: 10px; z-index: 1000; background: rgba(0,0,0,0.85); padding: 12px; border-radius: 8px; color: white; font-family: 'Segoe UI', sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.4);`;
        const label = document.createElement('div');
        label.innerText = "📍 Jump to Location";
        label.style.fontWeight = "bold";
        label.style.marginBottom = "8px";
        label.style.fontSize = "14px";
        menuContainer.appendChild(label);
        const select = document.createElement('select');
        select.style.cssText = "width: 100%; padding: 6px; border-radius: 4px; border: none; outline: none; background: #fff; color: #333;";
        for (const key in scenes) {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = scenes[key].title;
            select.appendChild(option);
        }
        select.addEventListener('change', (e) => { viewer.loadScene(e.target.value); });
        menuContainer.appendChild(select);
        document.getElementById('panorama-container').appendChild(menuContainer);
    }

    function updateSidePanel(title, description) {
        // Handle Speech API
        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(`${title}. ${description}`);
        speech.rate = 1.0;
        speech.pitch = 1.0;
        window.speechSynthesis.speak(speech);

        // Update Optional Side Panel UI if it exists
        const infoContent = document.getElementById("infoContent");
        if(infoContent) {
            infoContent.innerHTML = `<div style="animation: fadeIn 0.5s;"><h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">${title}</h2><p style="font-size: 1.1em; color: #555;">${description}</p></div>`;
        }
    }

    function hotspotTooltip(hotSpotDiv, args) {
        hotSpotDiv.classList.add('info-hotspot');
        const pulse = document.createElement('div');
        pulse.classList.add('info-pulse');
        hotSpotDiv.appendChild(pulse);
        const icon = document.createElement('span');
        icon.classList.add('info-icon');
        icon.innerText = "i";
        hotSpotDiv.appendChild(icon);
        hotSpotDiv.addEventListener('click', function(e) {
            e.preventDefault();
            updateSidePanel(args.title, args.desc);
            showFlashcard(args.title, args.desc, e.clientX, e.clientY);
        });
    }

    function showFlashcard(title, desc, x, y) {
        const container = document.getElementById('flashcard-container');
        if(!container) return;
        container.innerHTML = "";
        const card = document.createElement('div');
        card.className = 'info-card';
        card.style.left = x + 'px';
        card.style.top = y + 'px';
        card.innerHTML = `<button class="close-btn" onclick="this.parentElement.remove()">×</button><h3>${title}</h3><p>${desc}</p>`;
        container.appendChild(card);
        setTimeout(() => { if(card && card.parentNode) card.remove(); }, 8000);
    }

    function updateMapPointer(sceneKey) {
        const pointer = document.getElementById('map-pointer');
        const sceneData = scenes[sceneKey];
        if (pointer && sceneData && sceneData.mapPos) {
            pointer.style.top = sceneData.mapPos.t + "%";
            pointer.style.left = sceneData.mapPos.l + "%";
            pointer.style.display = "block";
        } else if (pointer) {
            pointer.style.display = "none";
        }
    }

    function initTour() {
        viewer = pannellum.viewer('panorama', {
            default: { 
                firstScene: 'admin_gate', 
                sceneFadeDuration: 1000, 
                autoLoad: true, 
                orientationOnDeviceHelp: false 
            },
            scenes: scenes
        });

        viewer.on('load', function() {
            const currentKey = viewer.getScene();
            const currentScene = scenes[currentKey];
            
            // Auto-trigger voiceover on scene load
            updateSidePanel(currentScene.title, "Now exploring " + currentScene.title + ". Use navigation icons to continue your tour.");
            
            // Sync Dropdown
            const select = document.querySelector('#tour-menu select');
            if(select) select.value = currentKey;
            
            // Sync 2D Map Pointer
            updateMapPointer(currentKey);
        });

        createMenu();
    }

    window.onload = initTour;
})();