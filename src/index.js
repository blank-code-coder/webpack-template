import "./styles.css";
import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadAboutPage } from './about.js';

// Initialize the page and set up event listeners
function initializePage() {
  // Load home page by default
  loadHomePage();
  
  // Get all navigation buttons
  const homeBtn = document.querySelector('nav button:nth-child(1)');
  const menuBtn = document.querySelector('nav button:nth-child(2)');
  const aboutBtn = document.querySelector('nav button:nth-child(3)');
  
  // Add event listeners
  homeBtn.addEventListener('click', loadHomePage);
  menuBtn.addEventListener('click', loadMenuPage);
  aboutBtn.addEventListener('click', loadAboutPage);
}

// Wait for DOM to load then initialize
document.addEventListener('DOMContentLoaded', initializePage);