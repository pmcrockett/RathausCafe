export default function() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    let introHeader = document.createElement("h1");
    introHeader.classList.add("center-h");
    introHeader.textContent = "Welcome to the Rathaus Cafe";
    mainContent.appendChild(introHeader);

    let card = document.createElement("div");
    card.classList.add("menu-card", "shadow", "bottom-spacer");
    mainContent.appendChild(card);

    let introContainer = document.createElement("div");
    introContainer.classList.add("intro-container");
    card.appendChild(introContainer);

    let introImg = document.createElement("img");
    introImg.setAttribute("src", "./img/restaurant_interior.jpg");
    introImg.setAttribute("alt", "Inside the Rathaus Cafe");
    introImg.classList.add("home-img", "shadow");
    introContainer.appendChild(introImg);

    let introText = document.createElement("p");
    introText.textContent = "The Rathaus Cafe is known for its resilience – the health department can't keep us down! Come stick it to the man by eating terrible food without washing your hands."
    introContainer.appendChild(introText);
    
    introContainer.appendChild(document.createElement("br"));

    let introText2 = document.createElement("p");
    introText2.textContent = "Rathaus is located on historic (and underwater) Vermin Street in the middle of Seattle's Elliot Bay. Good luck finding us if you don't have a submarine.";
    introContainer.appendChild(introText2);

    let hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";
    hoursHeader.classList.add("center-h");
    mainContent.appendChild(hoursHeader);

    let hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");
    mainContent.appendChild(hoursContainer);

    const hoursText = [
        ["Mon – Thurs", "10 am", "–", "5pm"],
        ["Fri", "8 am", "–", "5pm"],
        ["Sat", "8 am", "–", "4pm"],
        ["Sun", "8 am", "–", "2pm"],
    ]
    const hoursClass = [
        "hours-day",
        "hours-open",
        "hours-dash",
        "hours-close"
    ]

    for (let i = 0; i < hoursText.length; i++) {
        for (let j = 0; j < hoursText[i].length; j++) {
            let newDiv = document.createElement("div");
            newDiv.textContent = hoursText[i][j];
            newDiv.classList.add(hoursClass[j]);
            hoursContainer.appendChild(newDiv);
        }
    }

    return mainContent;
};