const greetingElement = document.querySelector('#greeting');
const lastVisitElement = document.querySelector('#last-visit');
const dateElement = document.querySelector('#current-date');

// Function: display current date in footer
function displayCurrentDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    });

    dateElement.textContent = `Today is ${formattedDate}`;
}

// Function: display greeting based on last visit

function displayGreeting() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit || Number.isNaN(Number(lastVisit))) {
        greetingElement.textContent = `Welcome to Smart Campus Companion! We're glad you're here.`;
        lastVisitElement.textContent = `This is your first visit!`;
    } else {
        const daysSinceVisit = Math.floor(
            (now - Number(lastVisit)) / (1000 * 60 * 60 * 24)
        );

        greetingElement.textContent = `Welcome back!`;
        lastVisitElement.textContent = `It's been ${daysSinceVisit} day(s) since your last visit.`;
    }

    localStorage.setItem('lastVisit', now);
}


// Run functions on page load
window.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    displayGreeting();
});
