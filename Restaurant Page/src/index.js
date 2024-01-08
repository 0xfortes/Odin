// index.js

import { loadPage } from './pageload.js';
import { loadMenuPage } from './menupage.js';
import { loadContactPage } from './contactpage.js';

document.addEventListener('DOMContentLoaded', () => {
  loadPage(); // Initial page load

  const contentDiv = document.getElementById('content');

  // Event listeners for tab switching
  const menuTab = document.getElementById('menuTab');
  const contactTab = document.getElementById('contactTab');

  menuTab.addEventListener('click', () => {
    clearContent();
    contentDiv.appendChild(loadMenuPage());
  });

  contactTab.addEventListener('click', () => {
    clearContent();
    contentDiv.appendChild(loadContactPage());
  });

  // Function to clear the content of the contentDiv
  function clearContent() {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  }
});
