const menuBtn = document.querySelector(".navbarMobile");
const mobileMenu=document.querySelector(".mobileMenu")
const closeBtn = document.querySelector(".CloseBtn");
const logo = document.querySelector(".logo");
 const mobileNavbarOpen = () =>{
    menuBtn.style.display = "none";
    mobileMenu.style.display="block";
}

const mobileNavbarClose = () =>{
    menuBtn.style.display = "block";
    mobileMenu.style.display="none";
}

menuBtn.addEventListener("click",mobileNavbarOpen)
closeBtn.addEventListener("click",mobileNavbarClose)