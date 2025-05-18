// === 01. Toggle Menu Visibility on Small Screens ===
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('button');
    const nav = document.querySelector('nav');
  
    function toggleMenu() {
      nav.classList.toggle('hide');
    }
  
    menuButton.addEventListener('click', toggleMenu);
  
    // === 02. Handle Window Resize ===
    function handleResize() {
        if (window.innerWidth > 1000) {
          nav.classList.remove('hide');
        } else {
          nav.classList.add('hide');
        }
      }
    
      // Run it once when the page first loads
      handleResize();
    
      // Watch for the window to be resized
      window.addEventListener('resize', handleResize);
  
    // === 03. Setup Modal for Image Viewer ===
    const gallery = document.querySelector('.gallery');
  
    // Create dialog and append to body
    const modal = document.createElement('dialog');
    modal.classList.add('image-viewer');
    document.body.appendChild(modal);
  
    // Click handler for gallery images
    gallery.addEventListener('click', (event) => {
      const clickedImg = event.target.closest('img');
      if (!clickedImg) return;
  
      const src = clickedImg.getAttribute('src');
      const alt = clickedImg.getAttribute('alt');
      const baseName = src.split('-')[0]; // e.g., "images/norris"
      const fullSrc = `${baseName}-full.jpeg`;
  
      modal.innerHTML = `
        <img src="${fullSrc}" alt="${alt}">
        <button class="close-viewer">X</button>
      `;
  
      modal.showModal();
  
      // Add event listener to close button
      modal.querySelector('.close-viewer').addEventListener('click', () => {
        modal.close();
      });
    });
  
    // Close modal if background is clicked
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });