const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

const settingsBtn = document.getElementById('settings-btn');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-btn');
const volumeSlider = document.getElementById('volume-slider');
const audio = document.getElementById('background-audio');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☪';
    } else {
        themeToggleBtn.textContent = '☽';
    }
});

audio.play().catch((error) => {
    console.log("Autorun blocked by browser");
});

settingsBtn.addEventListener('click', () => {
    menuOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
});

audio.volume = volumeSlider.value;

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

menuOverlay.addEventListener('click', (event) => {
    if (event.target === menuOverlay) {
        menuOverlay.style.display = 'none';
    }
});

function updateCountdown() {
    const now = new Date();
    const diff = newYearDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "Happy New Year!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText =
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();