// Menu page content
export function loadMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Our Menu';
  menuTitle.style.color = 'white';
  menuTitle.style.textAlign = 'center';
  menuTitle.style.marginBottom = '3rem';
  content.appendChild(menuTitle);
  
  // Create menu items
  const menuItems = [
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon herb butter, served with roasted vegetables',
      price: '$28'
    },
    {
      name: 'Beef Tenderloin',
      description: 'Prime cut beef with red wine reduction and garlic mashed potatoes',
      price: '$35'
    },
    {
      name: 'Pasta Primavera',
      description: 'Fresh seasonal vegetables with house-made pasta in a light cream sauce',
      price: '$22'
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan cheese and house-made croutons',
      price: '$16'
    }
  ];
  
  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    menuItem.style.padding = '1.5rem';
    menuItem.style.margin = '1rem auto';
    menuItem.style.borderRadius = '10px';
    menuItem.style.maxWidth = '600px';
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    itemName.style.color = 'white';
    itemName.style.marginBottom = '0.5rem';
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    itemDescription.style.color = 'white';
    itemDescription.style.margin = '0.5rem 0';
    itemDescription.style.opacity = '0.9';
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.style.color = 'white';
    itemPrice.style.fontWeight = 'bold';
    itemPrice.style.fontSize = '1.2rem';
    itemPrice.style.margin = '0.5rem 0 0 0';
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    content.appendChild(menuItem);
  });
}
