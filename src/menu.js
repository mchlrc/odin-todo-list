const menu = (function () {
  const menuPage = document.createElement("div");
  menuPage.classList.add("page");
  const container = document.createElement("div");
  container.classList.add("container");
  menuPage.appendChild(container);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Omakase - $1000";
  container.appendChild(paragraph);
  return menuPage;
})();
export default menu;
