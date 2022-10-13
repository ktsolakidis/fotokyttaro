//SELECT ITEMS
const intro = document.getElementById("intro");
const homeSection = document.getElementById("home--1");
const locationSection = document.getElementById("location--2");
const calculatorSection = document.getElementById("calculator--3");
const aboutSection = document.getElementById("about--us--3");
const contactSection = document.getElementById("contact--4");

setTimeout(() => {
  intro.classList.add("hidden");
}, 1300);

const sections = [
  homeSection,
  locationSection,
  calculatorSection,
  aboutSection,
  contactSection,
];

const homeButton = document.getElementById("home");
const locationButton = document.getElementById("location");
const calcButton = document.getElementById("calc");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

const mainHeaderElements = [
  homeButton,
  locationButton,
  calcButton,
  aboutButton,
  contactButton,
];

const photocopiesButton = document.getElementById("photocopies--button");
const kartesButton = document.getElementById("kartes--button");
const sxediaButton = document.getElementById("sxedia--button");

const buttons = [photocopiesButton, kartesButton, sxediaButton];

const photocopiesContainer = document.getElementById("photocopies");
const kartesContainer = document.getElementById("kartes");
const sxedioContainer = document.getElementById("sxedio");

const photocopiesNumberField = document.getElementById(
  "number--of--photocopies"
);
const photocopiesBlackColor = document.getElementsByName("black--color");

const photocopiesPriceButton = document.getElementById(
  "photocopies--price--button"
);

const photocopiesPriceField = document.getElementById("photocopies--price");

const numberOfSxedia = document.getElementById("copies");
const platosField = document.getElementById("platos");
const ypsosField = document.getElementById("ypsos");
const sxedioBlackColor = document.getElementsByName("black--color--sxedio");
const sxedioPaper = document.getElementById("paper");
const sxedioPriceButton = document.getElementById("sxedio--price--button");
const sxedioPriceField = document.getElementById("sxedio--price");
const numberOfKartesField = document.getElementById("kartes--number");
const kartesDublex = document.getElementById("dublex--kartes");
const kartesBlackColor = document.getElementsByName("black--color--kartes");
const kartesPriceButton = document.getElementById("kartes--price--button");
const kartesPriceField = document.getElementById("kartes--price");

const fields = [
  photocopiesNumberField,
  photocopiesPriceField,
  numberOfSxedia,
  platosField,
  ypsosField,
  sxedioPriceField,
  numberOfKartesField,
  kartesPriceField,
];

function emptyAllFields() {
  fields.forEach((field) => {
    field.innerHTML = "";
    field.value = "";
  });
}

//FUNCTIONS

function calculatorsFunctionallity(e) {
  if (e.target == photocopiesButton) {
    emptyAllFields();
    photocopiesButton.classList.add("selected");
    kartesButton.classList.remove("selected");
    sxediaButton.classList.remove("selected");

    photocopiesContainer.classList.remove("hidden");
    kartesContainer.classList.add("hidden");
    sxedioContainer.classList.add("hidden");
  }

  if (e.target == kartesButton) {
    emptyAllFields();
    kartesButton.classList.add("selected");
    photocopiesButton.classList.remove("selected");
    sxediaButton.classList.remove("selected");

    kartesContainer.classList.remove("hidden");
    photocopiesContainer.classList.add("hidden");
    sxedioContainer.classList.add("hidden");
  }

  if (e.target == sxediaButton) {
    emptyAllFields();
    sxediaButton.classList.add("selected");
    kartesButton.classList.remove("selected");
    photocopiesButton.classList.remove("selected");

    sxedioContainer.classList.remove("hidden");
    kartesContainer.classList.add("hidden");
    photocopiesContainer.classList.add("hidden");
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", calculatorsFunctionallity)
);

//PHOTOCOPIES CALCULATOR FUNCTIONALLITY

function photocopiesPriceCalculator() {
  let photocopiesNumber = Number(photocopiesNumberField.value);
  const photocopiesDublex = document.getElementById("dublex").checked;

  let colorOrBlack;
  let dublex = photocopiesDublex ? 2 : 1;

  for (check of photocopiesBlackColor) {
    if (check.checked) {
      colorOrBlack = check.value;
    }
  }
  let photocopyPrice = colorOrBlack == "color" ? 0.3 : 0.05;

  let finalPhotocopiesPrice = photocopiesNumber * dublex * photocopyPrice;

  if (finalPhotocopiesPrice == NaN) {
    alert("Παρακαλούμε συμπληρώστε τα απαραίτητα πεδία !");
    return;
  }

  photocopiesPriceField.innerHTML = `${finalPhotocopiesPrice.toPrecision(
    3
  )} € `;
}

photocopiesPriceButton.addEventListener("click", photocopiesPriceCalculator);

//SXEDIA CALCULATOR FUNCTIONALLITY

function sxedioPriceCalculator() {
  let number = Number(numberOfSxedia.value);
  let platos = Number(platosField.value);
  let ypsos = Number(ypsosField.value);
  let paper = sxedioPaper.value;
  let colorOrBlackSxedio;

  for (check of sxedioBlackColor) {
    if (check.checked) {
      colorOrBlackSxedio = check.value;
    }
  }

  let price;
  if (paper == "aplo") {
    price = 2;
    priceColor = 5;
  }

  if (paper == "xartoni") {
    price = 6;
    priceColor = 6.5;
  }
  if (paper == "gyalistero") {
    price = 7;
    priceColor = 9;
  }
  if (paper == "aytokollito") {
    price = 10;
    priceColor = 15;
  }
  if (paper == "rizoxarto") {
    price = 5;
    priceColor = 11;
  }

  if (colorOrBlackSxedio == "color--sxedio") {
    priceColor = priceColor;
    price = 1;
  } else {
    price = price;
    priceColor = 1;
  }

  let totalSxedioPrice = (number * ypsos * platos * price * priceColor) / 10000;

  if (totalSxedioPrice == NaN) {
    alert("Παρακαλούμε συμπληρώστε τα απαραίτητα πεδία !");
    return;
  }
  sxedioPriceField.innerHTML = `${totalSxedioPrice.toPrecision(3)} €`;
}

sxedioPriceButton.addEventListener("click", sxedioPriceCalculator);

//KARTES CALCULATOR FUNCTIONALLITY

function kartesPriceCalculator() {
  let temaxia = Number(numberOfKartesField.value);
  let dublexKartes = kartesDublex.checked;
  let colorOrBlackKartes;

  for (check of kartesBlackColor) {
    if (check.checked) {
      colorOrBlackKartes = check.value;
    }
  }

  let colorPrice = colorOrBlackKartes == "color--kartes" ? 0.5 : 0.1;

  let dublexPrice = dublexKartes ? 2 : 1;

  let pages = Math.ceil(temaxia / 10);

  let finalPrice = pages * colorPrice * dublexPrice;

  if (finalPrice == NaN) {
    alert("Παρακαλούμε συμπληρώστε τα απαραίτητα πεδία !");
    return;
  }
  kartesPriceField.innerHTML = `${finalPrice.toPrecision(3)} €`;
}

kartesPriceButton.addEventListener("click", kartesPriceCalculator);

//NAVIGATION BAR FUNCTIONALLITY

let cell = window.matchMedia("(max-width:600px)").matches;

function navBarFunctionallity() {
  homeButton.addEventListener("click", function () {
    window.scrollTo({
      top: homeSection.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  });

  locationButton.addEventListener("click", function () {
    if (cell) {
      window.scrollTo({
        top: locationSection.offsetTop,
        left: 00,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: locationSection.offsetTop - 0.1 * locationSection.clientHeight,
        left: 00,
        behavior: "smooth",
      });
    }
  });

  calcButton.addEventListener("click", function () {
    if (cell) {
      window.scrollTo({
        top:
          calculatorSection.offsetTop + 0.015 * calculatorSection.clientHeight,
        left: 00,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top:
          calculatorSection.offsetTop - 0.04 * calculatorSection.clientHeight,
        left: 00,
        behavior: "smooth",
      });
    }
  });

  aboutButton.addEventListener("click", function () {
    if (cell) {
      console.log("cellPhone");
      window.scrollTo({
        top: aboutSection.offsetTop - 0.02 * aboutSection.clientHeight,
        left: 00,
        behavior: "smooth",
      });
    } else {
      console.log("Pc");
      window.scrollTo({
        top: aboutSection.offsetTop - 0.04 * aboutSection.clientHeight,
        left: 00,
        behavior: "smooth",
      });
    }
  });

  contactButton.addEventListener("click", function () {
    window.scrollTo({
      top: contactSection.offsetTop - 0.2 * contactSection.clientHeight,
      left: 00,
      behavior: "smooth",
    });
  });
}

navBarFunctionallity();

window.addEventListener("scroll", function () {
  let current;
  sections.forEach((sec) => {
    let sectionTop = sec.offsetTop;
    let sectionHeight = sec.clientHeight;
    if (window.pageYOffset >= sectionTop - 280) {
      current = sec.getAttribute("id");
    }
  });
  let selected = homeSection;
  for (s of sections) {
    if (current === s.getAttribute("id")) {
      selected = s;
    }
  }

  for (let i = 0; i < sections.length; i++) {
    if (sections[i] == selected) {
      mainHeaderElements[i].classList.add("selected--section");
    } else {
      mainHeaderElements[i].classList.remove("selected--section");
    }
  }
});
