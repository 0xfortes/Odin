// contactPage.js

export function loadContactPage() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Contact Us';
  contactTitle.classList.add('cyberpunk-orange'); // Apply the cyberpunk orange color

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'For reservations, please contact us at: info@cyberpunkbistro.com';
  contactInfo.classList.add('cyberpunk-green'); // Apply the cyberpunk green color

  // Additional contact information, map, or form can be added here

  // Append elements to the contact container
  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(contactInfo);

  return contactContainer;
}
