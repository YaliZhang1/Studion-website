document.addEventListener("DOMContentLoaded", () => {
  fetch('source/components/works.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('skills').insertAdjacentHTML('afterend', html);

      // Scroll behavior for menu item
      document.querySelector('.menu-item:nth-child(4)').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
      });
    });
});
