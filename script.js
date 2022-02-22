"use strict";

const questionmark = document.querySelector(".cvv-questionmark");
const infoMessage = document.querySelector(".cvv-questionmark-info");
const creditCard = document.querySelector(".flip-card-inner");

questionmark.addEventListener("mouseenter", () => {
  infoMessage.classList.add("opacity");
  creditCard.classList.add("rotate");
});
questionmark.addEventListener("mouseout", () => {
  infoMessage.classList.remove("opacity");
  creditCard.classList.remove("rotate");
});
