
const ul = document.querySelector(".lijst");
const button = document.querySelector(".btn");

let password = "ADB";

button.addEventListener("click", Gokwachtwoord);


function Gokwachtwoord() {
  const makeObject = {
    guess: prompt('wachtwoord graag'),
    isCorrect: false
  };

  if(
    makeObject.guess=== password){
      makeObject.isCorrect = true;
      alert('ADB');
    }
    console.log(makeObject)
    if(makeObject.isCorrect){
      Gokwachtwoord();
    }
  

  
}