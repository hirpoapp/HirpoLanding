let currentPackage = 0; // Index of the initially selected package
const packageContainer = document.querySelector('.package-carousel');
const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const modal = document.querySelector(".packModal")
const packBox = [...document.querySelectorAll(".packBox")]

const prices = {
    3: {
        1: 313,
        2: 563,
        3: 1000,
        4: 2025,
        5: 3640,
        6: 5460
    },
    6: {
        1: 500,
        2: 938,
        3: 1625,
        4: 3375,
        5: 5880,
        6: 8820
    },
    12: {
        1: 750,
        2: 1406,
        3: 2438,
        4: 5063,
        5: 8820,
        6: 13230
    }
}


function hamburgerOpen() {
    menu.classList.toggle('openmenu');
    hamburger.classList.toggle("change");
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }
});

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

function changeStyle(element, price) {
    var elements = document.getElementsByClassName("packBox");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("selected");
    }

    element.classList.add("selected");
}

function applyDiscount(checkbox) {
    var priceElements = document.querySelectorAll(".packBox .price");

    if (checkbox.checked) {
        priceElements.forEach(function (element) {
            var originalPrice = parseFloat(element.textContent);
            var discountedPrice = originalPrice * 0.75;

            var oldPriceElement = element.parentElement.querySelector(".old-price");
            oldPriceElement.textContent = originalPrice.toFixed(0) + "₼";

            element.textContent = discountedPrice.toFixed(2) + "₼";
        });
    } else {
        priceElements.forEach(function (element) {
            var oldPriceElement = element.parentElement.querySelector(".old-price");
            var originalPrice = parseFloat(oldPriceElement.textContent.slice(0, -1));
            element.textContent = originalPrice.toFixed(0) + "₼";
            oldPriceElement.textContent = "";
        });
    }
}

function changeStyle(element, price) {
    const packBoxes = document.getElementsByClassName("packBox");
    for (let i = 0; i < packBoxes.length; i++) {
        packBoxes[i].classList.remove("selected");
    }
    element.classList.add("selected");
}

const sendEmail = document.getElementById("sendButton");

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_4okz8hm";
    const templateID = "template_falwu3m";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}

function changePlan(button, month) {
    const buttons = [...document.querySelectorAll(".buttons button")]
    buttons.map(button => button.classList.remove("active"))
    button.classList.add("active")
    packBox.map((box, index) => {
        box.querySelector(".price").innerHTML = `${Object.values(prices[month])[index]}₼`
        box.querySelector(".month").innerHTML = `per ${month} month`
    })
}