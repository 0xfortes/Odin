// menuPage.js

export function loadMenuPage() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';
  menuTitle.classList.add('cyberpunk-orange'); // Apply the cyberpunk orange color

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');

  // Example menu items
  const menuItem1 = createMenuItem('Neon Noodles', '$15.99');
  const menuItem2 = createMenuItem('Cyber Sushi', '$18.99');
  const menuItem3 = createMenuItem('Virtual Veggies', '$12.99');

  // Append menu items to the menu list
  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  // Append elements to the menu container
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuList);

  return menuContainer;
}

function createMenuItem(name, price) {
  const menuItem = document.createElement('li');
  menuItem.textContent = `${name} - ${price}`;
  menuItem.classList.add('cyberpunk-green'); // Apply the cyberpunk green color to menu items

  return menuItem;
}
