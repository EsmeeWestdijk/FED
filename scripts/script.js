const btnItem = document.querySelector('header section:nth-of-type(1) button:nth-of-type(2) img')
const menuItem = document.querySelector('header nav:nth-of-type(1)')
const bodyEl = document.body 
const closeBtn = document.querySelector("header nav:nth-of-type(1) div button")





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


