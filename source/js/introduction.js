document.addEventListener('DOMContentLoaded', () => {
  fetch('source/components/introduction.html')
    .then((res) => res.text())
    .then((html) => {
      document.querySelector('header').insertAdjacentHTML('afterend', html);

      // Scroll behavior for menu item
      document
        .querySelector('.menu-item:first-child')
        .addEventListener('click', (e) => {
          e.preventDefault();
          document
            .getElementById('introduction')
            .scrollIntoView({ behavior: 'smooth' });
        });
    });
});
