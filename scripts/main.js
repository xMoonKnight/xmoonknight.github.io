
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
