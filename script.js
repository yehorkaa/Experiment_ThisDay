"use strict";

// html:
// <input type="text" data-text-input />

// js:
// const textInput = document.querySelector('[data-text-input]');
const buttons = document.querySelector(".blockChoices"),
  first = document.querySelector("[data-life]"),
  second = document.querySelector("[data-math]"),
  third = document.querySelector("[data-data]"),
  fourth = document.querySelector("[data-year]"),
  up = document.querySelector("[data-up]"),
  down = document.querySelector("[data-down]"),
  number = document.querySelector("#number"),
  // UpDown = document.querySelector(".UpDown"),
  textField = document.querySelector(".textfield");

let counter = 0;
// реализовать логику что  если юзер клацнул на рандом мас например то тут тоже выдает факт связанный с этим и с каунтером
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

buttons.addEventListener("click", (event) => {
  event.preventDefault();
  const e = event.target;
  textField.style.display = "none";
  if (e === first) {
    fetch("http://numbersapi.com/random/trivia?json")
      .then((res) => res.json())
      .then((sentence) => {
        console.log(sentence);
        textField.style.display = "block";
        textField.innerHTML = sentence.text;
        number.innerHTML = sentence.number;
        localStorage.setItem("counter", sentence.number);
        localStorage.setItem("text", sentence.text);
      });
  }
  if (e === second) {
    fetch("http://numbersapi.com/random/math?json")
      .then((res) => res.json())
      .then((sentence) => {
        console.log(sentence);
        textField.innerHTML = sentence.text;
        textField.style.display = "block";
        number.innerHTML = sentence.number;
        localStorage.setItem("counter", sentence.number);
        localStorage.setItem("text", sentence.text);
      });
  }
  if (e === third) {
    fetch("http://numbersapi.com/random/date?json")
      .then((res) => res.json())
      .then((sentence) => {
        console.log(sentence);
        textField.style.display = "block";
        textField.innerHTML = sentence.text;
        number.innerHTML = sentence.number;
        localStorage.setItem("counter", sentence.number);
        localStorage.setItem("text", sentence.text);
      });
  }
  if (e === fourth) {
    fetch("http://numbersapi.com/random/year?json")
      .then((res) => res.json())
      .then((sentence) => {
        console.log(sentence);
        textField.style.display = "block";
        textField.innerHTML = sentence.text;
        number.innerHTML = sentence.number;
        localStorage.setItem("counter", sentence.number);
        localStorage.setItem("text", sentence.text);
      });
  }
});

function getUp() {
  up.addEventListener("click", () => {
    localStorage.getItem("counter");
    counter++;
    localStorage.setItem("counter", counter);
    number.innerHTML = counter;
    fetch(`http://numbersapi.com/${counter}/trivia?json`)
      .then((res) => res.json())
      .then((info) => {
        textField.innerHTML = info.text;
      });
  });
}
getUp();

function getDown() {
  down.addEventListener('click', () => { 
    localStorage.getItem("counter");
    counter--;
    localStorage.setItem("counter", counter);
    number.innerHTML = counter;
    fetch(`http://numbersapi.com/${counter}/trivia?json`)
      .then((res) => res.json())
      .then((info) => {
        textField.innerHTML = info.text;
      });
  })
}
getDown();


document.addEventListener("DOMContentLoaded", () => {
  number.innerHTML = localStorage.getItem("counter");
  textField.innerHTML = localStorage.getItem("text");
  
});
