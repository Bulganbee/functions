  // Simple letter grammar generator
  // I am using an example template that I used for my Computational Form class from https://compform.net/text/ 
  // I am modifying the structure, grammar, and the words to fit with the theme of my project
  function generateLetter() {
    // Define grammar rules
    const grammar = {
        letter: [
            "Once upon a time, {phrase}. Then, {phrase}. Finally, {phrase}, and {phrase}.",
            "In a {place}, {phrase}. Suddenly, {phrase}. In the end, {phrase} and {phrase}."
        ],
        phrase: ["{subject} {verb} {object}"],
        subject: ["{noun}", "{adjective} {noun}"],
        object: [
            "{noun}",
            "{adjective} {noun}",
            "{adjective} {noun} and {adjective} {noun}"
        ],
        place: ["mysterious forest", "quiet village", "sunny meadow", "dark cave"],
        adjective: [
            "proud", "small", "forgetful", "handsome", 
            "comical", "wild", "brave", "curious", 
            "sleepy", "energetic"
        ],
        noun: [
            "bear", "cat", "dog", "frog", 
            "goose", "lamb", "rabbit", "wizard", 
            "knight", "dragon", "fairy"
        ],
        verb: [
            "becomes friends with", 
            "finds", 
            "chases", 
            "plots with", 
            "discovers", 
            "helps", 
            "challenges"
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
  