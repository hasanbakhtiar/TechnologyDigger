// "use strict";
// mydata
// import { langaz,langen } from "./data";

// mydata
const langen={
    item1: "Home",
    item2: "About",
    item3: "Products",
    item4: "Contact",
    mode:"navbar navbar-expand-lg navbar-light bg-light"
}

const langaz={
    item1: "Ana Səhifə",
    item2: "Haqqımızda",
    item3: "Məhsullar",
    item4: "Əlaqə",
    mode:"navbar navbar-expand-lg navbar-dark bg-dark"
}


// my selectors
const az = document.querySelector('.az');
const en = document.querySelector('.en');
const nav = document.querySelector('nav');
const mode = document.querySelector('.mode');
const navLink = document.querySelectorAll(".nav-link");


const azLang=()=>{
        navLink[0].innerHTML =  langaz.item2;
        navLink[1].innerHTML = langaz.item2;
        navLink[2].innerHTML = langaz.item3;
        navLink[3].innerHTML = langaz.item4;
        
}

const enLang=()=>{
    navLink[0].innerHTML =  langen.item2;
    navLink[1].innerHTML = langen.item2;
    navLink[2].innerHTML = langen.item3;
    navLink[3].innerHTML = langen.item4;
}

const darkMode = ()=>{
    nav.attributes[0].value = langaz.mode;
}
const lightMode = ()=>{
    nav.attributes[0].value = langen.mode;
}
az.addEventListener('click',azLang)
en.addEventListener('click',enLang)
mode.addEventListener('click',darkMode );
mode.addEventListener('dblclick',lightMode);









const b = document.querySelector('.b');
const a = document.querySelector('.a');

const newImg = ()=>{
    b.attributes[0].value = "img/portfolio2.jpg";
}

a.addEventListener('click',newImg);


