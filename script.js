let currentPackage = 0; // Index of the initially selected package
const packageContainer = document.querySelector('.package-carousel');
const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const modal = document.querySelector(".packModal")
const packBox = [...document.querySelectorAll(".packBox")]

const prices = {
    3: {
        1: 250,
        2: 450,
        3: 800,
        4: 1500,
        5: 2600
    },
    6: {
        1: 400,
        2: 750,
        3: 1300,
        4: 2500,
        5: 4200
    },
    12: {
        1: 600,
        2: 1125,
        3: 1950,
        4: 3750,
        5: 6300
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
            console.log(res);
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