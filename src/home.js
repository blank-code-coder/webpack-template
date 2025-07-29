// Home page content
export function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Bella Vista Bistro';
  restaurantName.style.color = 'white';
  restaurantName.style.textAlign = 'center';
  restaurantName.style.marginBottom = '2rem';
  content.appendChild(restaurantName);
  
  const heroImage = document.createElement('img');
  heroImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop';
  heroImage.alt = 'Beautiful restaurant interior';
  heroImage.style.width = '100%';
  heroImage.style.maxWidth = '600px';
  heroImage.style.height = '400px';
  heroImage.style.objectFit = 'cover';
  heroImage.style.borderRadius = '10px';
  heroImage.style.display = 'block';
  heroImage.style.margin = '0 auto 2rem auto';
  content.appendChild(heroImage);
  
  const headline = document.createElement('h2');
  headline.textContent = 'Experience Culinary Excellence';
  headline.style.color = 'white';
  headline.style.textAlign = 'center';
  headline.style.marginBottom = '1.5rem';
  headline.style.fontSize = '2rem';
  content.appendChild(headline);
  
  const description = document.createElement('p');
  description.textContent = 'Welcome to Bella Vista Bistro, where traditional flavors meet modern culinary artistry. Our passionate chefs craft each dish using the finest locally-sourced ingredients, creating an unforgettable dining experience in the heart of the city.';
  description.style.color = 'white';
  description.style.textAlign = 'center';
  description.style.fontSize = '1.1rem';
  description.style.lineHeight = '1.6';
  description.style.maxWidth = '600px';
  description.style.margin = '0 auto 2rem auto';
  description.style.padding = '0 1rem';
  content.appendChild(description);
  
  const hoursSection = document.createElement('div');
  hoursSection.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  hoursSection.style.padding = '2rem';
  hoursSection.style.borderRadius = '10px';
  hoursSection.style.maxWidth = '400px';
  hoursSection.style.margin = '0 auto';
  hoursSection.style.textAlign = 'center';
  
  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Hours of Operation';
  hoursTitle.style.color = 'white';
  hoursTitle.style.marginBottom = '1rem';
  hoursSection.appendChild(hoursTitle);
  
  const hoursList = document.createElement('div');
  hoursList.style.color = 'white';
  hoursList.innerHTML = `
    <p style="margin: 0.5rem 0;">Monday - Thursday: 5:00 PM - 10:00 PM</p>
    <p style="margin: 0.5rem 0;">Friday - Saturday: 5:00 PM - 11:00 PM</p>
    <p style="margin: 0.5rem 0;">Sunday: 4:00 PM - 9:00 PM</p>
  `;
  hoursSection.appendChild(hoursList);
  content.appendChild(hoursSection);
}
