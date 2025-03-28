  // Simple letter grammar generator
  // I am using an example template that I used for my Computational Form class from https://compform.net/text/ 
  // I am modifying the structure, grammar, and the words to fit with the theme of my project
  function generateLetter() {
    // Define grammar rules
    const grammar = {
        letter: [
            "{start} {terms}, {phrase}. I {verb} for you. Finally, {phrase}, and {phrase}.",
            "In a {place}, {phrase}. Suddenly, {phrase}. In the end, {phrase} and {phrase}."
        ],
        phrase: ["{subject} {verb} {object}"],
        subject: ["{noun}", "{adjective} {noun}"],
        object: [
            "{noun}",
            "{adjective} {noun}",
            "{adjective} {noun} and {adjective} {noun}"
        ],
        place: ["Divani", "Shamsi", "Tabriz", "Mathnawi", "earth", "moon", "house"],
        adjective: [
            "secret", "invisible", "reckless", "strong", "unabashed", "hard", "surfaced", "straightforward", "old", "new", "lasting", "true", "real", "unique", "manifest", "dependent"
        ],
        terms: ["beloved", "light of my eyes", "sweetheart", "drunken one"],
        start: ["For my", "Dear"],
        noun: [
            "love", "sky", "veils", "moment", "end", "step", "feet", "world", "self", "heart", "gift", "circle", "lovers", "breast", "Divani", "Shamsi", "Tabriz", "reason", "profit", "midst", "suffering", "millstone", "surface", "self-interest", "gift", "God", "Being", "Mathnawi", "sculptor", "molder", "form", "idol", "spirit", "face", "fire", "soul", "fragrance", "drop", "blood", "earth", "Beloved", "house", "mud", "water", "ruins", "Passion", "medicine", "bough", "elixir", "fatigue", "beauty", "heart", "lips", "water", "life", "talisman", "oneness", "reasoning", "house", "treasure", "coffer", "beginning", "end", "mystery", "lord", "states", "feeling", "month", "year", "moon", "state", "bodies", "spirit"
        ],
        verb: [
            "fly", "cause", "fall", "let", "go", "take", "step", "regard", "disregard", "said", "enter", "see", "reach", "feel", "come", "consuming", "proceeds", "died", "risks", "asks", "gambles", "bestows", "gave", "give", "shape", "melt", "rouse", "fill", "look", "want", "throw", "spills", "absorbs", "cherish", "informs", "merge", "participate", "fallen", "leave", "makes", "lops", "renews", "seek", "pours", "drinks", "shattered", "know", "reasoning", "find", "expect", "bids", "wills", "become"
        ]
    };

    // Function to get a random item from an array
    function choose(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Function to expand the grammar recursively
    function expand(template) {
        // Replace placeholders with random selections
        return template.replace(/\{(\w+)\}/g, (match, key) => {
            const rule = grammar[key];
            if (!rule) return match;
            
            const picked = choose(rule);
            return expand(picked);
        });
    }

    // Generate and display the letter
    try {
        const letter = expand(choose(grammar.letter));
        document.getElementById("letter").textContent = letter;
    } catch (error) {
        console.error("Error generating letter:", error);
        document.getElementById("letter").textContent = "Error generating letter. Please try again.";
    }
}

// Add event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Generate initial letter
    generateLetter();

    // Add click event to generate button
    document.getElementById("generate").addEventListener("click", generateLetter);
});
  