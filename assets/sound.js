const settingsBtn = document.getElementById('settings-btn');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-btn');
const volumeSlider = document.getElementById('volume-slider');
const audio = document.getElementById('background-audio');

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