// About page content
export function loadAboutPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = 'About Us';
  aboutTitle.style.color = 'white';
  aboutTitle.style.textAlign = 'center';
  aboutTitle.style.marginBottom = '2rem';
  content.appendChild(aboutTitle);
  
  const aboutImage = document.createElement('img');
  aboutImage.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop';
  aboutImage.alt = 'Our chef preparing food';
  aboutImage.style.width = '100%';
  aboutImage.style.maxWidth = '500px';
  aboutImage.style.height = '300px';
  aboutImage.style.objectFit = 'cover';
  aboutImage.style.borderRadius = '10px';
  aboutImage.style.display = 'block';
  aboutImage.style.margin = '0 auto 2rem auto';
  content.appendChild(aboutImage);
  
  const aboutText = document.createElement('div');
  aboutText.style.maxWidth = '600px';
  aboutText.style.margin = '0 auto';
  aboutText.style.padding = '0 1rem';
  
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = 'Founded in 2018, Bella Vista Bistro has been serving the community with exceptional cuisine and warm hospitality. Our story began with a simple vision: to create a place where food brings people together and every meal is a celebration.';
  paragraph1.style.color = 'white';
  paragraph1.style.lineHeight = '1.6';
  paragraph1.style.marginBottom = '1.5rem';
  
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Our head chef, Maria Rodriguez, brings over 15 years of culinary expertise from renowned restaurants across Europe. Together with our dedicated team, we source the finest ingredients from local farmers and artisans to create dishes that honor both tradition and innovation.';
  paragraph2.style.color = 'white';
  paragraph2.style.lineHeight = '1.6';
  paragraph2.style.marginBottom = '1.5rem';
  
  const paragraph3 = document.createElement('p');
  paragraph3.textContent = 'We believe that dining is about more than just food – it\'s about creating memories, fostering connections, and celebrating life\'s special moments. Thank you for being part of our story.';
  paragraph3.style.color = 'white';
  paragraph3.style.lineHeight = '1.6';
  
  aboutText.appendChild(paragraph1);
  aboutText.appendChild(paragraph2);
  aboutText.appendChild(paragraph3);
  content.appendChild(aboutText);
}
