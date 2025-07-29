import './styles/main.css';
import { exampleFunction, createWelcomeMessage } from './modules/example';

// Initialize the application
function init() {
    console.log('🚀 Webpack template is working!');
    
    // Call example function
    exampleFunction();
    
    // Create welcome message
    const content = document.getElementById('content');
    const welcomeDiv = createWelcomeMessage();
    content.appendChild(welcomeDiv);
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
