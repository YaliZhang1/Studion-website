document.addEventListener('DOMContentLoaded', () => {
  fetch('source/components/blogs.html')
    .then((res) => res.text())
    .then((html) => {
      document
        .getElementById('works')
        .insertAdjacentHTML('afterend', html);

      // Scroll behavior for menu item
      document
        .querySelector('.menu-item:nth-child(b)')
        .addEventListener('click', (e) => {
          e.preventDefault();
          document
            .getElementById('blogs')
            .scrollIntoView({ behavior: 'smooth' });
        });
    });
});
