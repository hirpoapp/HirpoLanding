let currentPackage = 0; // Index of the initially selected package
const packageContainer = document.querySelector('.package-carousel');
const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const modal = document.querySelector(".packModal")


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


function openModal() {
    modal.classList.add("activeModal")
}

function closeModal() {
    modal.classList.remove("activeModal")
}


function changeStyle(element, price) {
    const packBoxes = document.getElementsByClassName("packBox");
    for (let i = 0; i < packBoxes.length; i++) {
        packBoxes[i].classList.remove("selected");
    }
    element.classList.add("selected");
    const priceElement = element.querySelector(".price");
    priceElement.textContent = price + "₼";
}

function prevPackage() {
    const packages = document.querySelector(".packages");
    packages.scrollLeft -= 350;
}

function nextPackage() {
    const packages = document.querySelector(".packages");
    packages.scrollLeft += 350;
}




const sendEmail = document.getElementById("sendButton");

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ezs2u7o";
    const templateID = "template_wedpjhh";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }