const btnItem = document.querySelector('header nav img:nth-of-type(2)')
const menuItem = document.querySelector('header nav:nth-of-type(2)')
const bodyEl = document.body 
const closeBtn = document.querySelector("header nav:nth-of-type(2) div button")

const productBtn = document.querySelector("section:nth-of-type(6) > button:first-of-type");
const productDialog = document.querySelector("main section:nth-of-type(6)> dialog:first-of-type")
const closeBtnproduct = document.querySelector("section:nth-of-type(6) dialog section button:nth-of-type(1)");

const gebruikBtn = document.querySelector("main section:nth-of-type(6) > button:nth-of-type(2)")
const gebruikDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(2)")
const closeBtngebruik = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(2) button:first-of-type")

const ingredBtn = document.querySelector("main section:nth-of-type(6) button:nth-of-type(3)")
const ingredDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(3)")
const closeBtnIngred = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(3) button:first-of-type")

const beoordBtn = document.querySelector("main section:nth-of-type(6) button:nth-of-type(4)")
const beoordDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(4)")
const closeBtnBeoord = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(4) button:first-of-type")

const winkelmandjeBtn = document.querySelector("main section:nth-of-type(1) button:nth-of-type(2)")
const winkelmandDialog = document.querySelector("main section:nth-of-type(1) dialog:nth-of-type(1)")
const closeBtnWinkelmand = document.querySelector("main section:nth-of-type(1) dialog:nth-of-type(1) section > button")

const verderBtn = document.querySelector("main section:nth-of-type(1) dialog:nth-of-type(1) > button")
const verderDialog = document.querySelector("header nav dialog:nth-of-type(1)")

const radioButton1 = document.getElementById('radiobutton1');
const radioButton2 = document.getElementById('radiobutton2');
const radioButton3 = document.getElementById('radiobutton3');
const sliderImage = document.querySelector('#li1 img'); 

const hartjeBtn = document.querySelector("main>section:nth-of-type(4) li button:first-of-type>img"); 
const hartjeBtnRood = document.querySelector("main>section:nth-of-type(4) li button:nth-of-type(2)>img")




btnItem.addEventListener('click', openMenu)
closeBtn.addEventListener("click", closeMenu)

//Menu: bron =Ali studentassistent//
function openMenu(){
  menuItem.classList.add('active')
  bodyEl.classList.add('inactive')

}

function closeMenu(){
  menuItem.classList.remove('active')
  bodyEl.classList.remove('inactive')
}




//pagina 2 section 6: bron = codepen opdracht dialog//

productBtn.addEventListener("click",() =>{
  productDialog.showModal(); 
}); 

closeBtnproduct.addEventListener("click", () =>{
  productDialog.close(); 
}); 


gebruikBtn.addEventListener("click",() =>{
  gebruikDialog.showModal(); 
}); 

closeBtngebruik.addEventListener("click", () =>{
  gebruikDialog.close(); 
}); 


ingredBtn.addEventListener("click",() =>{
  ingredDialog.showModal(); 
}); 

closeBtnIngred.addEventListener("click", () =>{
  ingredDialog.close(); 
}); 


beoordBtn.addEventListener("click",() =>{
  beoordDialog.showModal(); 
}); 

closeBtnBeoord.addEventListener("click", () =>{
  beoordDialog.close(); 
}); 


winkelmandjeBtn.addEventListener("click",() =>{
  winkelmandDialog.showModal(); 
}); 


closeBtnWinkelmand.addEventListener("click", () =>{
  winkelmandDialog.close(); 
}); 

verderBtn.addEventListener("click", () =>{
  winkelmandDialog.close(); 
}); 




//Bron: ChatGpt. promt:hoe zorg ik ervoor dat als ik de radiobuttons aanklik de eesrte foto uit de slider van section 1 veranderd //

function updateImage(imagePath) {
    sliderImage.src = imagePath;
}


function handleRadioChange(event) {
    if (event.target.id === 'radiobutton1') {
        updateImage('images/ysl_parfum_foto_goed.avif');
    } else if (event.target.id === 'radiobutton2') {
        updateImage('images/ysl_parfum_50ml.avif');
    } else if (event.target.id === 'radiobutton3') {
        updateImage('images/ysl_parfum_90ml.avif');
    }
}


radioButton1.addEventListener('change', handleRadioChange);
radioButton2.addEventListener('change', handleRadioChange);
radioButton3.addEventListener('change', handleRadioChange);




//like button rood//

hartjeBtn.addEventListener("click", () => {
  hartjeBtn.classList.toggle("active"); 
  hartjeBtnRood.classList.remove("active"); // Verwijdert actieve status van hartjeBtnRood
});

hartjeBtnRood.addEventListener("click", () => {
  hartjeBtnRood.classList.toggle("active"); 
  hartjeBtn.classList.remove("active"); // Verwijdert actieve status van hartjeBtn
});



