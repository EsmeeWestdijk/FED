// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("nav Button");
const deNav = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = toggleMenu; 

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu(){
  deNav.classList.toggle("toonMenu"); 
}

// bron: sanne les stof 
