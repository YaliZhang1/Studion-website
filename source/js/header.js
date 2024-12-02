document.addEventListener('DOMContentLoaded', function () {
  fetch('source/components/header.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ${response.status}');
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector('header').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading the header:', error);
    });
});
