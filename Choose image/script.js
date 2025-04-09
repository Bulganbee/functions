document.addEventListener('DOMContentLoaded', function() {
    // Get images and button
    const images = document.querySelectorAll('#images img');
    const nextButton = document.querySelector('button');
    
    // disable button
    nextButton.disabled = true;
    
    let selectedImage = null;
    
    // Event listeners to all images 
    images.forEach(image => {
        image.addEventListener('click', function() {
            images.forEach(img => img.classList.remove('selected'));
            this.classList.add('selected');
            selectedImage = this;
            
            // Enable button
            nextButton.disabled = false;

			localStorage.setItem('selectedImage', this.src);
            localStorage.setItem('selectedImageAlt', this.alt);
    
        });
    });
});