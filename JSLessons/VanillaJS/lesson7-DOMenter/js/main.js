// Document Object Model - DOM
// SELECTORS
// simple selectors
// document.getElementsByTagName("h1")[0].innerHTML = "Salam";
// document.getElementsByClassName('test')[0].innerHTML = "Salam1";
// document.getElementById('test1').innerHTML = "Salam2"

// Query Selectors
// document.querySelector('#test2').innerHTML = "Salam3";
// document.querySelectorAll("h4")[0].innerHTML = "salam4";

// for(let reqem = 0; reqem<=5; reqem++){
//     document.querySelectorAll('li')[reqem].innerHTML ="mercedes";
// }

// const li = document.querySelector('h1');
// li.innerText = "<i>new word</i>";
// li.innerHTML = "<i>new word</i>";

// li.style.backgroundColor="red";
// li.style.color="white";

const ul = document.querySelector("ul");

const openClose = () => {
 if (ul.style.transform === "translateX(-200px)") {
    ul.style.transform = "translateX(50px)";
    ul.style.transition = "1s";
 }else{
    ul.style.transform = "translateX(-200px)";
 }
};
