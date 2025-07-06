// index.js
import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

function pageLoad(page, title) {
  if (document.title !== title) {
    document.title = title;

    const content = document.querySelector("#content");
    while (content.firstChild) {
      content.lastChild.remove();
    }
    if (page) {
      content.appendChild(page);
    }
  }
}

pageLoad(home, "UNI - Home");

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
  pageLoad(home, "UNI - Home");
});

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  pageLoad(menu, "UNI - Menu");
});

const contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", () => {
  pageLoad(contact, "UNI - Contact");
});
