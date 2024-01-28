export default function() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    let contactContainer = document.createElement("div");
    mainContent.appendChild(contactContainer);

    let contactHeader = document.createElement("h1");
    contactHeader.classList.add("center-h");
    contactHeader.textContent = "Contact us";
    contactContainer.appendChild(contactHeader);

    let card = document.createElement("div");
    card.classList.add("menu-card", "shadow", "size-to-map");
    contactContainer.appendChild(card);
    
    let contactMap = document.createElement("iframe");
    contactMap.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21522.723807459097!2d-122.37160199978854!3d47.60006890924782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706256753556!5m2!1sen!2sus");
    contactMap.setAttribute("allowfullscreen", "");
    contactMap.setAttribute("loading", "lazy");
    contactMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    contactMap.classList.add("map", "shadow");
    card.appendChild(contactMap);

    let contactText = document.createElement("p");
    contactText.textContent = "We'd rather you not speak to us, but if you must, here's how:";
    card.appendChild(contactText);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-info-container");
    card.appendChild(infoContainer);

    const infoText = [
        ["Phone"],
        ["(555) 555-5555"],
        ["Email"],
        ["info", "@", "rathaus", "cafe", ".nom"],
        ["Visit"],
        ["377 Vermin St."],
        ["Seattle, WA 98185"]
    ]

    for (let i = 0; i < infoText.length - 1; i++) {
        let newDiv = document.createElement("div");

        if (infoText[i].length > 1) {
            for (let j = 0; j < infoText[i].length; j++) {
                let wbr = document.createElement("wbr");
                let node = document.createTextNode(infoText[i][j]);
                newDiv.appendChild(node);
                newDiv.appendChild(wbr);
            }

            newDiv.classList.add("wrap-email");
        } else {
            newDiv.textContent = infoText[i];
        }

        if (i == infoText.length - 2) {
            let newBr = document.createElement("p");
            newBr.textContent = infoText[i + 1];
            newDiv.appendChild(newBr);
        }

        infoContainer.appendChild(newDiv);
    }

    return mainContent;
};