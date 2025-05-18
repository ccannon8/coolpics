// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('button');
    const navMenu = document.querySelector('nav');
  
    menuButton.addEventListener('click', () => {
      // Toggle the "open" class on the nav
      navMenu.classList.toggle('open');
    });
  });
  