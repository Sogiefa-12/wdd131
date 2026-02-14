const form = document.querySelector("#planner-form");
const scheduleContainer = document.querySelector("#schedule-container");

let activities = JSON.parse(localStorage.getItem("activities")) || [];

// Display activities
function displayActivities() {
    scheduleContainer.innerHTML = "";

    if (activities.length === 0) {
        scheduleContainer.innerHTML = `<p>No activities added yet.</p>`;
        return;
    }

    activities.forEach((activity, index) => {
        const activityCard = `
        <div class="activity-card">
            <p><strong>${activity.name}</strong></p>
            <p>${activity.day} at ${activity.time}</p>
            <button class="btn delete-btn" data-index="${index}">Delete</button>
        </div>
        `;
        scheduleContainer.insertAdjacentHTML("beforeend", activityCard);
    });

    addDeleteListeners();
}

// Add activity
function addActivity(event) {
    event.preventDefault();

    const name = document.querySelector("#activity").value;
    const day = document.querySelector("#day").value;
    const time = document.querySelector("#time").value;

    const newActivity = { name, day, time };

    activities.push(newActivity);
    localStorage.setItem("activities", JSON.stringify(activities));

    form.reset();
    displayActivities();
}

// Delete activity
function deleteActivity(index) {
    activities = activities.filter((_, i) => i !== index);
    localStorage.setItem("activities", JSON.stringify(activities));
    displayActivities();
}

// Attach delete listeners
function addDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            deleteActivity(index);
        });
    });
}

form.addEventListener("submit", addActivity);
displayActivities();
