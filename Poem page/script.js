document.getElementById("generatePoem").addEventListener("click", function () {
    document.getElementById("poem").innerHTML = generatePoem(); // Use innerHTML for line breaks
});

function generatePoem() {
    const line1 = [
        "Skyscrapers touch clouds",
        "Neon lights flicker",
        "Bridges stretch like arms",
        "Taxis race like stars",
        "Subway doors whisper",
        "Brooklyn Bridge at dawn"
    ]; // 5 syllables

    const line2 = [
        "Concrete rivers never rest",
        "Golden streets hum at midnight",
        "Billboards blink in silent code",
        "Footsteps echo down the halls",
        "City dreams of lost echoes",
        "A million voices collide"
    ]; // 7 syllables

    const line3 = [
        "Moonlight paints the streets",
        "Faded dreams still burn",
        "Night swallows the past",
        "Pigeons claim the dawn",
        "Hope waits underground",
        "Wind hums through the glass"
    ]; // 5 syllables

    // Ensure each line is on a new line
    return `${sample(line1)}<br>${sample(line2)}<br>${sample(line3)}`;
}

// Helper function to pick a random element
function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
}


  