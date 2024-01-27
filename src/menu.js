export default function() {
    let mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
        
    let menuHeader = document.createElement("h1");
    menuHeader.classList.add("center-h");
    menuHeader.textContent = "Browse our menu";
    mainContent.appendChild(menuHeader);

    let menuText = document.createElement("p");
    menuText.classList.add("bottom-spacer");
    menuText.textContent = "All menu selections are guaranteed to be made with the cheapest ingredients we can find, and all of our recipes were created by minimum-wage employees with no culinary experience. We love our food so you don't have to.";
    mainContent.appendChild(menuText);

    let menuSections = [
        [
            "Breakfast",
            "All breakfast items are served with your choice of reheated hashbrowns or scrambled egg substitute."
        ],
        [
            "Lunch",
            "All lunch items are served with your choice of potato-like chips or \"French fries.\""
        ],
        [
            "Drinks",
            ""
        ]
    ];
    let menuItems = [
        // Breakfast
        [
            [
                "Bowl of Soggy Cereal with Six-Week-Old Milk",
                "$7",
                "./img/breakfast.jpg",
                "This bowl of tasteless bran flakes will make you wish we had pancakes. Served with a side of canned fruit."
            ],
            [
                "Burnt Toast with Burnt Bacon",
                "$9",
                "./img/breakfast.jpg",
                "Bread so charred that you won't even notice how stale it is. The bacon matches the toast."
            ]
        ],
        // Lunch
        [
            [
                "Club Sandwich",
                "$13",
                "./img/sandwich.jpg",
                "Rubbery, bland chicken with grainy tomatoes and wilted lettuce. Probably has mayo. Probably doesn't have spiders."
            ],
            [
                "Tuna Sandwich",
                "$13",
                "./img/sandwich.jpg",
                "Watery, gross tuna with grainy tomatoes and wilted lettuce. Might have pickles if we have any."
            ],
            [
                "Ham Sandwich",
                "$12",
                "./img/sandwich.jpg",
                "Made with delicious, pre-sliced deli ham that may have been frozen at some point. Also has grainy tomatoes, wilted lettuce, and neon yellow mustard."
            ]
        ],
        // Drinks
        [
            [
                "Coffee",
                "$5",
                "./img/drink.jpg",
                "It's coffee. Either instant or drip-brewed depending on who's working today. Might be decaf (if we don't like you)."
            ],
            [
                "Tea",
                "$5",
                "./img/drink.jpg",
                "Lukewarm black tea microwaved almost long enough and stored in an urn that doesn't have weird mold growing in it."
            ],
            [
                "Soft Drink",
                "$5",
                "./img/drink.jpg",
                "Some kind of generic cola or lemon-lime soda. Usually carbonated, unless we haven't noticed that the CO2 has run out."
            ]
        ]
    ];

    for (let i = 0; i < menuSections.length; i++) {
        let section = document.createElement("h1");
        section.classList.add("center-h");
        section.textContent = menuSections[i][0];
        mainContent.appendChild(section);

        let secDesc = document.createElement("p");
        secDesc.classList.add("menu-section-desc");
        secDesc.textContent = menuSections[i][1];
        mainContent.appendChild(secDesc);

        let menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        mainContent.appendChild(menuContainer);
    
        for (let j = 0; j < menuItems[i].length; j++) {
            let menuCard = document.createElement("div");
            menuCard.classList.add("menu-card", "shadow");
            menuContainer.appendChild(menuCard);

            let title = document.createElement("div");
            title.classList.add("menu-card-title");
            menuCard.appendChild(title);

            let header = document.createElement("h2");
            header.classList.add("menu-card-h");
            header.textContent = menuItems[i][j][0];
            title.appendChild(header);

            let price = document.createElement("h1");
            price.textContent = menuItems[i][j][1];
            title.appendChild(price);

            let pic = document.createElement("img");
            pic.setAttribute("src", menuItems[i][j][2]);
            pic.setAttribute("alt", menuItems[i][j][0]);
            pic.classList.add("menu-img", "shadow");
            menuCard.appendChild(pic);

            let text = document.createElement("p");
            text.textContent = menuItems[i][j][3];
            menuCard.appendChild(text);
        }
    }

    return mainContent;
};