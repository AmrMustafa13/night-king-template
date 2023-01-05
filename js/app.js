const navLinks = document.querySelectorAll(".nav ul li a");

// function to add the active class to the selected link

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // remove the active class from all the links
        navLinks.forEach(function (link) {
            link.classList.remove("active-link");
        });
        // add the class to the selected link
        e.target.classList.add("active-link");
    });
});

const navBar = document.querySelector(".nav");
const navUl = document.querySelector(".nav ul");
const burger = document.querySelector(".burger");
const navLi = document.querySelectorAll(".nav ul li");

// nav bar change while scrollig

window.addEventListener("scroll", function (e) {
    if (pageYOffset > navBar.getBoundingClientRect().bottom) {
        navBar.classList.add("scrolling");
    }
    else {
        navBar.classList.remove("scrolling");
    }
});

// burger menu responsive

burger.addEventListener("click", function (e) {
    navUl.classList.toggle("open");
    navLi.forEach(function (link) {
        link.classList.toggle("fade");
    });
});

// pre loader function 

window.addEventListener("load", function () {
    const preLoader = document.querySelector(".pre-loader");
    preLoader.classList.add("finished");
});

// the go up button
const goUpButton = document.querySelector(".go-up-button");

// show or hide the button

window.onscroll = function () {
    if (window.pageYOffset > 600) {
        goUpButton.style.opacity = "1";
        goUpButton.style.pointerEvents = "all";
    } else {
        goUpButton.style.opacity = "0";
        goUpButton.style.pointerEvents = "none";
    }
};

// the button functionality
goUpButton.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// opening the modal for the youtube

const playBtn = document.querySelector("#play-btn");
const modal = document.querySelector(".modal");
const myVid = document.querySelector(".modal iframe");

playBtn.addEventListener("click", function (e) {
    modal.classList.add("opened");
});

// close the video and the modal page

modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("opened");
        let source = myVid.src;
        myVid.src = '';
        myVid.src = source;
    }
});

// start filtering the gallery 

const filterButtons = document.querySelectorAll(".portfolio .buttons button");
const portfolioImages = document.querySelectorAll(".column img");

// convert the nodelist to an array
const all = Array.from(portfolioImages);

// get the filtered array
const app = all.filter(function (image) {
    if (image.alt === "app") {
        return true;
    }
});
const web = all.filter(function (image) {
    if (image.alt === "web") {
        return true;
    }
});
const card = all.filter(function (image) {
    if (image.alt === "card") {
        return true;
    }
});

// the main function to filter the portfolio

filterButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        // remove the class from all
        filterButtons.forEach(function (btn) {
            btn.classList.remove("act-btn");
        });
        // adding the active class
        button.classList.add("act-btn");
        // filtering the images
        switch (button.getAttribute("data-filter")) {
            case "all":
                for (let i = 0; i < all.length; i++) {
                    all[i].style.display = "block";
                }
                break;
            case "app":
                for (let i = 0; i < app.length; i++) {
                    app[i].style.display = "block";
                }
                for (let i = 0; i < web.length; i++) {
                    web[i].style.display = "none";
                }
                for (let i = 0; i < card.length; i++) {
                    card[i].style.display = "none";
                }
                break;
            case "web":
                for (let i = 0; i < web.length; i++) {
                    web[i].style.display = "block";
                }
                for (let i = 0; i < card.length; i++) {
                    card[i].style.display = "none";
                }
                for (let i = 0; i < app.length; i++) {
                    app[i].style.display = "none";
                }
                break;
            case "card":
                for (let i = 0; i < card.length; i++) {
                    card[i].style.display = "block";
                }
                for (let i = 0; i < app.length; i++) {
                    app[i].style.display = "none";
                }
                for (let i = 0; i < web.length; i++) {
                    web[i].style.display = "none";
                }
                break;
        }
    });
});

// start the accordion

const aiDiv = document.querySelectorAll(".accord-info .accord-box .arrow-acc");
const myP = document.querySelectorAll(".accord .accord-info .accord-box p");

aiDiv.forEach(function (div) {
    div.addEventListener("click", function (e) {
        e.target.classList.toggle("ai-open");
        e.target.nextElementSibling.classList.toggle("accord-open");
        if (e.target.children[1].classList.contains("fa-chevron-up")) {
            e.target.children[1].classList.remove("fa-chevron-up");
            e.target.children[1].classList.add("fa-chevron-down");
        }
        else {
            e.target.children[1].classList.remove("fa-chevron-down");
            e.target.children[1].classList.add("fa-chevron-up");
        }
    });
});