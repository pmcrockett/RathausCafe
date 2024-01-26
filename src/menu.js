export default function() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
        
    let menuHeader = document.createElement("h1");
    menuHeader.classList.add("center-h");
    menuHeader.textContent = "Browse our menu";
    mainContent.appendChild(menuHeader);

    let menuText = document.createElement("p");
    menuText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam necessitatibus a numquam, modi, harum tempore excepturi quasi dignissimos voluptatum molestiae saepe. Maxime, repellat consequatur veritatis eos iure amet consequuntur recusandae.";
    mainContent.appendChild(menuText);

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    mainContent.appendChild(menuContainer);

    for (let i = 0; i < 10; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card", "shadow");
        menuContainer.appendChild(menuCard);
    }
    
    return mainContent;
};