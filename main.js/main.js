
const ul = document.querySelector(".lijst");
const button = document.querySelector(".btn");

const password = "ADB";

button.addEventListener("click", Gokwachtwoord);

function Gokwachtwoord() {
  let guess = "";
  while (guess !== password) {
    guess = prompt("Wat is je wachtwoord?");
    if (guess === null) {
      return; 
    }
    ul.innerHTML += "<li>" + guess + "</li>"; 
    if (guess === password) {
      alert("Het wachtwoord is goed");
      break; 
    }

    
  }
}
