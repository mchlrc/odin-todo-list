const contact = (function () {
  const contactPage = document.createElement("div");
  contactPage.classList.add("page");
  const container = document.createElement("div");
  container.classList.add("container");
  contactPage.appendChild(container);
  const paragraph = document.createElement("p");
  paragraph.textContent = "bob@uniomakase.com";
  container.appendChild(paragraph);
  return contactPage;
})();

export default contact;
