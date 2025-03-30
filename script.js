// Function to format time (ensures two digits)
function formatTime(num) {
    return num < 10 ? `0${num}` : num;
}

// Function to update the clock
function updateClock() {
    // Get current time
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    // Update the clock display
    const clockElement = document.getElementById('digital-clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately when the page loads
updateClock();
