// Example module to demonstrate module structure and ES6 imports/exports

/**
 * A simple example function that logs to console
 */
export function exampleFunction() {
    console.log('👋 Hello from the example module!');
    console.log('🎯 This demonstrates how to structure your JavaScript modules');
    
    // Add click event to demo button
    const demoButton = document.getElementById('demo-button');
    if (demoButton) {
        demoButton.addEventListener('click', handleButtonClick);
    }
}

/**
 * Creates a welcome message element
 * @returns {HTMLElement} The welcome message div
 */
export function createWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    
    const title = document.createElement('h2');
    title.textContent = 'JavaScript Module Loaded Successfully! 🎉';
    
    const description = document.createElement('p');
    description.innerHTML = `
        This content was dynamically created by the <code>example.js</code> module. 
        You can modify this file or create new modules in the <code>src/modules/</code> directory.
    `;
    
    welcomeDiv.appendChild(title);
    welcomeDiv.appendChild(description);
    
    return welcomeDiv;
}

/**
 * Handles button click events
 * @param {Event} event - The click event
 */
function handleButtonClick(event) {
    const button = event.target;
    const originalText = button.textContent;
    
    // Provide visual feedback
    button.textContent = 'Clicked! ✨';
    button.style.transform = 'scale(0.95)';
    
    // Reset after a short delay
    setTimeout(() => {
        button.textContent = originalText;
        button.style.transform = 'scale(1)';
    }, 1000);
    
    // Log to console
    console.log('🖱️ Demo button was clicked!');
    
    // Show alert with template info
    showTemplateInfo();
}

/**
 * Shows information about the webpack template
 */
function showTemplateInfo() {
    const info = `
🚀 Webpack Template Features:

✅ Hot Module Replacement (HMR)
✅ CSS & SCSS Support
✅ Modern JavaScript (ES6+)
✅ Production Optimization
✅ Asset Handling (images, fonts)
✅ ESLint & Prettier Ready
✅ GitHub Pages Deployment

Start building your project by modifying:
• src/index.js (main entry point)
• src/styles/ (stylesheets)
• src/modules/ (JavaScript modules)
    `.trim();
    
    alert(info);
}

/**
 * Utility function for formatting dates
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date = new Date()) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

/**
 * Example of a simple API call function
 * @param {string} url - The API endpoint
 * @returns {Promise} Fetch promise
 */
export async function apiCall(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}

// Example of immediately invoked code (runs when module loads)
console.log(`📅 Module loaded at: ${formatDate()}`);
