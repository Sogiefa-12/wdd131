const greetingEl = document.getElementById('greeting');
const lastVisitEl = document.getElementById('last-visit');

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

function displayLastVisit() { 
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        lastVisitEl.textContent = `last visit: ${lastVisit}`;
    }
    else {
        lastVisitEl.textContent = 'This is your first visit!';
    }
}

function saveVisit() {
    const now = new Date().toLocaleString();
    localStorage.setItem('lastVisit', now);
}

function initHome() {
    greetingEl.textContent = getGreeting();
    displayLastVisit();
    saveVisit();
}

function displayCurrentDate() { 
    const dateEl = document.getElementById('current-date');
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    dateEl.textContent = `Today is ${formattedDate}`;
}


window.addEventListener('DOMContentLoaded', () => { 
    displayCurrentDate();
    initHome();
});