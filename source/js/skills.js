document.addEventListener("DOMContentLoaded", () => {
  fetch('source/components/skills.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('about-me').insertAdjacentHTML('afterend', html);

      // Scroll behavior for menu item
      document.querySelector('.menu-item:nth-child(3)').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
      });
    });
});
