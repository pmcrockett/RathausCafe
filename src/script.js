import homeContent from "./home.js";
import menuContent from "./menu.js";
import contactContent from "./contact.js";

const content = document.getElementById("content");
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const contactButton = document.querySelector(".contact-button");

let homeDiv = homeContent();
let menuDiv = null;
let contactDiv = null;

content.appendChild(homeDiv);

homeButton.addEventListener("click", e => {
    if (menuDiv) menuDiv.classList.add("hidden");
    if (contactDiv) contactDiv.classList.add("hidden");
    homeDiv.classList.remove("hidden");
});

menuButton.addEventListener("click", e => {
    if (homeDiv) homeDiv.classList.add("hidden");
    if (contactDiv) contactDiv.classList.add("hidden");

    if (!menuDiv) {
        menuDiv = menuContent();
        content.appendChild(menuDiv);
    }

    menuDiv.classList.remove("hidden");
});

contactButton.addEventListener("click", e => {
    if (homeDiv) homeDiv.classList.add("hidden");
    if (menuDiv) menuDiv.classList.add("hidden");

    if (!contactDiv) {
        contactDiv = contactContent();
        content.appendChild(contactDiv);
    }

    contactDiv.classList.remove("hidden");
});