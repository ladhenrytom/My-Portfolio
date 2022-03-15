"use strict";
const aboutMe = document.querySelector(".about-me");
const toggle = (elementId) => {
  const element = document.getElementById(elementId);
  if (element.classList.contains(elementId + "--open")) {
    element.classList.remove(elementId + "--open");
  } else {
    element.classList.add(elementId + "--open");
  }
};

const toggleNavigation = () => {
  toggle("about-me");
  toggle("hamburger-button");
};

document.querySelector(".projects").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".hidden-div").classList.remove("hidden--div");
  document.querySelector(".main").classList.add("hidden--div");
  document.querySelector(".contact").classList.add("hidden--div");
  if (aboutMe.classList.contains("about-me--open")) {
    toggleNavigation();
  }
});

document.querySelector(".contact-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contact").classList.remove("hidden--div");
  document.querySelector(".main").classList.add("hidden--div");
  document.querySelector(".hidden-div").classList.add("hidden--div");
  if (aboutMe.classList.contains("about-me--open")) {
    toggleNavigation();
  }
});
