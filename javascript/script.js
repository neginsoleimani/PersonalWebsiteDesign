const menuBtn = document.querySelector(".navbarMobile");
const mobileMenu = document.querySelector(".mobileMenu")
const closeBtn = document.querySelector(".CloseBtn");

//method of open mobile menu
const mobileNavbarOpen = () =>{
    menuBtn.style.display = "none";
    mobileMenu.style.display="block";
}

//method of close mobile menu
const mobileNavbarClose = () =>{
    menuBtn.style.display = "block";
    mobileMenu.style.display="none";
}

menuBtn.addEventListener("click",mobileNavbarOpen)
closeBtn.addEventListener("click",mobileNavbarClose)