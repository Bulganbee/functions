
 // I am using an example template that I used for my Computational Form class from https://compform.net/text/ 
// I am modifying the structure, grammar, and the words to fit with the theme of my project
//I've added inputs 
function generateLetter() {
    // Get input 
    const recipient = document.getElementById("recipient").value || "beloved";
    const sender = document.getElementById("sender").value || "admirer";
    const recipientName = document.getElementById("recipientName").value || "dear one";
    
    
    // Define grammar rules
    const grammar = {
        letter: [
            "{recipientTerm}, In your {noun1}, I find my {noun2}. You are the {noun3} that {verb1} my {noun4} and {verb1} my {noun4}. {phrase1} with you is a {phrase2} to {phrase3}. {phrase4} as the {phrase5}. {phrase6} is the {noun5} we {phrase7}. ",
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
            "secret", "invisible", "reckless", "strong", "unabashed", "hard", "surfaced", "straightforward", 
            "old", "new", "lasting", "true", "real", "unique", "manifest", "dependent"
        ],
        terms: ["beloved", "light of my eyes", "sweetheart", "drunken one"],
        start: ["For my", "Dear"],
        recipientTerm: [recipientName], 
        noun1: [
            "presence", "fragrance", "scent", "beauty", "veil", "face", "spirit", "lips", "eyes", "heart", "soul", "breast" 
        ],
        noun2: [
          "self", "heart", "gift", "world", "idol", "spirit", "fire", "soul", "oneness", "beginning", "moon", "lord", "god" 
        ],
      noun3: [
        "spark", "being", "oneness", "gift", "love", "sky", "world" 
        ],
       noun4: [
       "soul", "spirit", "passion", "fire", "heart"
        ],
        noun5: [
          "truth", "fire", "light", "reason", "guidance"
           ],
     
        verb1: [
            "lights","guides","touches","embraces","enters","renews","melts","calms","rouses"
        ],
        phrase1: [
            "Every moment", "My days", "Everyday","Moments"
        ],
        phrase2: [
          "bridge", "step closer"
        ],
        phrase3: [
          "heaven", "god", "garden of the soul", "fountain of love"
        ],
        phrase4: [
          "I am yours", "You are mine", "We are one"
        ],
        phrase5: [
          "stars to the night", "moon to the night", "heart to the body"
        ],
        phrase6: [
          "Our reunion", "Our love", "Our meeting", "Our oneness"
        ],
        phrase7: [
          "seek", "meant to find", "stumble upon", "cherish", "bestow upon"
        ],
         //seek, meant to find, stumble upon, cherish, bestow upon
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
        
        // Create the complete letter with recipient and sender
        const fullLetter = `To: ${recipient}\n\n${letter}\n\nFrom: ${sender}`;
        
        document.getElementById("letter").textContent = fullLetter;
    } catch (error) {
        console.error("Error generating letter:", error);
        document.getElementById("letter").textContent = "Error generating letter. Please try again.";
    }
  }
     let isEditMode = false;
     let originalText = '';
     function toggleEditMode() {
        const letterElement = document.getElementById("letter");
        
        if (!isEditMode) {
            // Enter edit mode
            originalText = letterElement.textContent;
            letterElement.setAttribute("contenteditable", "true");
            letterElement.focus();
            letterElement.classList.add("editing");
        } else {
            // Exit edit mode and save changes
            letterElement.removeAttribute("contenteditable");
            letterElement.classList.remove("editing");
        }
        
        isEditMode = !isEditMode;
        updateEditButton();
    }
    // Function to update the edit button text
        function updateEditButton() {
        const editButton = document.getElementById("edit");
        editButton.textContent = isEditMode ? "Save" : "Edit";
}
  
  // Add event listeners when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Generate initial letter
    generateLetter();
  
    // Add click event to generate button
    document.getElementById("generate").addEventListener("click", generateLetter);
    // Add click event to edit button
    document.getElementById("edit").addEventListener("click", toggleEditMode);

    
    // Add event listeners for input fields to enable real-time updates
    const inputs = ["recipient", "sender", "recipientName"];
    inputs.forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener("input", function() {
          // Optional: generate in real-time as user types
          // generateLetter();
        });
      }
    });
  });
  