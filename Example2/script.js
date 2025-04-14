  // Add event listeners when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
   
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

});

