document.addEventListener("DOMContentLoaded", () => {
  fetch('source/components/about-me.html')
    .then(handleFetchResponse)
    .then(insertHTML)
    .catch(handleError);
});

// fetch response
function handleFetchResponse(res) {
  if (!res.ok) {
    throw new Error('Failed to load component');
  }
  return res.text();
}

// insert HTML 
function insertHTML(html) {
  document.getElementById('introduction').insertAdjacentHTML('afterend', html);
  setupScrollBehavior();
}

// set up scroll behavior
function setupScrollBehavior() {
  const menuItem = document.querySelector('.menu-item:nth-child(2)');
  if (menuItem) {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// mistake handle
function handleError(error) {
  console.error('Error loading component:', error);
}
  