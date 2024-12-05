const btnItem = document.querySelector('header nav img:nth-of-type(2)')
const menuItem = document.querySelector('header nav:nth-of-type(2)')
const bodyEl = document.body 
const closeBtn = document.querySelector("header nav:nth-of-type(2) div button")
const thumbnail = document.querySelector("main>section:nth-of-type(6) li img:first-of-type")
const video = document.querySelector("main>section:nth-of-type(6) video")


btnItem.addEventListener('click', openMenu)
closeBtn.addEventListener("click", closeMenu)
thumbnail.addEventListener("click", showVideo)

//Menu//
function openMenu(){
  menuItem.classList.add('active')
  bodyEl.classList.add('inactive')

}

function closeMenu(){
  menuItem.classList.remove('active')
  bodyEl.classList.remove('inactive')
}

//Video//
