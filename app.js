// menu items
const menu = [
    {
        id: 1,
        title: "Tacos",
        category: "Lunch",
        price: 14.99,
        img: "./image/img1.PNG",
        desc: "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand.",

    },

    {
        id: 2,
        title: "Beef burger",
        category: "Lunch",
        price: 9.99,
        img: "./image/img2.png",
        desc: " is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
    },
    {
        id: 3,
        title: "Burrito",
        category: "Lunch",
        price: 12.99,
        img: "./image/img3.png",
        desc: "A burrito is a dish in Mexican and Tex-Mex cuisine that took form in California cuisine, consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients.",
    },
    {
        id: 4,
        title: "Waffles",
        category: "Breakfast",
        price: 4.99,
        img: "./image/img4.PNG",
        desc: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.",
    },
    {
        id: 5,
        title: "Pancakes",
        category: "Breakfast",
        price: 7.99,
        img: "./image/img5.PNG",
        desc: "a thin, flat cake of batter, fried on both sides in a pan and typically rolled up with a sweet or savoury filling.",
    },
    {
        id: 6,
        title: "Chocolate milkshake",
        category: "Shakes",
        price: 10.99,
        img: "./image/img6.PNG",
        desc: " Chocolate milk is made with milk and chocolate syrup (usually made with cocoa powder, sugar, and a bit of water) ",
    },
    {
        id: 7,
        title: "Strawberry milkshake",
        category: "Shakes",
        price: 9.99,
        img: "./image/img7.PNG",
        desc: "1 1/2 cup frozen strawberries 1 frozen medium banana, chopped 1 cup coconut milk (plus additional if desired) 2 tbsp coconut butter",
    },

    {
        id: 8,
        title: "Oreo shake",
        category: "Shakes",
        price: 13.99,
        img: "./image/img8.PNG",
        desc: "It’s a milkshake, after all. You can also make this recipe non-dairy and vegan since Oreos do not contain milk as an ingredient.",

    },
    {
        id: 9,
        title: "Steak",
        category: "Dinner",
        price: 44.99,
        img: "./image/img9.PNG",
        desc: "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried.",
    },
    {
        id: 9,
        title: "Pasta",
        category: "Dinner",
        price: 24.99,
        img: "./image/img10.PNG",
        desc: " Delicious pasta dishes from classic spaghetti Bolognese to lasagne and linguine. ",
    }

];
const menuBtns = document.querySelectorAll(".menu-btn")

const sc = document.querySelector(".sc");
window.addEventListener("DOMContentLoaded", function () {
    menuDisplay(menu);
});
function menuDisplay(menuItems) {
    let menuDisplay = menuItems.map(function (item) {
        return ` <article class="item">
        <img src=${item.img} class="photo" alt=$(item.title) />
        <div class="info">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            <P class="text">
                ${item.desc}
            </P>
        </div>
      </article>`;
    });
    menuDisplay = menuDisplay.join("");
    sc.innerHTML = menuDisplay;
};

menuBtns.forEach(function (Btn) {
    Btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.value;
        const menuCategories = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem
            }
        });
        if (category === "all") {
            menuDisplay(menu);
        }
        else {
            menuDisplay(menuCategories);
        }

    });
});