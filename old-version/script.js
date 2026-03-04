// ✨ Magic & Interactions ✨

// --- Scroll Logic ---
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// --- Toggle Letter ---
function toggleLetter(type) {
    const shortLetter = document.getElementById('short-letter');
    const longLetter = document.getElementById('long-letter');
    const buttons = document.querySelectorAll('.toggle-btn');

    // Reset buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    if (type === 'short') {
        shortLetter.classList.remove('hidden');
        longLetter.classList.add('hidden');
        buttons[0].classList.add('active');
    } else {
        shortLetter.classList.add('hidden');
        longLetter.classList.remove('hidden');
        buttons[1].classList.add('active');
    }
}

// --- "No" Button Evasion Logic ---
function moveNoButton() {
    const btn = document.getElementById('no-btn');
    // Ensure button stays within viewport with some padding
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 100) + 50;

    // Use fixed position so it stays in the current viewable area (no scrolling needed to find it)
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.zIndex = '1000'; // Make sure it sits above other elements
}

// --- "Yes" Button Logic & Popup ---
function handleYesClick() {
    // 1. Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB7C5', '#FFD700', '#FFF'] // Pink, Gold, White
    });

    // 2. Show "Good Girl" Popup
    setTimeout(() => {
        document.getElementById('good-girl-popup').classList.remove('hidden');
    }, 500);
}

// --- Close Popup & Reveal Surprise ---
function closePopup() {
    document.getElementById('good-girl-popup').classList.add('hidden');
}

function revealSurprise() {
    closePopup();
    const surpriseSection = document.getElementById('surprise');
    surpriseSection.classList.remove('hidden');
    scrollToSection('surprise');

    // More confetti!
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// --- Intersection Observer for Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('animate-pop-in')) {
                entry.target.style.animationPlayState = 'running';
            }
        }
    });
});

document.querySelectorAll('.fade-in-on-scroll, .reason-item').forEach((el) => {
    observer.observe(el);
});

// --- Mouse Cursor Trails (Fairy Dust) ---
document.addEventListener('mousemove', function (e) {
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}
