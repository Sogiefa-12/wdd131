// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

//static weather values
const temperature = 32;
const windSpeed = 10;

//Wind Chill calculation (metric)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) + 
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Display temperature and wind speed
document.querySelector("#temp").textContent = temperature;
document.querySelector("#speed").textContent = windSpeed;

// Apply conditions
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} ℃`;
}

document.querySelector("#windchill").textContent = windChill;