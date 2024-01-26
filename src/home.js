export default function() {
    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    let introContainer = document.createElement("div");
    introContainer.classList.add("intro-container");
    homeContent.appendChild(introContainer);

    let introHeader = document.createElement("h1");
    introHeader.classList.add("center-h");
    introHeader.textContent = "Welcome to the Rathaus Cafe";
    introContainer.appendChild(introHeader);

    let introImg = document.createElement("img");
    introImg.setAttribute("src", "./img/restaurant_interior.jpg");
    introImg.setAttribute("alt", "Inside the Rathaus Cafe");
    introImg.classList.add("home-img", "shadow");
    introContainer.appendChild(introImg);

    let introText = document.createElement("p");
    introText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam necessitatibus a numquam, modi, harum tempore excepturi quasi dignissimos voluptatum molestiae saepe. Maxime, repellat consequatur veritatis eos iure amet consequuntur recusandae.";
    introContainer.appendChild(introText);

    let hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";
    hoursHeader.classList.add("center-h");
    homeContent.appendChild(hoursHeader);

    let hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");
    homeContent.appendChild(hoursContainer);

    const hoursText = [
        ["Mon – Thurs", "10 am", "–", "8pm"],
        ["Fri", "8 am", "–", "6pm"],
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

    return homeContent;
};