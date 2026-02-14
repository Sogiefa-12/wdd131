const spotsContainer = document.querySelector("#spots-container");
const filterButtons = document.querySelectorAll(".filters .btn");

const studySpots = [
    {
        name: "Library - 2nd Floor",
        type: "quiet",
        seating: "Individual",
        description: "A quiet space ideal for focused individual study.",
        image: "images/study-spots/library.webp"
    },
    {
        name: "Student Center - Lounge Area",
        type: "group",
        seating: "Group",
        description: "A lively area perfect for group study sessions and socializing.",
        image: "images/study-spots/student-centre.webp"
    },
    {
        name: "Science Building - Study Rooms",
        type: "quiet",
        seating: "Individual/Group",
        description: "Private study rooms available for reservation, great for group projects.",
        image: "images/study-spots/science-building.webp"
    },

    {
        name: "Student Gardern",
        type: "group",
        seating: "Group/Individual",
        description: "calm, quiet and serene",
        image: "images/study-spots/student-garden.webp"
    }


];

// Function: display study spots
function displaySpots(spots) {
    spotsContainer.innerHTML = "";

    if (spots.length === 0) {
        spotsContainer.innerHTML = `<p>No study spots found.</p>`;
        return;
    }

    spots.forEach(spot => {
        const spotCard = `
            <article class="spot-card">
                <img src="${spot.image}" alt="Study area at ${spot.name}" loading="lazy" class="spot-image">
                <h3>${spot.name}</h3>
                <p><strong>Type:</strong> ${spot.type}</p>
                <p><strong>Seating:</strong> ${spot.seating}</p>
                <p>${spot.description}</p>
            </article>
        `;
        spotsContainer.insertAdjacentHTML("beforeend", spotCard);
    });
}

// Function: filter spots
function filterSpots(filterType) {
    if (filterType === "all") {
        displaySpots(studySpots);
    } else {
        const filteredSpots = studySpots.filter(spot => spot.type === filterType);
        displaySpots(filteredSpots);
    }
}

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterSpots(filter);
    });
});

// Initial display
displaySpots(studySpots);
