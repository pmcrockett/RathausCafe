export default function() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("intro-container");
    mainContent.appendChild(contactContainer);

    let contactHeader = document.createElement("h1");
    contactHeader.classList.add("center-h");
    contactHeader.textContent = "Contact us";
    contactContainer.appendChild(contactHeader);

    let contactMap = document.createElement("iframe");
    contactMap.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21522.723807459097!2d-122.37160199978854!3d47.60006890924782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706256753556!5m2!1sen!2sus");
    contactMap.setAttribute("allowfullscreen", "");
    contactMap.setAttribute("loading", "lazy");
    contactMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    contactMap.classList.add("map", "shadow");
    contactContainer.appendChild(contactMap);

    let contactText = document.createElement("p");
    contactText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam necessitatibus a numquam, modi, harum tempore excepturi quasi dignissimos voluptatum molestiae saepe. Maxime, repellat consequatur veritatis eos iure amet consequuntur recusandae.";
    contactContainer.appendChild(contactText);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-info-container");
    contactContainer.appendChild(infoContainer);

    const infoText = [
        ["Phone"],
        ["(555) 555-5555"],
        ["Email"],
        ["info@rathauscafe.nom"],
        ["Visit"],
        ["377 Vermin St."],
        ["Seattle, WA 98185"]
    ]

    for (let i = 0; i < infoText.length - 1; i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = infoText[i];

        if (i == infoText.length - 2) {
            let newBr = document.createElement("p");
            newBr.textContent = infoText[i + 1];
            newDiv.appendChild(newBr);
        }

        infoContainer.appendChild(newDiv);
    }

    return mainContent;
};