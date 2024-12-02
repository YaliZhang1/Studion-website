document.addEventListener("DOMContentLoaded", () => {
  fetch("source/components/menu.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);

      const menuItems = document.querySelectorAll(".menu-item");

      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          menuItems.forEach((i) => i.classList.remove("checked"));
          item.classList.add("checked");
        });
      });
    })
    .catch((error) => {
      console.error("Error loading the menu:", error);
    });
});
