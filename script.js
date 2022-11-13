// declare menu, closeMenu, navbar and header
let menu = document.querySelector(".menu");
let closeImg = document.querySelector(".closeImg");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let goUp = document.querySelector(".goUp");
let designer = document.querySelector(".designer");
let close =document.querySelector(".close");

// if window scrolll start the following functions
window.onscroll = () =>{
    if (window.scrollY > 120){
        header.classList.add("active");
        goUp.classList.add("active");
        navbar.classList.remove("active");

    }else{
        header.classList.remove("active");
        goUp.classList.remove("active");
    }
}

// if menu onclick view navbar 
menu.onclick = () =>{
    navbar.classList.add("active");
    header.classList.add("active");
}

// if closeImg onclick remove navbar 
closeImg.onclick = () =>{
    navbar.classList.remove("active");
    // header.classList.remove("active");
}
// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});

// window onload triger this popup function 
window.onload = () =>{
    designer.classList.add("active");
    setTimeout(() => designer.classList.remove("active"), 8000);
};

// close btn onclick close designer popup 
close.onclick = () =>{
    designer.classList.remove("active");
}