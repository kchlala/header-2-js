window.onload=function(){
    setInterval(() => {
        document.querySelector(".loading").classList.add("d-none")
        document.body.style.overflowY="scroll"
    }, 200);
}

const barMenu=document.querySelector(".bar-menu");
const closeMenu=document.querySelector(".close-menu")
const mobileHeader=document.querySelector("#mobile-header");
barMenu.addEventListener("click",function(){
    mobileHeader.classList.add("mobile-active")
    this.classList.add("d-none")
})

closeMenu.addEventListener("click",function(){
    barMenu.classList.remove("d-none");
    mobileHeader.classList.remove("mobile-active")

})

var home=document.querySelector(".big-menu .home")
var dropped=document.querySelector(".dropped-t")
home.addEventListener("click",function(){
  dropped.classList.toggle("open")
})


var clickLi = document.querySelector(".click-li")
var dropUl = document.querySelector( ".drop-ul")
clickLi.addEventListener("click",function() {
    dropUl.classList.toggle("lala")
})