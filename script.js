"use strict";
const buttons = document.querySelector(".blockChoices"),
  first = document.querySelector("[data-life]"),
  second = document.querySelector("[data-math]"),
  third = document.querySelector("[data-data]"),
  fourth = document.querySelector("[data-year]"),
  up = document.querySelector("[data-up]"),
  down = document.querySelector("[data-down]"),
  number = document.querySelector("#number"),
  textField = document.querySelector(".textfield");

if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

function getChanges(sentence) {
  textField.innerHTML = sentence.text;
  textField.style.display = "block";
  number.innerHTML = sentence.number;
  localStorage.setItem("counter", sentence.number);
  localStorage.setItem("text", sentence.text);
}

function getType(type) {
  fetch(`http://numbersapi.com/random/${type}?json`)
    .then((res) => res.json())
    .then((sentence) => {
      console.log(sentence);
      getChanges(sentence);
    });
}

buttons.addEventListener("click", (event) => {
  event.preventDefault();
  const e = event.target;
  textField.style.display = "none";
  switch (e) {
    case first:
      getType("trivia");
    case second:
      getType("math");
    case third:
      getType("date");
    case fourth:
      getType("year");
  }
});
function getUpAndDown(button, condition) {
  button.addEventListener("click", () => {
    let currentCounter = localStorage.getItem("counter");
    Boolean(condition) ? currentCounter++ : currentCounter--;
    localStorage.setItem("counter", currentCounter);
    number.innerHTML = currentCounter;
    fetch(`http://numbersapi.com/${currentCounter}/trivia?json`)
      .then((res) => res.json())
      .then((info) => {
        textField.innerHTML = info.text;
      });
  });
}

getUpAndDown(up, true);
getUpAndDown(down, false);

document.addEventListener("DOMContentLoaded", () => {
  number.innerHTML = localStorage.getItem("counter");
  textField.innerHTML = localStorage.getItem("text");
});
