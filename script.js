// QR Code generation function (for admin use)
function generateQRCode(url) {
    // Using Google Charts API for QR code generation
    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(url)}&choe=UTF-8`;
    return qrCodeUrl;
}

// Function to save user data to localStorage (backup)
function saveUserData(name, email, phone) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
        name: name,
        email: email,
        phone: phone,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('users', JSON.stringify(users));
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

// Handle back button in tour
if (document.querySelector('.btn-back')) {
    document.querySelector('.btn-back').addEventListener('click', function(e) {
        e.preventDefault();
        if (document.referrer) {
            history.back();
        } else {
            window.location.href = 'landing.html';
        }
    });
}

// Responsive map handling
window.addEventListener('resize', function() {
    const map = document.getElementById('map');
    if (map && map._leaflet_id) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.error('Failed to load image:', e.target.src);
        e.target.src = 'assets/images/placeholder.jpg';
    }
}, true);

// Keyboard navigation for tour
document.addEventListener('keydown', function(e) {
    if (window.location.pathname.includes('tour.html')) {
        if (e.key === 'ArrowLeft') {
            navigate('prev');
        } else if (e.key === 'ArrowRight') {
            navigate('next');
        } else if (e.key === 'Escape') {
            closeFlashcard();
        }
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left
        if (window.location.pathname.includes('tour.html')) {
            navigate('next');
        }
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right
        if (window.location.pathname.includes('tour.html')) {
            navigate('prev');
        }
    }
}

// Add CSS for loader
const style = document.createElement('style');
style.textContent = `
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    
    .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(style);