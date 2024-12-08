const btnItem = document.querySelector('header nav img:nth-of-type(2)')
const menuItem = document.querySelector('header nav:nth-of-type(2)')
const bodyEl = document.body 
const closeBtn = document.querySelector("header nav:nth-of-type(2) div button")

const productBtn = document.querySelector("main section:nth-of-type(6) button:first-of-type")
const productDialog = document.querySelector("main section:nth-of-type(6) dialog:first-of-type")
const closeBtnproduct = document.querySelector("main section:nth-of-type(6) dialog:first-of-type button:first-of-type")

const gebruikBtn = document.querySelector("main section:nth-of-type(6) button:nth-of-type(2)")
const gebruikDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(2)")
const closeBtngebruik = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(2) button:first-of-type")

const ingredBtn = document.querySelector("main section:nth-of-type(6) button:nth-of-type(3)")
const ingredDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(3)")
const closeBtnIngred = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(3) button:first-of-type")

const beoordBtn = document.querySelector("main section:nth-of-type(6) button:nth-of-type(4)")
const beoordDialog = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(4)")
const closeBtnBeoord = document.querySelector("main section:nth-of-type(6) dialog:nth-of-type(4) button:first-of-type")



btnItem.addEventListener('click', openMenu)
closeBtn.addEventListener("click", closeMenu)

//Menu Ali studentassistent//
function openMenu(){
  menuItem.classList.add('active')
  bodyEl.classList.add('inactive')

}

function closeMenu(){
  menuItem.classList.remove('active')
  bodyEl.classList.remove('inactive')
}


//Video//



//pagina 2 section 6//

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
}); ///


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