const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);

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