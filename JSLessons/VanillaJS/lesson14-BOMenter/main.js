const text = document.querySelectorAll('p'); 
const button = document.querySelector('button'); 

button.addEventListener('click',()=>{
    // text[0].innerHTML = window.innerHeight+"px<br>";
    // text[1].innerHTML = window.innerWidth + "px";
    // text[0].innerHTML = screen.width+"px<br>";
    // text[1].innerHTML = screen.height + "px";
    // text[0].innerHTML = screen.availWidth+"px<br>";
    // text[1].innerHTML = screen.availHeight + "px";
    // text[1].innerHTML = screen.colorDepth;
    // text[1].innerHTML = screen.colorDepth;
    // text[1].innerHTML = window.location.href;
    // text[1].innerHTML = window.location.hostname;
    // text[1].innerHTML = window.location.pathname;
    // text[1].innerHTML = window.location.protocol;
    // text[1].innerHTML = navigator.appCodeName;
    // text[1].innerHTML = navigator.product;
    text[1].innerHTML = navigator.appVersion;
    if (window.location.pathname == "/index.htm") {
        button.style.background = 'green';
    }


    if (window.innerWidth <= "1000") {
        text[0].style.color='red'
    }else{
        text[0].style.color='green'

    }
    if (navigator.language == "en-US") {
        document.querySelector("h1").innerHTML = "Hello";
    }else{
        document.querySelector("h1").innerHTML = "Salam";

    }
})



