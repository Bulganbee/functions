  // I am using an example template that I used for my Computational Form class from https://compform.net/text/ 
// I am modifying the structure, grammar, and the words to fit with the theme of my project
// I've re-structed the letter and chose words from Rumi's poems 
// I've added inputs, edit button, and print button functions and event listeners
function generateLetter() {
    // Get input 
    const recipient = document.getElementById("recipient").value || "recipient";
    const sender = document.getElementById("sender").value || "admirer";
    const recipientName = document.getElementById("recipientName").value || "Beloved";
    
    // Define grammar rules
    const grammar = {
        letter: [
            "{recipientTerm}, In your {noun1}, I find my {noun2}. You are the {noun3} that {verb1} my {noun4} and {verb1} my {noun4}. {phrase1} with you is a {phrase2} to {phrase3}. {phrase4} as the {phrase5}. {phrase6} is the {noun5} we {phrase7}. ",
        ],
     
        phrase: ["{subject} {verb} {object}"],
        subject: ["{noun}", "{adjective} {noun}"],
        
        recipientTerm: [recipientName], 
        noun1: [
            "presence", "fragrance", "scent", "beauty", "veil", "face", "spirit", "lips", "eyes", "heart", "soul", "presence" 
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
            "lights", "guides", "touches", "embraces", "enters", "renews", "melts", "calms", "rouses"
        ],
        phrase1: [
            "Every moment", "My days", "Everyday", "Moments"
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
    };
  
    // Function to get a random item from an array
    function choose(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
  
    // Function to expand the grammar 
    function expand(template) {
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
        
        const fullLetter = `To: ${recipient}\n\n${letter}\n\nFrom: ${sender}`;
        
        document.getElementById("letter").textContent = fullLetter;
  
        document.getElementById("letter-container").classList.remove("hidden");
        document.querySelector(".edit-controls").classList.remove("hidden");
        // added a scrollIntoView function for the letter
        setTimeout(() => {
            const letterContainer = document.getElementById("letter-container");
            letterContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
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

function validateInputs() {
    const recipient = document.getElementById("recipient").value.trim();
    const sender = document.getElementById("sender").value.trim();
    
    // Generate button
    const generateButton = document.getElementById("generate");
    
    // Check for required inputs
    if (recipient && sender) {
        // Enable the button if both inputs filled
        generateButton.disabled = false;
        generateButton.classList.remove("disabled");
    } else {
        // Disable the button if required input is empty
        generateButton.disabled = true;
        generateButton.classList.add("disabled");
    }
}

// Function to update the edit button text
function updateEditButton() {
  const editButton = document.getElementById("edit");
  editButton.textContent = isEditMode ? "Save" : "Edit";
}

function printLetter() {
    console.log("Print button clicked"); 
    window.print();
  }
  // Add event listeners when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    //hide the letter container before pressing on generate button
    const letterContainer = document.getElementById("letter-container");
    if (letterContainer) {
        letterContainer.classList.add("hidden");
    }
    // For showing selected image from previous page
    const selectedImageSrc = localStorage.getItem('selectedImage');
    if (selectedImageSrc) {
      // Image element
      const selectedImg = document.createElement('img');
      selectedImg.src = selectedImageSrc;
      selectedImg.alt = localStorage.getItem('selectedImageAlt') || 'Selected image';
      selectedImg.className = 'selected-image'; 
      // selected image container
      const container = document.querySelector('#selectedImageContainer');
      if (container) {
        container.innerHTML = '';
        container.appendChild(selectedImg);
        console.log("Image added to container");
      } 
    } 
    // Disabled generate button before putting input for and from
    const generateButton = document.getElementById("generate");
    generateButton.disabled = true;
    generateButton.classList.add("disabled");
    
    // Event listeners to input fields for validation
    document.getElementById("recipient").addEventListener("input", validateInputs);
    document.getElementById("sender").addEventListener("input", validateInputs);
    
    // Add click event to generate button
    document.getElementById("generate").addEventListener("click", generateLetter);
    // Add click event to edit button
    document.getElementById("edit").addEventListener("click", toggleEditMode);
    document.getElementById("regenerate").addEventListener("click", generateLetter);
    //Event listener for print
    const printBtn = document.getElementById("print");
    if (printBtn) {
    printBtn.addEventListener("click", printLetter);
    console.log("Print button listener added");
     } else {
    console.error("Print button not found in DOM");
     }
     // Event listeners for input fields to enable real-time updates
     const inputs = ["recipient", "sender", "recipientName"];
     inputs.forEach(id => {
      const input = document.getElementById(id);
      if (input) {
          input.addEventListener("input", function() {
          });
      }
  });

});

